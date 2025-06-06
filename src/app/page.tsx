"use client";

import Image from "next/image";
import React, { useState } from "react";

const navItems = [
  { label: "Home", icon: "🏠" },
  { label: "Chat", icon: "💬" },
  { label: "Community", icon: "👥" },
  { label: "Projects/Team", icon: "📁" },
  { label: "Calendar", icon: "🗓️" },
  { label: "Collection", icon: "📂" },
  { label: "Canvas", icon: "🖼️" },
];

const tasks = [
  { title: "Design Review", description: "Finalize UI mockups" },
  { title: "API Integration", description: "Connect to backend endpoints" },
  { title: "Write Tests", description: "Achieve 80% coverage" },
  { title: "Deploy Staging", description: "Publish latest build" },
];

const meetings = [
  { time: "9:00 AM", desc: "Stand-up Meeting" },
  { time: "11:00 AM", desc: "Client Sync" },
  { time: "2:00 PM", desc: "UX Workshop" },
  { time: "4:30 PM", desc: "Team Retrospective" },
];

const projects = [
  {
    name: "Temp Mail UI/UX Project",
    desc: "Redesign dashboard and user flow",
    date: "21 May, 2025 – 2:00 PM",
    avatars: ["/images/avatar1.png", "/images/avatar2.png", "/images/avatar3.png"],
  },
  {
    name: "Blockchain Prototype",
    desc: "Implement P2P network layering",
    date: "22 May, 2025 – 11:00 AM",
    avatars: ["/images/avatar2.png", "/images/avatar3.png", "/images/avatar4.png"],
  },
  {
    name: "Video Streaming MVP",
    desc: "Build IPFS integration module",
    date: "23 May, 2025 – 1:30 PM",
    avatars: ["/images/avatar3.png", "/images/avatar4.png", "/images/avatar5.png"],
  },
  {
    name: "Forensic Imager Firmware",
    desc: "Optimize hardware-level routines",
    date: "24 May, 2025 – 10:00 AM",
    avatars: ["/images/avatar4.png", "/images/avatar5.png", "/images/avatar1.png"],
  },
];

const legendItems = [
  { label: "Temp Mail UI/UX", color: "bg-indigo-500", percent: "25%" },
  { label: "Blockchain Prototype", color: "bg-green-500", percent: "30%" },
  { label: "Video Streaming MVP", color: "bg-yellow-500", percent: "20%" },
  { label: "Forensic Imager", color: "bg-red-500", percent: "25%" },
];

