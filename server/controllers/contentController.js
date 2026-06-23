const db = require("../config/db");

exports.generateContent = (req, res) => {
  const { topic, contentType } = req.body;

  const generatedContent =
    `This is AI generated ${contentType} about ${topic}`;

  const sql =
    "INSERT INTO contents (topic, content_type, generated_content) VALUES (?, ?, ?)";

  db.query(
    sql,
    [topic, contentType, generatedContent],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        message: "Content generated successfully",
        generatedContent,
      });
    }
  );
};

exports.getAllContent = (req, res) => {
  db.query(
    "SELECT * FROM contents ORDER BY created_at DESC",
    (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(results);
    }
  );
};