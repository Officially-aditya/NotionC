import { Plus } from "lucide-react";

interface Thread {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: boolean;
}

const threads: Record<"Team" | "ChitChat", Thread[]> = {
  Team: [
    {
      id: "thread1",
      name: "Akashat Surana",
      avatar: "/images/avatar1.png",
      lastMessage: "UX Product Designer: I'll share a diff approach…",
      time: "11:45 PM",
      unread: false,
    },
    {
      id: "thread2",
      name: "Vaishnavi Shaw",
      avatar: "/images/avatar2.png",
      lastMessage: "No need to make the empathy mapping…",
      time: "11:47 PM",
      unread: true,
    },
    // …
  ],
  ChitChat: [
    {
      id: "thread4",
      name: "Raghav Juyal",
      avatar: "/images/avatar3.png",
      lastMessage: "Just uploaded a few screenshots of the onboarding…",
      time: "11:23 PM",
      unread: false,
    },
    // …
  ],
};

interface SidebarProps {
  activeTab: "Team" | "ChitChat";
  onTabChange(tab: "Team" | "ChitChat"): void;
  selectedThread: string;
  onSelectThread(id: string): void;
}

export default function ChatSidebar({
  activeTab,
  onTabChange,
  selectedThread,
  onSelectThread,
}: SidebarProps) {
  return (
    <aside className="w-80 bg-gray-50 p-4 space-y-4">
      <h2 className="text-2xl font-bold">Messages</h2>

      {/* Tabs */}
      <div className="flex space-x-2">
        {(["Team", "ChitChat"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`flex-1 px-3 py-2 rounded-full text-sm font-medium transition
              ${
                activeTab === tab
                  ? "bg-indigo-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search inbox"
          className="w-full pl-10 pr-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <span className="absolute left-3 top-2.5 text-gray-400">
          🔍
        </span>
      </div>

      {/* Thread list */}
      <ul className="space-y-2 max-h-[60vh] overflow-y-auto">
        {threads[activeTab].map((t) => (
          <li
            key={t.id}
            onClick={() => onSelectThread(t.id)}
            className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer transition
              ${
                selectedThread === t.id
                  ? "bg-indigo-100"
                  : "hover:bg-gray-100"
              }`}
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between">
                <h4
                  className={`truncate font-medium ${
                    t.unread ? "text-gray-900" : "text-gray-700"
                  }`}
                >
                  {t.name}
                </h4>
                <span className="text-xs text-gray-500">
                  {t.time}
                </span>
              </div>
              <p
                className={`truncate text-xs ${
                  t.unread ? "font-semibold text-gray-800" : "text-gray-500"
                }`}
              >
                {t.lastMessage}
              </p>
            </div>
            {t.unread && <span className="ml-1 w-2 h-2 bg-red-500 rounded-full" />}
          </li>
        ))}
      </ul>
    </aside>
  );
}