const reminders = [
  { title: "Daily Stand-up", time: "9:00 AM" },
  { title: "Design Review", time: "1:00 PM" },
  { title: "Deploy to Prod", time: "5:00 PM" },
  { title: "Send Status Report", time: "6:30 PM" },
];

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState("Home");
  const [activeTab, setActiveTab] = useState<"Today" | "Week" | "Month">("Today");

  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Sidebar */}
      <aside className="hidden md:flex w-86 flex-col" style={{ backgroundColor: "#dcdcdc" }}>
        <div className="px-6 py-8 flex flex-col flex-1">
          <h2 className="text-3xl font-semibold text-black mb-10">My Logo</h2>
          <nav className="flex-1 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveNav(item.label)}
                className={`flex w-full items-center px-3 py-2 rounded-md ${
                  activeNav === item.label
                    ? "bg-white text-black"
                    : "text-black hover:bg-gray-300"
                }`}
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
          <div className="mt-auto space-y-3">
            <button className="flex w-full items-center px-3 py-2 text-black hover:text-white hover:bg-gray-700 rounded-md">
              <span className="mr-2 text-xl">⚙️</span>
              <span>Settings</span>
            </button>
            <button className="flex w-full items-center px-3 py-2 text-black hover:text-white hover:bg-gray-700 rounded-md">
              <span className="mr-2 text-xl">🚪</span>
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Top Header */}
        <header className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-4 text-black">
          <h1 className="text-4xl font-bold style={{ color: '#2d2d2d' }}">DASHBOARD</h1>
          <input
            type="text"
            placeholder="Search..."
            className="w-64 rounded-md border border-gray-400 bg-white px-4 py-2 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-white">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
  {/* Tasks & Meetings */}
  <div className="space-y-8 lg:col-span-2">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Tasks */}
      <section className="rounded-[24px] bg-[#F6F6F6] p-6 shadow-md border border-[#D9D9D9]">
        <h2 className="mb-4 text-2xl font-semibold">Today’s Tasks</h2>
        <ul className="space-y-3">
          {tasks.map((task, idx) => (
            <li
              key={idx}
              className="flex items-start rounded-[24px] border border-[#D9D9D9] bg-white p-4 hover:bg-gray-100"
            >
              <div className="flex-1">
                <h3 className="font-medium">{task.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{task.description}</p>
              </div>
              <button className="ml-4 rounded-md bg-[#5865f2] px-3 py-1 text-sm font-medium text-white hover:bg-[#4752d6]">
                Done
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Meetings */}
      <section className="rounded-[24px] bg-[#F6F6F6] p-6 shadow-md border border-[#D9D9D9]">
        <h2 className="mb-4 text-2xl font-semibold">Today’s Meetings</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {meetings.map((meet, idx) => (
            <div
              key={idx}
              className="rounded-[24px] border border-[#D9D9D9] bg-white p-4 hover:bg-gray-100"
            >
              <p className="font-semibold">{meet.time}</p>
              <p className="mt-1 text-sm text-gray-600">{meet.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>

    {/* Project Lists */}
    <section className="rounded-[24px] bg-[#F6F6F6] p-6 shadow-md border border-[#D9D9D9]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Project Lists</h2>
        <div className="space-x-2">
          {(["Today", "Week", "Month"] as const).map((label) => (
            <button
              key={label}
              onClick={() => setActiveTab(label)}
              className={`rounded-md px-4 py-2 text-sm font-medium ${
                activeTab === label
                  ? "bg-[#5865f2] text-white"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 space-y-5">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-[24px] border border-[#D9D9D9] bg-white p-4 hover:bg-gray-100"
          >
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">{proj.name}</h3>
              <p className="text-sm text-gray-600">{proj.desc}</p>
              <p className="text-xs text-gray-500">{proj.date}</p>
            </div>
            <div className="flex -space-x-2">
              {proj.avatars.map((src, aidx) => (
                <div
                  key={aidx}
                  className="relative h-8 w-8 rounded-full border-2 border-white"
                >
                  <Image
                    src={src}
                    alt="avatar"
                    fill
                    className="rounded-full"
                    sizes="32px"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>

  {/* Sidebar Metrics */}
  <div className="space-y-8">
    {/* Donut Chart */}
    <section className="rounded-[24px] bg-[#F6F6F6] p-6 shadow-md border border-[#D9D9D9]">
      <h2 className="mb-4 text-2xl font-semibold">Projects Worked</h2>
      <div className="flex items-center justify-center">
        <div className="relative h-40 w-40">
          <svg viewBox="0 0 36 36" className="absolute h-full w-full">
            <path
              className="text-gray-200"
              d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <path
              className="text-[#5865f2]"
              strokeDasharray="40, 100"
              d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-[#5865f2]">40%</span>
          </div>
        </div>
      </div>
      <ul className="mt-6 space-y-2 text-sm text-black">
        {legendItems.map((item, idx) => (
          <li key={idx} className="flex items-center">
            <span className={`mr-2 h-3 w-3 rounded-full ${item.color}`}></span>
            <span>
              {item.label} — <span className="font-medium">{item.percent}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>

    {/* Reminders */}
    <section className="rounded-[24px] bg-[#F6F6F6] p-6 shadow-md border border-[#D9D9D9]">
      <h2 className="mb-4 text-2xl font-semibold">Reminders</h2>
      <ul className="space-y-3">
        {reminders.map((rem, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between rounded-[24px] border border-[#D9D9D9] bg-white px-4 py-2 hover:bg-gray-100"
          >
            <span>{rem.title}</span>
            <span className="text-gray-600">{rem.time}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-center">
        <button
          className="rounded-[24px] border-2 border-[#5865f2] px-4 py-2 text-sm font-medium text-[#5865f2] hover:bg-[#f0f2ff]"
        >
          + Add Reminder
        </button>
      </div>
    </section>
  </div>
</div>

        </main>
      </div>

      {/* Mobile Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-10 flex justify-around bg-white p-3 text-black md:hidden border-t border-gray-300">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveNav(item.label)}
            className={`flex flex-col items-center text-sm ${
              activeNav === item.label ? "text-indigo-500" : "hover:text-gray-800"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="mt-1">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
