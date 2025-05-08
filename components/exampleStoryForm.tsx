'use client'

// Add useState import
import { useState } from 'react';
import { useWriteMeAStory } from "@/baml_client/react/hooks";
import type { Story } from "@/baml_client/types";

export function ExampleStoryForm() {
    const [storyTopic, setStoryTopic] = useState(''); // Add state for input
    const writeMeAStory = useWriteMeAStory({
        onStreamData: (partial) => {
            // Handle real-time updates
            console.log('Story in progress:', partial);
        },
        onFinalData: (final) => {
            // Handle completed story
            console.log('Story completed:', final);
        }
    });

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-3">Example Story Form (Docs Style)</h2>

            <form onSubmit={(e) => {
                e.preventDefault();
                writeMeAStory.mutate(storyTopic);
            }} className="mb-4">
                {/* Add input field */}
                <div className="mb-4">
                    <label htmlFor="exampleStoryTopic" className="block text-sm font-medium mb-1">
                        Enter a story topic:
                    </label>
                    <input
                        type="text"
                        id="exampleStoryTopic"
                        value={storyTopic}
                        onChange={(e) => setStoryTopic(e.target.value)}
                        placeholder="About a brave knight"
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <button
                    type='submit'
                    disabled={writeMeAStory.isLoading}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
                >
                    {writeMeAStory.isLoading ? 'Generating...' : 'Generate Story'}
                </button>
            </form>


            {writeMeAStory.data && (
                <div className="border p-3 rounded bg-gray-50">
                    <h4 className="font-bold mb-1">{writeMeAStory.data.title}</h4>
                    <p>{writeMeAStory.data.content}</p>
                </div>
            )}

            {writeMeAStory.error && <div className="text-red-500">Error: {writeMeAStory.error.message}</div>}
        </div>
    );
}
