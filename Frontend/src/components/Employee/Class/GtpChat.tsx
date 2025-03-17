import { useState, useEffect, useRef } from "react";
import { AxiosInstance } from "../../../config/axios";
import { useParams } from "react-router-dom";

export default function GptChat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<{ sender: "user" | "ai"; text: string }[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  const { classId, moduleId, courseId } = useParams<{ classId: string; moduleId: string; courseId: string }>();

  async function fetchResponse() {
    try {
      const response = await AxiosInstance.post("/employee/classes/ai-chat", {
        message: message,
        courseId: courseId,
        moduleId: moduleId,
        classId: classId,
      });
      return response.data.data;
    } catch (error: any) {
      alert(error.response.data.message);
    }
  }

  const handleSendMessage = async () => {
    if (message.trim() !== "") {
      const newUserMessage: { sender: "user" | "ai"; text: string } = { sender: "user", text: message };

      setChat((prevChat) => [...prevChat, newUserMessage]);

      const aiAPIResponse = await fetchResponse();

      const aiResponse: { sender: "user" | "ai"; text: string } = { sender: "ai", text: aiAPIResponse };

      setChat((prevChat) => [...prevChat, aiResponse]);

      setMessage("");
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg w-80 p-4 border border-gray-300">
      <h2 className="text-lg font-semibold text-gray-800">Asistente AI</h2>
      <div
        ref={chatRef}
        className="mt-2 min-h-40 max-h-60 overflow-y-auto border border-gray-200 p-2 rounded bg-gray-50"
      >
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-1 rounded max-w-[80%] break-words ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-gray-200 text-gray-800 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="mt-2 flex">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
