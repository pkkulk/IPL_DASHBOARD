"use client";
import React, { useState } from "react";

const XSSDemo: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [submittedContent, setSubmittedContent] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedContent(userInput); // Vulnerable to XSS
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4 text-center">
          ⚠️ XSS Vulnerability Demo
        </h1>

        <p className="mb-6 text-gray-700">
          This demo shows how a website can be vulnerable to{" "}
          <span className="font-semibold text-red-500">Cross-Site Scripting (XSS)</span>.
          Insecure user input (like HTML or JavaScript) is rendered directly, which can lead to code execution.
        </p>

        <form onSubmit={handleSubmit} className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter comment (try typing something malicious like <code>&lt;script&gt;alert("XSS")&lt;/script&gt;</code> or <code>&lt;img src=x onerror=alert('XSS')&gt;</code>):
          </label>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder='Type your comment here...'
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
          >
            Submit
          </button>
        </form>

        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 p-4 rounded mb-4">
          <strong className="block font-semibold mb-2">🚨 Output Below (Rendered as HTML):</strong>
          <p className="text-sm">This is where injected scripts/images can run.</p>
        </div>

        {/* ⚠️ This is where the XSS vulnerability is shown */}
        <div
          className="p-4 bg-white border border-gray-300 rounded"
          dangerouslySetInnerHTML={{ __html: submittedContent }}
        ></div>
      </div>
    </div>
  );
};

export default XSSDemo;
