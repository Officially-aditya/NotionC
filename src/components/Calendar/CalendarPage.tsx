// src/components/Calendar/CalendarPage.tsx
"use client";

import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock, List } from "lucide-react";

import DateView from "./DateView";
import TimelineView from "./TimelineView";
import ListView from "./ListView";

export default function CalendarPage() {
  const [view, setView] = useState<"date" | "timeline" | "list">("date");

  const btnBase =
    "inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition";
  const active = "bg-indigo-600 text-white";
  const inactive = "bg-gray-200 text-gray-700 hover:bg-gray-300";

  return (
    <div className="space-y-6">
      {/* View toggles */}
      <div className="flex space-x-2">
        <button
          onClick={() => setView("date")}
          className={`${btnBase} ${view === "date" ? active : inactive}`}
        >
          <CalendarIcon className="w-5 h-5" />
          Date
        </button>
        <button
          onClick={() => setView("timeline")}
          className={`${btnBase} ${view === "timeline" ? active : inactive}`}
        >
          <Clock className="w-5 h-5" />
          Timeline
        </button>
        <button
          onClick={() => setView("list")}
          className={`${btnBase} ${view === "list" ? active : inactive}`}
        >
          <List className="w-5 h-5" />
          List
        </button>
      </div>

      {/* View content */}
      <div className="rounded-lg bg-white p-6 shadow">
        {view === "date" && <DateView />}
        {view === "timeline" && <TimelineView />}
        {view === "list" && <ListView />}
      </div>
    </div>
  );
}
