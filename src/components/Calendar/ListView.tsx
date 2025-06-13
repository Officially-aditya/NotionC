// src/components/Calendar/ListView.tsx
"use client";

import React from "react";

// Define your event shape
interface CalendarEvent {
  id: string;
  title: string;
  date: string;        // in ISO form e.g. "2025-05-29"
  startTime: string;   // "HH:MM AM/PM"
  endTime: string;     // "HH:MM AM/PM"
  attendees?: string[];// URLs to avatar images, or names
}

// Sample data — replace with real fetch/props
const sampleEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Wireframe Review",
    date: "2025-05-30",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    attendees: [
      "/images/avatar1.png",
      "/images/avatar2.png",
    ],
  },
  {
    id: "2",
    title: "Design Critique",
    date: "2025-05-30",
    startTime: "02:00 PM",
    endTime: "03:00 PM",
    attendees: [
      "/images/avatar3.png",
    ],
  },
  {
    id: "3",
    title: "Sprint Planning",
    date: "2025-06-01",
    startTime: "09:00 AM",
    endTime: "10:30 AM",
  },
  {
    id: "4",
    title: "Client Sync",
    date: "2025-06-01",
    startTime: "11:00 AM",
    endTime: "11:45 AM",
    attendees: [
      "/images/avatar1.png",
      "/images/avatar4.png",
      "/images/avatar5.png",
    ],
  },
];

// Helper to group by date
function groupByDate(events: CalendarEvent[]) {
  return events.reduce<Record<string, CalendarEvent[]>>((acc, ev) => {
    if (!acc[ev.date]) acc[ev.date] = [];
    acc[ev.date].push(ev);
    return acc;
  }, {});
}

export default function ListView() {
  const grouped = groupByDate(sampleEvents);

  return (
    <div className="space-y-6">
      {Object.entries(grouped).map(([date, events]) => (
        <section key={date}>
          <h3 className="text-xl font-semibold mb-2">
            {new Date(date).toLocaleDateString(undefined, {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </h3>
          <ul className="space-y-4">
            {events.map((ev) => (
              <li
                key={ev.id}
                className="flex items-center justify-between rounded-lg border border-gray-300 bg-white p-4 shadow-sm"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-lg">{ev.title}</h4>
                  <p className="text-sm text-gray-600">
                    {ev.startTime} &ndash; {ev.endTime}
                  </p>
                </div>
                {ev.attendees && ev.attendees.length > 0 && (
                  <div className="flex -space-x-2">
                    {ev.attendees.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt="avatar"
                        className="h-8 w-8 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}











