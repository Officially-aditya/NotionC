"use client";

import Image from "next/image";
import React, { useState } from "react";
import CommunityTab from "@/components/CommunityTab";
import CollectionsPage from "@/components/CollectionsPage";
import Canvas from "@/components/Canvas";
import { ChevronDown, Plus } from "lucide-react";

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
    avatars: [
      "/images/avatar1.png",
      "/images/avatar2.png",
      "/images/avatar3.png",
    ],
  },
  {
    name: "Blockchain Prototype",
    desc: "Implement P2P network layering",
    date: "22 May, 2025 – 11:00 AM",
    avatars: [
      "/images/avatar2.png",
      "/images/avatar3.png",
      "/images/avatar4.png",
    ],
  },
  {
    name: "Video Streaming MVP",
    desc: "Build IPFS integration module",
    date: "23 May, 2025 – 1:30 PM",
    avatars: [
      "/images/avatar3.png",
      "/images/avatar4.png",
      "/images/avatar5.png",
    ],
  },
  {
    name: "Forensic Imager Firmware",
    desc: "Optimize hardware-level routines",
    date: "24 May, 2025 – 10:00 AM",
    avatars: [
      "/images/avatar4.png",
      "/images/avatar5.png",
      "/images/avatar1.png",
    ],
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
  const [activeTab, setActiveTab] = useState<"Today" | "Week" | "Month">(
    "Today"
  );
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-white text-black">
      <aside
        className="hidden md:flex w-80 flex-col shrink-0"
        style={{ backgroundColor: "#dcdcdc" }}
      >
        <div className="px-6 py-8 flex flex-col flex-1">
          <h2 className="text-3xl font-semibold text-black mb-10">Logo</h2>
          <nav className="flex-1 space-y-4">
            {navItems.map((item) => {
              // Projects dropdown menu

              if (item.label === "Projects/Team") {
                return (
                  <div key={item.label} className="space-y-2">
                    <button
                      onClick={() => {
                        setActiveNav(item.label);
                        setProjectDropdownOpen((prev) => !prev);
                      }}
                      className={`flex w-full items-center justify-between px-3 py-2 rounded-md ${
                        activeNav === item.label
                          ? "bg-white text-black"
                          : "text-black hover:bg-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          projectDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {projectDropdownOpen && (
                      <div className="ml-10 space-y-2 text-sm">
                        <button className="flex items-center gap-2 text-black hover:text-indigo-600">
                          <Plus className="w-4 h-4" />
                          New Project
                        </button>
                        <div className="text-gray-600 text-xs uppercase mt-1">
                          Recent
                        </div>
                        <ul className="space-y-1">
                          {[
                            { name: "UI Designs", icon: "📊" },
                            { name: "Project Doc.", icon: "📄" },
                            { name: "Web Application", icon: "🗂️" },
                            { name: "Wireframes", icon: "📐" },
                          ].map((proj, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-black hover:text-indigo-600 cursor-pointer"
                            >
                              <span className="text-lg">{proj.icon}</span>
                              <span>{proj.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              }

              return (
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
              );
            })}
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
        {/* Only show header on Home */}
        {activeNav === "Home" && (
          <header className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-4 text-black">
            <h1 className="text-4xl font-bold" style={{ color: "#2d2d2d" }}>
              DASHBOARD
            </h1>
            <input
              type="text"
              placeholder="Search..."
              className="w-64 rounded-md border border-gray-400 bg-white px-4 py-2 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </header>
        )}

        <main className="flex-1 overflow-y-auto p-6 bg-white">
          {activeNav === "Home" && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="space-y-8 lg:col-span-2">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <section className="rounded-[24px] bg-[#F6F6F6] p-6 shadow-md border border-[#D9D9D9]">
                    <h2 className="mb-4 text-2xl font-semibold">
                      Today’s Tasks
                    </h2>
                    <ul className="space-y-3">
                      {tasks.map((task, idx) => (
                        <li
                          key={idx}
                          className="flex items-start rounded-[24px] border border-[#D9D9D9] bg-white p-4 hover:bg-gray-100"
                        >
                          <div className="flex-1">
                            <h3 className="font-medium">{task.title}</h3>
                            <p className="mt-1 text-sm text-gray-600">
                              {task.description}
                            </p>
                          </div>
                          <button className="ml-4 rounded-md bg-[#5865f2] px-3 py-1 text-sm font-medium text-white hover:bg-[#4752d6]">
                            Done
                          </button>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="rounded-[24px] bg-[#F6F6F6] p-6 shadow-md border border-[#D9D9D9]">
                    <h2 className="mb-4 text-2xl font-semibold">
                      Today’s Meetings
                    </h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {meetings.map((meet, idx) => (
                        <div
                          key={idx}
                          className="rounded-[24px] border border-[#D9D9D9] bg-white p-4 hover:bg-gray-100"
                        >
                          <p className="font-semibold">{meet.time}</p>
                          <p className="mt-1 text-sm text-gray-600">
                            {meet.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

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

              <div className="space-y-8">
                <section className="rounded-[24px] bg-[#F6F6F6] p-6 shadow-md border border-[#D9D9D9]">
                  <h2 className="mb-4 text-2xl font-semibold">
                    Projects Worked
                  </h2>
                  <div className="flex items-center justify-center">
                    <div className="relative h-40 w-40">
                      <svg
                        viewBox="0 0 36 36"
                        className="absolute h-full w-full"
                      >
                        <path
                          className="text-gray-200"
                          d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="text-indigo-500"
                          strokeDasharray="100, 100"
                          strokeDashoffset="75"
                          d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
                        75%
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    {legendItems.map((legend, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className={`h-4 w-12 rounded ${legend.color}`} />
                        <div className="text-sm font-medium">
                          {legend.label}
                        </div>
                        <div className="ml-auto text-sm text-gray-600">
                          {legend.percent}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-[24px] bg-[#F6F6F6] p-6 shadow-md border border-[#D9D9D9]">
                  <h2 className="mb-4 text-2xl font-semibold">Reminders</h2>
                  <ul className="space-y-3">
                    {reminders.map((reminder, idx) => (
                      <li
                        key={idx}
                        className="rounded-[24px] border border-[#D9D9D9] bg-white p-4 hover:bg-gray-100"
                      >
                        <div className="flex justify-between">
                          <div>{reminder.title}</div>
                          <div className="text-sm text-gray-600">
                            {reminder.time}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          )}

          {activeNav === "Community" && (
            <div className="px-0">
              <CommunityTab />
            </div>
          )}
          {activeNav === "Collection" && (
            <div className="px-0">
              <CollectionsPage />
            </div>
          )}
          {activeNav === "Canvas" && (
            <div className="px-0">
              <Canvas />
            </div>
          )
          }
        </main>
      </div>
    </div>
  );
}
