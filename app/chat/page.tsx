'use client';

import { ChatInterface } from '@/components/chat-interface';

export default function ChatPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <div className="w-full max-w-2xl">
        <ChatInterface />
      </div>
    </main>
  );
}
