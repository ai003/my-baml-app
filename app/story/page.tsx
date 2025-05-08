'use client'

// Comment out unused component imports
// import { StreamingStoryForm } from '../../components/StreamingStoryForm';
// import { StoryForm } from '../../components/story-form';
import { ExampleStoryForm } from '../../components/exampleStoryForm';

export default function StoryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-black">Story Generator</h1>

      <div className="flex justify-center items-center w-full">
        {/* Fixed width container that won't expand with content */}
        <div className="w-[500px] p-6 bg-white rounded shadow text-black">
          <ExampleStoryForm />
        </div>

        {/* Commented out other components
        <div className="flex-1 p-6 bg-white rounded shadow text-black">
          <StreamingStoryForm />
        </div>

        <div className="flex-1 p-6 bg-white rounded shadow text-black">
          <StoryForm />
        </div>
        */}
      </div>
    </main>
  );
}