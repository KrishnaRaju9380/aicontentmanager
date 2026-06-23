import { useState } from "react";
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
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Generate AI Content</h1>

      <input
        type="text"
        placeholder="Enter Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <br /><br />

      <select
        value={contentType}
        onChange={(e) => setContentType(e.target.value)}
      >
        <option>Blog Post</option>
        <option>Social Media Post</option>
        <option>Product Description</option>
      </select>

      <br /><br />

      <button onClick={handleGenerate}>
        Generate
      </button>

      <br /><br />

      <textarea
        rows="10"
        cols="60"
        value={generatedContent}
        readOnly
      />
    </div>
  );
}

export default ContentGenerator;