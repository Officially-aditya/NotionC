"use client";

import { useState, useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

interface Message {
  id: string;
  text: string;
  sender: "me" | "them";
  avatar?: string;
  time: string;
}

const mockThreads: Record<string, Message[]> = {
  thread1: [
    { id: "m1", sender: "them", text: "Hey, just saw your latest design.", time: "11:40 PM", avatar: "/images/avatar1.png" },
    { id: "m2", sender: "me", text: "Thanks! Working on the spacing now.", time: "11:41 PM" },
    // …
  ],
  // other threads…
};

interface ChatWindowProps {
  threadId: string;
}

export default function ChatWindow({ threadId }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(mockThreads[threadId] || []);
  }, [threadId]);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  const handleSend = (text: string) => {
    const newMsg: Message = {
      id: Date.now().toString(),
      sender: "me",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((m) => [...m, newMsg]);
  };

  return (
    <div className="flex-1 flex flex-col">
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-6 py-4 space-y-4"
      >
        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}
      </div>

      <div className="border-t border-gray-200 p-4">
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
}
