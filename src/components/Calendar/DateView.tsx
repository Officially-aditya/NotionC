// src/components/Calendar/DateView.tsx
"use client";

import React, { useState } from "react";
import { ChevronDown, Calendar as CalendarIcon } from "lucide-react";

const days = ["S", "M", "T", "W", "T", "F", "S"];
const dates = [25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7];

export default function DateView() {
  const [month, setMonth] = useState("May");
  const [year, setYear] = useState(2025);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Designer Task</h1>
          <p className="text-sm text-gray-600">
            Today is Monday, May 26th 2025
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <button className="px-2 py-1 border rounded hover:bg-gray-100">Filter</button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
            + Create Task
          </button>
        </div>
      </div>

      {/* Sub-tabs */}
      <div className="flex space-x-4 border-b">
        <span className="pb-2 cursor-pointer">Kanban</span>
        <span className="pb-2 text-indigo-600 border-b-2 border-indigo-600 cursor-pointer">
          Timeline
        </span>
      </div>

      {/* Month selector */}
      <div className="flex items-center justify-between text-sm text-gray-700">
        <div className="flex items-center space-x-1 cursor-pointer">
          <CalendarIcon className="w-5 h-5" />
          <span>{month}</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-2">‹</button>
          <span>
            {month} {year}
          </span>
          <button className="px-2">›</button>
        </div>
      </div>

      {/* Days header */}
      <div className="grid grid-cols-14 gap-0 text-center text-xs text-gray-600">
        {dates.map((d, i) => (
          <div key={i} className="py-2">
            <div className="font-medium">{days[i % 7]}</div>
            <div>{d}</div>
          </div>
        ))}
      </div>

      {/* YOUR TIMELINE GRID GOES HERE */}
      <div className="relative overflow-x-auto">
        <div className="absolute inset-0 grid grid-cols-14 border-l border-gray-200">
          {[...Array(14)].map((_, i) => (
            <div key={i} className="border-r border-gray-200 h-full" />
          ))}
        </div>

        {/* Example event card */}
        <div
          className="absolute top-4 left-[calc(4*8rem)] w-32 bg-white p-2 rounded-lg shadow"
          style={{ left: `calc(${(28 - dates[0]) * 8}rem)` /* e.g. for 28th */ }}
        >
          <div className="flex items-center space-x-2">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-6 h-6 rounded-full"
            />
            <span className="text-xs font-medium">Upcoming Project</span>
          </div>
          <div className="mt-1 text-xs text-gray-500">Saturday 25 – Tuesday 29</div>
        </div>

        <div className="h-40" /> {/* spacer so scroll works */}
      </div>
    </div>
);
}
