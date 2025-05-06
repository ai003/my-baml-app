'use client'

import { useState, useEffect } from 'react';
import { useWriteMeAStory } from "@/baml_client/react/hooks";

export function StreamingStoryForm() {
    const { data, isLoading, error, mutate } = useWriteMeAStory();
    const [storyTopic, setStoryTopic] = useState('');

    //useEffect to moniter data changes
    useEffect(() => {
        if (data) {
            console.log('Data received:', data);
        }
    }, [data]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Use the storyTopic from state instead of hardcoded value
        mutate(storyTopic || 'About a cat in a hat');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="mb-6">
                <div className="mb-4">
                    <label htmlFor="storyTopic" className="block text-sm font-medium mb-1">
                        Enter a story topic:
                    </label>
                    <input
                        type="text"
                        id="storyTopic"
                        value={storyTopic}
                        onChange={(e) => setStoryTopic(e.target.value)}
                        placeholder="About a cat in a hat"
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                    {isLoading ? 'Generating...' : 'Generate Story'}
                </button>
            </form>

            {error && <div className="text-red-600 mb-4">{error.toString()}</div>}

            {data && (
                <div className="mt-4">
                    <h2 className="text-xl font-bold mb-2">Your Story</h2>
                    <div className="bg-white border border-gray-200 p-4 rounded shadow text-black font-normal leading-relaxed">
                        {data.title && <h3 className="text-lg font-bold mb-2">{data.title}</h3>}
                        {data.content ? 
                            <div>{data.content}</div> : 
                            (typeof data === 'object' ? 
                                <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre> : 
                                String(data)
                            )
                        }
                    </div>
                </div>
            )}
        </div>
    );
}