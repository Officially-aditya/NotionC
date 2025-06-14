// src/app/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Inbox,
  MessageCircle,
  Users,
  Folder,
  Calendar as CalendarIcon,
  Layout,
  Settings,
  LogOut,
  ChevronDown,
  Plus,
} from "lucide-react";

import ChatPage from "@/components/Chat/ChatPage";
import CommunityTab from "@/components/CommunityTab";
import CollectionsPage from "@/components/CollectionsPage";
import Canvas from "@/components/Canvas";
import NewProject from "@/components/NewProject";
import ProjectDocuments from "@/components/ProjectDocuments";

import CalendarPage from "@/components/Calendar/CalendarPage";
import RemindersView from "@/components/Calendar/RemindersView";
import MeetingsView from "@/components/Calendar/MeetingsView";

const navItems = [
  { label: "Home", icon: <Inbox /> },
  {
    label: "Chat",
    icon: <MessageCircle />,
    hasDropdown: true,
    subItems: ["Team", "ChitChat"],
  },
  {
    label: "Community",
    icon: <Users />,
    hasDropdown: true,
    subItems: ["Learnings", "Referings", "Posts"],
  },
  {
    label: "Projects/Team",
    icon: <Folder />,
    hasDropdown: true,
    subItems: ["NewProject", "ProjectDoc"],
  },
  {
    label: "Calendar",
    icon: <CalendarIcon />,
    hasDropdown: true,
    subItems: ["Designer Task", "Task Reminder", "Meetings"],
  },
  { label: "Collection", icon: <Layout /> },
  { label: "Canvas", icon: <Layout /> },
] as const;

