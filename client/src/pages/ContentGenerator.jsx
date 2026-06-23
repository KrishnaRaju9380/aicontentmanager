import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function ContentGenerator() {
  const [topic, setTopic] = useState("");
  const [contentType, setContentType] = useState("Blog Post");
  const [generatedContent, setGeneratedContent] = useState("");

  const handleGenerate = async () => {
    try {
      const res = await API.post("/content/generate", {
        topic,
        contentType,
      });

      setGeneratedContent(res.data.generatedContent);
    } catch (error) {
      console.error(error);
      alert("Error generating content");
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>Generate AI Content</h1>

        <input
          type="text"
          placeholder="Enter Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
          }}
        />

        <br />
        <br />

        <select
          value={contentType}
          onChange={(e) => setContentType(e.target.value)}
          style={{
            padding: "10px",
          }}
        >
          <option>Blog Post</option>
          <option>Social Media Post</option>
          <option>Product Description</option>
        </select>

        <br />
        <br />

        <button
          onClick={handleGenerate}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Generate Content
        </button>

        <br />
        <br />

        <textarea
          rows="10"
          cols="60"
          value={generatedContent}
          readOnly
        />
      </div>
    </>
  );
}

export default ContentGenerator;