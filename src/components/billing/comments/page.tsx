"use client";

import React, { useState, useEffect } from "react";

export default function DynamicComments() {
  interface Comment {
    name: string;
    comment: string;
    id: number;
  }

  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // Load comments from local storage on component mount
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Save comments to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (!name || !comment) return alert("Please fill in all fields.");

    const newComment = { name, comment, id: Date.now() };
    setComments([...comments, newComment]);
    setName("");
    setComment("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center py-10">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Comments Section
        </h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <textarea
            placeholder="Enter Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
            rows={4}
          ></textarea>
        </div>

        <button
          onClick={handleAddComment}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-200"
        >
          Submit Comment
        </button>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-500">
            Recent Comments
          </h3>
          {comments.length > 0 ? (
            <ul className="space-y-4">
              {comments.map((item) => (
                <li
                  key={item.id}
                  className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
                >
                  <p className="text-md font-semibold text-blue-600 mb-1">
                    {item.name}
                  </p>
                  <p className="text-gray-800">{item.comment}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
