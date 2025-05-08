'use client'

  // ✅ Automatically generates a server action and React hook

import { useWriteMeAStory } from "@/baml_client/react/hooks";

export function StoryForm() {
  const writeMeAStory = useWriteMeAStory();

  return (
    <div>
      <button
        onClick={() => writeMeAStory.mutate("About a cat in a hat")}
        disabled={writeMeAStory.isLoading}>
        {writeMeAStory.isLoading ? 'Generating...' : 'Generate Story'}
      </button>

      <div>
        <h4>{writeMeAStory.data?.title}</h4>
        <p>{writeMeAStory.data?.content}</p>
      </div>

      {writeMeAStory.error && <div>Error: {writeMeAStory.error.message}</div>}
    </div>
  );
}
