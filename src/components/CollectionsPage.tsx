import React from "react";
import { Plus } from "lucide-react";

const files = Array(5).fill({
  name: "file name",
  size: "4mb",
  date: "29/5/2025",
});

const collections = [{
  name: "collection name",
  size: "4mb",
  date: "29/5/2025",
  image: "https://images.unsplash.com/photo-1747635351683-002a277ed3ee?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
    name: "collection name",
    size: "4mb",
    date: "29/5/2025",
    image: "https://images.unsplash.com/photo-1748452944022-6212ec36a45d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    name: "collection name",
    size: "4mb",
    date: "29/5/2025",
    image: "https://images.unsplash.com/photo-1748540609681-819e7f4c3ff6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    name: "collection name",
    size: "4mb",
    date: "29/5/2025",
    image: "https://images.unsplash.com/photo-1746699421299-ac9d7e868855?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    name: "collection name",
    size: "4mb",
    date: "29/5/2025",
    image: "https://images.unsplash.com/photo-1747134392167-7b16ac9c3c36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
     name: "collection name",
    size: "4mb",
    date: "29/5/2025",
    image: "https://images.unsplash.com/photo-1747134392167-7b16ac9c3c36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}];

export default function CollectionsPage() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-800">Collections</h1>
        <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
    </div>


      {/* Recent Drafts */}
      <h2 className="text-xl font-medium text-gray-700 mb-4">Recent Drafts</h2>
      <div className="flex gap-4 overflow-x-auto mb-10">
        {/* Create New */}
        <div className="flex flex-col items-center justify-center w-40 h-48 border-2 border-dashed border-blue-400 rounded-lg cursor-pointer hover:bg-blue-50">
          <Plus className="text-blue-500 mb-2" />
          <span className="text-blue-600 font-medium">Create New</span>
        </div>

        {files.map((file, i) => (
          <div
            key={i}
            className="w-40 h-48 bg-gray-100 rounded-lg p-3 flex flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <div className="bg-gray-300 rounded w-6 h-5" />
              <div className="w-1 h-4 bg-gray-400 rounded-full" />
            </div>
            <div>
              <p className="text-sm text-gray-700">{file.name}</p>
              <p className="text-xs text-gray-500">{file.size}</p>
              <p className="text-xs text-gray-500">{file.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Saved Collections */}
      <h2 className="text-xl font-medium text-gray-700 mb-4">Saved Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {collections.map((col, i) => (
          <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
            <img src={col.image} alt={col.name} className="h-40 w-full object-cover" />
            <div className="p-3">
              <p className="text-sm font-medium text-gray-700 mb-1">{col.name}</p>
              <div className="text-xs text-gray-500 flex justify-between">
                <span>{col.date}</span>
                <span>{col.size}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}