type NavKey = typeof navItems[number]["label"];
type ProjectTab = "NewProject" | "ProjectDoc";
type CalendarTab = "Designer Task" | "Task Reminder" | "Meetings";
type ChatTab = "Team" | "ChitChat";
type CommTab = "Learnings" | "Referings" | "Posts";

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState<NavKey>("Home");
  const [activeTab, setActiveTab] = useState<"Today" | "Week" | "Month">("Today");

  // dropdown states
  const [chatOpen, setChatOpen] = useState(false);
  const [commOpen, setCommOpen] = useState(false);
  const [projOpen, setProjOpen] = useState(false);
  const [calOpen, setCalOpen] = useState(false);

  // sub-tabs
  const [chatTab, setChatTab] = useState<ChatTab>("Team");
  const [commTab, setCommTab] = useState<CommTab>("Learnings");
  const [projTab, setProjTab] = useState<ProjectTab | null>(null);
  const [calTab, setCalTab] = useState<CalendarTab>("Designer Task");

  // Home data
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

  function handleNav(label: NavKey) {
    setActiveNav(label);
    if (label !== "Chat") setChatOpen(false);
    if (label !== "Community") setCommOpen(false);
    if (label !== "Projects/Team") setProjOpen(false);
    if (label !== "Calendar") setCalOpen(false);
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-80 flex flex-col border-r bg-gray-100">
        <div className="px-6 pt-8 flex-1 flex flex-col">
          <h2 className="text-3xl font-bold mb-10">Logo</h2>
          <nav className="flex-1 space-y-2">
            {navItems.map(item => {
              const isActive = activeNav === item.label;
              const open =
                (item.label === "Chat" && chatOpen) ||
                (item.label === "Community" && commOpen) ||
                (item.label === "Projects/Team" && projOpen) ||
                (item.label === "Calendar" && calOpen);

              if (item.hasDropdown) {
                return (
                  <div key={item.label} className="space-y-1">
                    <button
                      onClick={() => {
                        handleNav(item.label);
                        if (item.label === "Chat") setChatOpen(v => !v);
                        if (item.label === "Community") setCommOpen(v => !v);
                        if (item.label === "Projects/Team") setProjOpen(v => !v);
                        if (item.label === "Calendar") setCalOpen(v => !v);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-md ${
                        isActive ? "bg-white text-black" : "hover:bg-gray-200"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.icon} {item.label}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {open && (
                      <div className="ml-6 space-y-1 text-sm">
                        {item.subItems!.map(sub => (
                          <button
                            key={sub}
                            onClick={() => {
                              handleNav(item.label);
                              switch (item.label) {
                                case "Chat":
                                  setChatTab(sub as ChatTab);
                                  break;
                                case "Community":
                                  setCommTab(sub as CommTab);
                                  break;
                                case "Projects/Team":
                                  setProjTab(sub as ProjectTab);
                                  break;
                                case "Calendar":
                                  setCalTab(sub as CalendarTab);
                                  break;
                              }
                            }}
                            className="w-full text-left px-2 py-1 rounded hover:bg-indigo-50"
                          >
                            {item.label === "Projects/Team" && sub === "NewProject" && (
                              <Plus className="inline-block w-4 h-4 mr-1" />
                            )}
                            {sub}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.label)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-md ${
                    isActive ? "bg-white text-black" : "hover:bg-gray-200"
                  }`}
                >
                  {item.icon} {item.label}
                </button>
              );
            })}
          </nav>
          <div className="mt-auto space-y-2 pb-6">
            <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200">
              <Settings /> Settings
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200">
              <LogOut /> Log Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header on Home */}
        {activeNav === "Home" && (
          <header className="flex items-center justify-between px-6 py-4 border-b bg-white">
            <h1 className="text-4xl font-bold">DASHBOARD</h1>
            <input
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </header>
        )}

        <main className="flex-1 overflow-y-auto p-6 bg-white">
          {/* Home */}
          {activeNav === "Home" && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Left */}
              <div className="space-y-8 lg:col-span-2">
                {/* Today’s Tasks */}
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

                {/* Today’s Meetings */}
                <section className="rounded-[24px] bg-[#F6F6F6] p-6 shadow-md border border-[#D9D9D9]">
                  <h2 className="mb-4 text-2xl font-semibold">Today’s Meetings</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {meetings.map((m, i) => (
                      <div
                        key={i}
                        className="rounded-[24px] border border-[#D9D9D9] bg-white p-4 hover:bg-gray-100"
                      >
                        <p className="font-semibold">{m.time}</p>
                        <p className="mt-1 text-sm text-gray-600">{m.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Project Lists */}
                <section className="rounded-[24px] bg-[#F6F6F6] p-6 shadow-md border border-[#D9D9D9]">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">Project Lists</h2>
                    <div className="space-x-2">
                      {(["Today", "Week", "Month"] as const).map(label => (
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
                    {projects.map((p, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded-[24px] border border-[#D9D9D9] bg-white p-4 hover:bg-gray-100"
                      >
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold">{p.name}</h3>
                          <p className="text-sm text-gray-600">{p.desc}</p>
                          <p className="text-xs text-gray-500">{p.date}</p>
                        </div>
                        <div className="flex -space-x-2">
                          {p.avatars.map((src, j) => (
                            <div
                              key={j}
                              className="relative h-8 w-8 rounded-full border-2 border-white"
                            >
                              <Image src={src} alt="avatar" fill className="rounded-full object-cover" sizes="32px"/>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right */}
              <div className="space-y-8">
                {/* Projects Worked (donut) */}
                <section className="rounded-[24px] bg-[#F6F6F6] p-6 shadow-md border border-[#D9D9D9]">
                  <h2 className="mb-4 text-2xl font-semibold">Projects Worked</h2>
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative h-40 w-40">{/* SVG donut */}</div>
                  </div>
                  {legendItems.map((l, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className={`h-4 w-12 rounded ${l.color}`} />
                      <div className="text-sm font-medium">{l.label}</div>
                      <div className="ml-auto text-sm text-gray-600">{l.percent}</div>
                    </div>
                  ))}
                </section>

                {/* Reminders */}
                <section className="rounded-[24px] bg-[#F6F6F6] p-6 shadow-md border border-[#D9D9D9]">
                  <h2 className="mb-4 text-2xl font-semibold">Reminders</h2>
                  <ul className="space-y-3">
                    {reminders.map((r, i) => (
                      <li
                        key={i}
                        className="rounded-[24px] border border-[#D9D9D9] bg-white p-4 hover:bg-gray-100"
                      >
                        <div className="flex justify-between">
                          <span>{r.title}</span>
                          <span className="text-gray-600">{r.time}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          )}

          {/* Chat */}
          {activeNav === "Chat" && <ChatPage tab={chatTab} />}

          {/* Community */}
          {activeNav === "Community" && <CommunityTab activeTab={commTab} />}

          {/* Projects/Team */}
          {activeNav === "Projects/Team" && (
            <div className="p-6">
              {projTab === "NewProject" ? (
                <NewProject />
              ) : projTab === "ProjectDoc" ? (
                <ProjectDocuments />
              ) : (
                <p>Select “New Project” or “Project Doc.”</p>
              )}
            </div>
          )}

          {/* Calendar */}
          {activeNav === "Calendar" && (
            <>
              {calTab === "Designer Task" && <CalendarPage />}
              {calTab === "Task Reminder" && <RemindersView />}
              {calTab === "Meetings" && <MeetingsView />}
            </>
          )}

          {/* Collection */}
          {activeNav === "Collection" && <CollectionsPage />}

          {/* Canvas */}
          {activeNav === "Canvas" && <Canvas />}
        </main>
      </div>
    </div>
  );
}
