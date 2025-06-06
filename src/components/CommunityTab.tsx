import { useState } from "react";
import { Heart, MessageCircle, Share2, Clock, User, Eye } from "lucide-react";

const tabs = ["Learnings", "Referings", "Posts"];

const learningItems = [
  {
    title: "Grid Layout Mastery",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
    duration: "45:12",
    progress: "75%",
    category: "Design",
    instructor: "Sarah Chen",
  },
  {
    title: "UI Style Guides",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    duration: "32:45",
    progress: "50%",
    category: "Documentation",
    instructor: "Mike Rodriguez",
  },
  {
    title: "Design Trends 2025",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop",
    duration: "28:30",
    progress: "90%",
    category: "Trends",
    instructor: "Alex Kim",
  },
  {
    title: "Color Theory Fundamentals",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop",
    duration: "52:18",
    progress: "25%",
    category: "Theory",
    instructor: "Emma Wilson",
  },
  {
    title: "Mobile-First Design",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    duration: "41:22",
    progress: "60%",
    category: "Mobile",
    instructor: "David Park",
  },
  {
    title: "Typography Essentials",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
    duration: "38:55",
    progress: "80%",
    category: "Typography",
    instructor: "Lisa Chang",
  },
];

const referingItems = [
  {
    title: "Modern Dashboard Design",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    author: "Design Studio Co.",
    category: "Web Design",
    tags: ["Dashboard", "Analytics", "Modern"],
    likes: 142,
    views: "2.1k",
  },
  {
    title: "E-commerce Mobile App",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    author: "Creative Labs",
    category: "Mobile",
    tags: ["E-commerce", "Shopping", "iOS"],
    likes: 89,
    views: "1.8k",
  },
  {
    title: "Brand Identity System",
    image:
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
    author: "Pixel Perfect",
    category: "Branding",
    tags: ["Logo", "Brand", "Identity"],
    likes: 205,
    views: "3.2k",
  },
  {
    title: "SaaS Landing Page",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    author: "Web Masters",
    category: "Landing Page",
    tags: ["SaaS", "Conversion", "Modern"],
    likes: 167,
    views: "2.7k",
  },
  {
    title: "Product Design System",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
    author: "Design Co.",
    category: "Design System",
    tags: ["Components", "UI Kit", "Figma"],
    likes: 234,
    views: "4.1k",
  },
  {
    title: "Minimalist Portfolio",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    author: "Minimal Studio",
    category: "Portfolio",
    tags: ["Portfolio", "Clean", "Minimal"],
    likes: 98,
    views: "1.5k",
  },
];

const postsData = [
  {
    id: 1,
    author: {
      name: "Jack Bennet",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      time: "2 June, 2025 at 1:45 PM",
    },
    content: {
      text: "Just discovered this amazing focus technique for distracted developers. The Pomodoro technique combined with ambient sounds has been a game-changer for my productivity!",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=300&fit=crop",
    },
    engagement: {
      likes: 24,
      comments: 8,
      shares: 3,
    },
  },
  {
    id: 2,
    author: {
      name: "Sarah Mitchell",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      time: "2 June, 2025 at 12:30 PM",
    },
    content: {
      text: "New design system components are now live! Check out these beautiful cards and form elements that maintain consistency across all our products.",
      images: [
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
      ],
    },
    engagement: {
      likes: 56,
      comments: 12,
      shares: 7,
    },
  },
  {
    id: 3,
    author: {
      name: "Mike Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      time: "2 June, 2025 at 11:15 AM",
    },
    content: {
      text: "Excited to share my latest project - a complete rebrand for a sustainable fashion startup. The earth tones and organic shapes really capture their mission!",
      image:
        "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=300&fit=crop",
    },
    engagement: {
      likes: 89,
      comments: 15,
      shares: 12,
    },
  },
];

