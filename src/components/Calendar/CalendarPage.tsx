// src/components/Calendar/CalendarPage.tsx
"use client";

import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock, List } from "lucide-react";

import DateView from "./DateView";
import TimelineView from "./TimelineView";
import ListView from "./ListView";
import RemindersView from "./RemindersView";

export default function CalendarPage() {
  // top‐level mode: designer vs reminders
  const [mode, setMode] = useState<"designer" | "reminders">("designer");
  // in designer mode: which sub‐view
  const [view, setView] = useState<"date" | "timeline" | "list">("date");

  const btnBase =
    "inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition";

  return (
    <div className="space-y-6">
      {/* 1) Mode switcher */}
      <div className="flex space-x-4">
        <button
          onClick={() => setMode("designer")}
          className={`pb-1 ${
            mode === "designer"
              ? "border-b-2 border-indigo-600 text-indigo-600"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Designer Task
        </button>
        <button
          onClick={() => setMode("reminders")}
          className={`pb-1 ${
            mode === "reminders"
              ? "border-b-2 border-indigo-600 text-indigo-600"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Task Reminder
        </button>
      </div>

      {/* 2) Designer header */}
      {mode === "designer" && (
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Designer Task</h1>
            <p className="text-sm text-gray-600">
              Today is{" "}
              {new Date().toLocaleDateString(undefined, {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      )}

      {/* 3) Sub-view toggles */}
      {mode === "designer" && (
        <div className="flex space-x-2">
          <button
            onClick={() => setView("date")}
            className={`${btnBase} ${
              view === "date" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <CalendarIcon className="w-5 h-5" /> Date
          </button>
          <button
            onClick={() => setView("timeline")}
            className={`${btnBase} ${
              view === "timeline" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <Clock className="w-5 h-5" /> Timeline
          </button>
          <button
            onClick={() => setView("list")}
            className={`${btnBase} ${
              view === "list" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <List className="w-5 h-5" /> List
          </button>
        </div>
      )}

      {/* 4) Content */}
      <div className="rounded-lg bg-white p-6 shadow">
        {mode === "designer" && view === "date" && <DateView />}
        {mode === "designer" && view === "timeline" && <TimelineView />}
        {mode === "designer" && view === "list" && <ListView />}
        {mode === "reminders" && <RemindersView />}
      </div>
    </div>
  );
}
