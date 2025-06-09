import { useState } from "react";
import { Send } from "lucide-react";

export default function MessageInput({
  onSend,
}: {
  onSend(text: string): void;
}) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message…"
        className="flex-1 px-4 py-2 border rounded-full focus:ring-2 focus:ring-indigo-500"
      />
      <button type="submit" className="p-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white">
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
}
