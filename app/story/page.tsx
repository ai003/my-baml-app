'use client'

import { StreamingStoryForm } from '../../components/StreamingStoryForm';

export default function StoryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-6">Story Generator</h1>
        <StreamingStoryForm />
      </div>
    </main>
  );
}