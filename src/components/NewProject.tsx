"use client";

import React, { useState } from "react";
import {
  Search,
  Calendar,
  MoreHorizontal,
  MessageCircle,
  ThumbsUp,
  Share2,
} from "lucide-react";

interface ProjectUpdate {
  id: number;
  author: string;
  avatar: string;
  content: string;
  images: string[];
  comments: number;
  likes: number;
  timestamp: string;
}

const mockUpdates: ProjectUpdate[] = [
  {
    id: 1,
    author: "Design Team",
    avatar: "",
    content: "Hi everyone @.... Here is the new update...",
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
    ],
    comments: 1,
    likes: 1,
    timestamp: "2 hours ago",
  },
];

const NewProject: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [displayMode, setDisplayMode] = useState<"List" | "Full">("Full");

  const projectInfo = {
    title: "Mobile Web App",
    summary: "Add a short summary...",
    lead: {
        name: "Lead",
        avatar: "/images/lead.jpg",
      },
      
    teamMembers: [
      "images/avatar1.jpg",
      "images/avatar2.jpg",
      "images/avatar3.jpg",
    ],
    dateRange: "Jun 3 → Jun 30",
    status: 72,
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Find Something"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Display</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setDisplayMode("List")}
                className={`px-3 py-1 text-sm rounded ${
                  displayMode === "List"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                List
              </button>
              <button
                onClick={() => setDisplayMode("Full")}
                className={`px-3 py-1 text-sm rounded ${
                  displayMode === "Full"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Full
              </button>
            </div>
          </div>
        </div>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {projectInfo.title}
          </h1>
          <p className="text-gray-500 mb-6">{projectInfo.summary}</p>

          {/* Project Properties */}
          <div className="flex items-center space-x-8 mb-8">
            {/* Lead */}
            <div className="flex items-center space-x-2">
              <img
                src={projectInfo.lead.avatar}
                alt="Lead avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm text-gray-600">
                {projectInfo.lead.name}
              </span>
            </div>

            {/* Team Members */}
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {projectInfo.teamMembers.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Team member ${index + 1}`}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
            </div>

            {/* Date Range */}
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">
                {projectInfo.dateRange}
              </span>
            </div>

            {/* Status */}
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">
                Status {projectInfo.status}%
              </span>
            </div>
          </div>
        </div>

        {/* Latest Update Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Latest Update
              </h2>
              <div className="flex items-center space-x-2 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600">On track</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-sm text-gray-600 hover:text-gray-900">
                Sell all
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <span className="text-sm">✏️</span>
                <span className="text-sm">New Update</span>
              </button>
            </div>
          </div>

          {/* Update Content */}
          {mockUpdates.map((update) => (
            <div key={update.id} className="border-b border-gray-100 pb-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">
                      {update.author}
                    </span>
                    <button>
                      <MoreHorizontal className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Images */}
                  <div className="flex space-x-4 mb-4">
                    {update.images.map((image, index) => (
                      <div
                        key={index}
                        className="w-32 h-24 bg-gray-200 rounded-lg overflow-hidden"
                      >
                        <img
                          src={image}
                          alt={`Update image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-700 mb-4">{update.content}</p>

                  {/* Actions */}
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{update.comments} Comment</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">{update.likes}</span>
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="space-y-8">
          {/* Description Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Description
              </h2>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600">Add project description here...</p>
          </div>

          {/* Todo List Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Todo List</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <ul className="space-y-3">
              {[
                "Design the login page",
                "Implement authentication",
                "Set up database schema",
              ].map((todo, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-purple-600 border-purple-500 focus:ring-purple-500 rounded"
                  />
                  <span className="text-gray-700">{todo}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
