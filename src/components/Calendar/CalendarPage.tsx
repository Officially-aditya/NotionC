// src/components/Calendar/CalendarPage.tsx
"use client";

import React, { useState } from "react";
import { Clock, Calendar as CalendarIcon, List } from "lucide-react";
import DateView from "./DateView";
import TimelineView from "./TimelineView";
import ListView from "./ListView";

export default function CalendarPage() {
  const tabs = [
    { key: "Date", icon: <CalendarIcon />, label: "Date" },
    { key: "Timeline", icon: <Clock />, label: "Timeline" },
    { key: "List", icon: <List />, label: "List" },
  ] as const;

  const [active, setActive] = useState<typeof tabs[number]["key"]>("Date");

  const renderView = () => {
    switch (active) {
      case "Date":
        return <DateView />;
      case "Timeline":
        return <TimelineView />;
      case "List":
        return <ListView />;
    }
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="px-6 pt-6">
        <div className="flex space-x-4 border-b mb-4">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`flex items-center gap-1 pb-2 ${
                active === t.key
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              {t.icon}
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-auto px-6 pb-6">
        <div className="bg-white rounded shadow w-full h-full">
          {renderView()}
        </div>
      </div>
    </div>
  );
}
