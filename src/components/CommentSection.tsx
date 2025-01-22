"use client";

import { useState, useEffect } from "react";
import { ref, push, onValue, getDatabase } from "firebase/database";
import { getApp } from "firebase/app";
 // Adjust the import path as necessary





const CommentSection = () => {
  interface Comment {
    text: string;
    timestamp: string;
  }
const app = getApp();
const database = getDatabase(app);
const [comments, setComments] = useState<Comment[]>([]);
const [newComment, setNewComment] = useState("");

  // Fetch comments from Firebase
  useEffect(() => {
    const commentsRef = ref(database, "comments/");
    onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedComments = Object.values(data) as Comment[];
        setComments(loadedComments);
      }
    });
  }, [database]);

  // Add a new comment to Firebase
  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const commentsRef = ref(database, "comments/");
    push(commentsRef, {
      text: newComment,
      timestamp: new Date().toISOString(),
    });

    setNewComment("");
  };

  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      {/* Comments List */}
      <div className="space-y-4 mb-4">
        {comments.map((comment, index) => (
          <div key={index} className="p-3 bg-white rounded-md shadow-sm">
            <p className="text-gray-700">{comment.text}</p>
            <span className="text-sm text-gray-500">
              {new Date(comment.timestamp).toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      {/* Comment Input */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Write your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1 p-2 border rounded-md"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
