"use client";
import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<{ name: string; comment: string }[]>(
    []
  );
  const [newComment, setNewComment] = useState<string>("");
  const [newName, setNewName] = useState<string>("");
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editComment, setEditComment] = useState<string>("");

  const handleAddComment = () => {
    if (newName.trim() && newComment.trim()) {
      setComments((prevComments) => [
        ...prevComments,
        { name: newName, comment: newComment },
      ]);
      setNewName("");
      setNewComment("");
    }
  };

  const handleDeleteComment = (index: number) => {
    setComments((prevComments) => prevComments.filter((_, i) => i !== index));
  };

  const handleEditComment = (index: number) => {
    setIsEditing(index);
    setEditComment(comments[index].comment);
  };

  const handleSaveEdit = (index: number) => {
    setComments((prevComments) =>
      prevComments.map((comment, i) =>
        i === index ? { ...comment, comment: editComment } : comment
      )
    );
    setIsEditing(null);
    setEditComment("");
  };

  return (
    <div className="w-full max-w-3xl p-4 sm:p-6 md:p-8 mx-auto text-left">
      <h2 className="text-2xl font-semibold mb-4">Comment Below:</h2>

      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 w-full">
        <input
          type="text"
          placeholder="Your name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="p-2 w-full sm:w-1/3 border rounded-md"
        />
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="p-2 w-full sm:w-2/3 border rounded-md"
        />
        <button
          onClick={handleAddComment}
          className="p-2 bg-blue-500 text-white rounded-md w-full sm:w-auto"
        >
          Submit
        </button>
      </div>

      {comments.length === 0 ? (
        <p className="text-center text-gray-500">No comments yet.</p>
      ) : (
        <ul className="space-y-4">
          {comments.map((commentObj, index) => (
            <li
              key={index}
              className="p-4 border border-gray-300 rounded-md shadow-sm w-full"
            >
              {isEditing === index ? (
                <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                  <input
                    type="text"
                    value={editComment}
                    onChange={(e) => setEditComment(e.target.value)}
                    className="p-2 w-full sm:w-4/5 border rounded-md"
                  />
                  <button
                    onClick={() => handleSaveEdit(index)}
                    className="p-2 bg-green-500 text-white rounded-md w-full sm:w-auto"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">{commentObj.name}</span>
                    <p className="text-gray-700 mt-1">{commentObj.comment}</p>
                  </div>
                  <div className="mt-2 flex space-x-2">
                    <button
                      onClick={() => handleEditComment(index)}
                      className="text-blue-500 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteComment(index)}
                      className="text-red-500 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentSection;