export default function CommunityInterface() {
  const [activeTab, setActiveTab] = useState("Posts");

  const renderLearnings = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {learningItems.map((item, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <div className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-xs">
              {item.category}
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <User className="w-4 h-4" />
              <span>{item.instructor}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{item.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: item.progress }}
                  ></div>
                </div>
                <span className="text-xs">{item.progress}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderReferings = () => (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors">
          Post Reference
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {referingItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="relative group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover transition duration-300 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-30 bg-opacity-10">
                <span className="text-white text-lg font-semibold text-center px-2">
                  {item.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const messagesData = [
    {
      id: 1,
      name: "Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      lastMessage:
        "Hey! Just saw your latest design. It's amazing! Can we discuss the color palette choices?",
      time: "2m ago",
      unread: true,
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      lastMessage:
        "The prototype looks great! When can we schedule a review session?",
      time: "15m ago",
      unread: false,
    },
    {
      id: 3,
      name: "Alex Kim",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      lastMessage:
        "Thanks for the feedback on the wireframes. I'll make those changes.",
      time: "1h ago",
      unread: true,
    },
    {
      id: 4,
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=40&h=40&fit=crop&crop=face",
      lastMessage:
        "Can you share the style guide document? Need it for the new project.",
      time: "2h ago",
      unread: false,
    },
    {
      id: 5,
      name: "David Park",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      lastMessage:
        "The user testing results are in. Let's discuss tomorrow morning.",
      time: "3h ago",
      unread: false,
    },
    {
      id: 6,
      name: "Lisa Chang",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
      lastMessage:
        "Love the new branding concept! The typography choices are perfect.",
      time: "4h ago",
      unread: true,
    },
    {
      id: 7,
      name: "Tom Harris",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face",
      lastMessage:
        "Meeting at 3 PM today for the client presentation. Don't forget!",
      time: "5h ago",
      unread: false,
    },
    {
      id: 8,
      name: "Nina Patel",
      avatar:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=40&h=40&fit=crop&crop=face",
      lastMessage:
        "The animations look smooth! Great work on the micro-interactions.",
      time: "6h ago",
      unread: false,
    },
  ];

  const renderPosts = () => (
    <div className="flex gap-6">
      <div className="flex-1 space-y-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <input
              type="text"
              placeholder="What's on your mind ?"
              className="flex-1 outline-none text-gray-700"
            />
            <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors">
              Share
            </button>
          </div>
        </div>

        <div className="flex-1 space-y-6 scrollbar-hide overflow-y-auto max-h-[calc(100vh-160px)] pr-2">
          {postsData.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {post.author.name}
                  </h4>
                  <p className="text-sm text-gray-500">{post.author.time}</p>
                </div>
              </div>

              <p className="text-gray-800 mb-4 leading-relaxed">
                {post.content.text}
              </p>

              {post.content.image && (
                <img
                  src={post.content.image}
                  alt="Post content"
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
              )}

              {post.content.images && (
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {post.content.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Post content ${idx + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}

              <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>{post.engagement.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.engagement.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>{post.engagement.shares}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Messages Sidebar */}
      <div className="w-80 bg-white border border-gray-200 rounded-2xl p-4 h-fit">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Messages</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-32"
            />
            <div className="absolute left-2.5 top-2.5 text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
            General
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            Teams
          </button>
        </div>

        <div className="space-y-2 scrollbar-hide overflow-y-auto max-h-[500px] pr-1">
          {messagesData.map((message) => (
            <div
              key={message.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="relative">
                <img
                  src={message.avatar}
                  alt={message.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {message.unread && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4
                    className={`text-sm font-medium truncate ${
                      message.unread ? "text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {message.name}
                  </h4>
                  <span className="text-xs text-gray-500 flex-shrink-0">
                    {message.time}
                  </span>
                </div>
                <p
                  className={`text-xs truncate ${
                    message.unread
                      ? "text-gray-600 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {message.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "Learnings":
        return renderLearnings();
      case "Referings":
        return renderReferings();
      case "Posts":
        return renderPosts();
      default:
        return renderPosts();
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Community</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              activeTab === tab
                ? "bg-indigo-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {renderContent()}
    </div>
  );
}
