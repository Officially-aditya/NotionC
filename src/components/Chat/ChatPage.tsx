"use client";

import { useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";

export default function ChatPage({ tab = "Team" }: { tab: "Team" | "ChitChat" }) {
  const [activeTab, setActiveTab] = useState<"Team" | "ChitChat">(tab);
  const [selectedThread, setSelectedThread] = useState<string>("thread1");

  return (
    <div className="flex h-full">
      <ChatSidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        selectedThread={selectedThread}
        onSelectThread={setSelectedThread}
      />
      <div className="flex-1 flex flex-col bg-white border-l border-gray-200">
        <ChatWindow threadId={selectedThread} />
      </div>
    </div>
  );
}
