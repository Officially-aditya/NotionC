// src/components/Calendar/RemindersView.tsx
"use client";

import React from "react";

const reminders = [
  { title: "Daily Stand-up", time: "9:00 AM" },
  { title: "Design Review", time: "1:00 PM" },
  { title: "Deploy to Prod", time: "5:00 PM" },
  { title: "Send Status Report", time: "6:30 PM" },
];

export default function RemindersView() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Task Reminders</h2>
      <ul className="space-y-3">
        {reminders.map((r, i) => (
          <li
            key={i}
            className="flex justify-between rounded-lg border p-4 hover:bg-gray-50"
          >
            <span>{r.title}</span>
            <span className="text-gray-600">{r.time}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
