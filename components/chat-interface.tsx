'use client'

import { useChat } from "@/baml_client/react/hooks";
import { useState } from "react";
import { Message } from "@/baml_client/types";

export function ChatInterface() {
    const [input, setInput] = useState<string>("");
    const [messages, setMessages] = useState<Message[]>([]);

    const chat = useChat({
        stream: true,
        onStreamData: (partialResponse) => {
            if (partialResponse === undefined || partialResponse === null) return;
            setMessages(prev => {
                const lastMessage = prev[prev.length - 1];
                // If the last message was from the assistant, update it. Otherwise, add a new assistant message.
                if (lastMessage && lastMessage.role === 'assistant') {
                    return [...prev.slice(0, -1), { role: "assistant", content: partialResponse }];
                } else {
                    return [...prev, { role: "assistant", content: partialResponse }];
                }
            });
        },
        onFinalData: (finalResponse) => {
            // onStreamData should have already set the final content.
            // This callback can be used for any final actions if needed.
            console.log('Final chat response:', finalResponse);
        },
        onError: (error) => {
            console.error("Chat error:", error);
            const errorMessage: Message = {
                role: "assistant",
                content: "Sorry, I encountered an error processing your request.",
            };
            // Add error message to chat, ensuring not to duplicate if already handled
            setMessages(prev => {
                const lastMessage = prev[prev.length - 1];
                if (lastMessage && lastMessage.content === errorMessage.content && lastMessage.role === 'assistant') {
                    return prev;
                }
                return [...prev, errorMessage];
            });
        }
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newUserMessage: Message = { role: "user", content: input };
        // Add user message to state and then pass the updated messages array to mutate
        const updatedMessages = [...messages, newUserMessage];
        setMessages(updatedMessages);
        setInput("");

        // Call mutate with the complete, updated conversation history
        chat.mutate(updatedMessages);
    };

    return (
        <div className="flex flex-col h-[calc(100vh-10rem)] w-full max-w-2xl mx-auto bg-white border border-black rounded-lg shadow-lg">
            <div className="flex-grow p-6 overflow-y-auto space-y-4">
                {messages.map((message, i) => (
                    <div key={i} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow ${message.role === "user"
                                    ? "bg-black text-white" // User messages: black background, white text
                                    : "bg-gray-200 text-black" // Assistant messages: light gray background, black text
                                }`}
                        >
                            {message.content}
                        </div>
                    </div>
                ))}
                {/* Display loading state only if there are no messages or the last message isn't an assistant's partial response */}
                {chat.isLoading && (messages.length === 0 || messages[messages.length - 1].role === 'user') && (
                    <div className="flex justify-start">
                        <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow bg-gray-200 text-black">
                            Typing...
                        </div>
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-black">
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-grow p-2 border border-black rounded-md focus:ring-2 focus:ring-black focus:border-transparent outline-none text-black"
                    />
                    <button
                        type="submit"
                        disabled={chat.isLoading || !input.trim()}
                        className="px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}
