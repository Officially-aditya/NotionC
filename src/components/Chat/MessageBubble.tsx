interface Message {
  id: string;
  text: string;
  sender: "me" | "them";
  avatar?: string;
  time: string;
}

export default function MessageBubble({ message }: { message: Message }) {
  const isMe = message.sender === "me";

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      {!isMe && message.avatar && (
        <img
          src={message.avatar}
          alt="avatar"
          className="w-8 h-8 rounded-full mr-2"
        />
      )}
      <div className="max-w-[70%]">
        <div
          className={`px-4 py-2 rounded-2xl whitespace-pre-wrap ${
            isMe ? "bg-indigo-500 text-white" : "bg-gray-200 text-gray-900"
          }`}
        >
          {message.text}
        </div>
        <div
          className={`mt-1 text-xs ${
            isMe ? "text-gray-400 text-right" : "text-gray-500"
          }`}
        >
          {message.time}
        </div>
      </div>
    </div>
  );
}
