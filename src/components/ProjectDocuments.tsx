"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

interface Document {
  id: number;
  projectName: string;
  teamRole: string;
  assignedTo: string;
  dueDate: string;
  status: "Ongoing" | "Completed" | "Submitted" | "Feedback Pending";
  fileLink: string;
}

const mockDocuments: Document[] = [
  {
    id: 1,
    projectName: "Coffee App UI",
    teamRole: "UI/UX Designer",
    assignedTo: "Aditi Verma1",
    dueDate: "10th June, 2025",
    status: "Ongoing",
    fileLink: "Figma"
  },
  {
    id: 2,
    projectName: "Coffee App UI",
    teamRole: "UI/UX Designer",
    assignedTo: "Aditi Verma1",
    dueDate: "10th June, 2025",
    status: "Completed",
    fileLink: "Figma"
  },
  {
    id: 3,
    projectName: "E-commerce Platform",
    teamRole: "Frontend Developer",
    assignedTo: "John Smith",
    dueDate: "15th June, 2025",
    status: "Submitted",
    fileLink: "GitHub"
  },
  {
    id: 4,
    projectName: "Mobile Banking App",
    teamRole: "Backend Developer",
    assignedTo: "Sarah Johnson",
    dueDate: "20th June, 2025",
    status: "Feedback Pending",
    fileLink: "GitLab"
  }
];

const ProjectDocuments: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"All" | "Ongoing" | "Submitted" | "Feedback Pending">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDocuments = mockDocuments.filter(doc => {
    const matchesTab = activeTab === "All" || doc.status === activeTab;
    const matchesSearch = doc.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.assignedTo.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getStatusColor = (status: Document["status"]) => {
    switch (status) {
      case "Ongoing":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "Submitted":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Feedback Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const tabs = ["All", "Ongoing", "Submitted", "Feedback Pending"] as const;

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Project Documents</h1>
        
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Find Something"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Document Count */}
        <p className="text-sm text-gray-600 mb-4">
          {filteredDocuments.length} Documents
        </p>

        {/* Documents Table */}
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Team Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assigned To
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    File Link
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDocuments.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {doc.projectName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.teamRole}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.assignedTo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.dueDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(doc.status)}`}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
                      <a href="#" className="font-medium">
                        {doc.fileLink}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No documents found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDocuments;