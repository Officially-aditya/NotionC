import React from "react";

const dates = [12, 13, 14, 15, 16, 17, 18];

const events = [
  {
    title: "UI/UX",
    day: 13,
    member: "Rishab",
    color: "bg-orange-100",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    title: "Wireframing",
    day: 16,
    member: "Jenny",
    color: "bg-blue-100",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function TimelineView() {
  return (
    <div className="w-full h-full p-6 overflow-x-auto">
      <div className="relative min-h-full w-max">
        {/* Horizontal line ABOVE date numbers */}
        <div className="border-t border-gray-300 w-full mb-1" />

        {/* Date Headers */}
        <div className="flex">
          {dates.map((date, index) => (
            <div
              key={index}
              className="w-32 text-center text-sm font-semibold text-gray-700"
            >
              {date}
            </div>
          ))}
        </div>

        {/* Horizontal line touching the top of vertical grid lines */}
        <div className="border-t border-gray-300 w-full mt-1 mb-2" />

        {/* Vertical Grid Lines */}
        <div className="absolute top-[64px] left-0 w-full h-full flex z-0 pointer-events-none">
          {dates.map((_, index) => (
            <div
              key={index}
              className="w-32 flex-shrink-0 flex justify-center"
            >
              <div className="w-px bg-gray-200 h-full" />
            </div>
          ))}
        </div>

        {/* Event Cards */}
        <div className="relative z-10 mt-2">
          {events.map((event, idx) => {
            const dateIndex = dates.indexOf(event.day);
            if (dateIndex === -1) return null;

            return (
              <div
                key={idx}
                className="absolute"
                style={{
                  left: `${dateIndex * 8}rem`,
                  top: `${idx * 80}px`,
                }}
              >
                <div
                  className={`w-28 p-2 rounded shadow ${event.color} flex items-center gap-2`}
                >
                  <img
                    src={event.avatar}
                    alt={event.member}
                    className="w-6 h-6 rounded-full"
                  />
                  <div className="text-xs font-medium">{event.title}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Spacer */}
        <div className="h-[400px]" />
      </div>
    </div>
  );
}
