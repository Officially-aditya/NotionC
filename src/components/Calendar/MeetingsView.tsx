// src/components/Calendar/MeetingsView.tsx
"use client";

import React from "react";

const meetings = [
  { time: "9:00 AM", desc: "Stand‐up Meeting" },
  { time: "11:00 AM", desc: "Client Sync" },
  { time: "2:00 PM", desc: "UX Workshop" },
  { time: "4:30 PM", desc: "Team Retrospective" },
];

export default function MeetingsView() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Meetings</h2>
      <ul className="space-y-3">
        {meetings.map((m, i) => (
          <li
            key={i}
            className="flex justify-between rounded-lg border p-4 hover:bg-gray-50"
          >
            <div>
              <p className="font-medium">{m.time}</p>
              <p className="text-gray-600">{m.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
