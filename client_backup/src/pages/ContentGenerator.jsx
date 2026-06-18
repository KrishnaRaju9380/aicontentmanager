function ContentGenerator(){return <h1>Generate AI Content</h1>} export default ContentGenerator;
function ContentGenerator() {
  return (
    <div>
      <h1>Generate AI Content</h1>

      <form>
        <input
          type="text"
          placeholder="Enter Topic"
        />

        <br />
        <br />

        <select>
          <option>Blog Post</option>
          <option>Social Media Post</option>
          <option>Product Description</option>
        </select>

        <br />
        <br />

        <button type="button">
          Generate Content
        </button>
      </form>

      <br />

      <textarea
        rows="10"
        cols="60"
        placeholder="Generated content will appear here..."
      />
    </div>
  );
}

export default ContentGenerator;