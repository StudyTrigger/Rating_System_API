const express = require("express");
const cors = require("cors");

// Initialize app
const app = express();
app.use(express.json());
app.use(cors());


let feedbacks = [{
  "feedbackId":1,
      "email": "study.trigger@example.com",
      "feedback": "Great platform! Very user-friendly.",
      "rating": 5,
      "status": "approved",
      "approvalDate": "2025-03-06T10:15:30Z"
    },
    {"feedbackId":2,
      "email": "trigger.study@example.com",
      "feedback": "The response time can be improved.",
      "rating": 3,
      "status": "pending",
      "approvalDate": null
    },];
let feedbackId = 3; // Auto-increment ID

app.post("/feedback", (req, res) => {
  const { email, feedback, rating } = req.body;
  if (!email || !feedback || rating == null) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newFeedback = { id: feedbackId++, email, feedback, rating, status: "pending", approvalDate: null };
  feedbacks.push(newFeedback);
  res.status(201).json(newFeedback);
});

app.get("/feedback/pending", (req, res) => {
  res.json(feedbacks.filter(f => f.status === "pending"));
});

app.get("/feedback/all", (req, res) => {
  res.json(feedbacks);
});

app.put("/feedback/approve/:id", (req, res) => {
  const { id } = req.params;
  const feedback = feedbacks.find(f => f.id == id);
  if (!feedback) return res.status(404).json({ error: "Feedback not found" });

  feedback.status = "approved";
  feedback.approvalDate = new Date().toISOString();
  res.json({ message: "Feedback approved", feedback });
});

app.delete("/feedback/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = feedbacks.length;
  feedbacks = feedbacks.filter(f => f.id != id);

  if (feedbacks.length === initialLength) {
    return res.status(404).json({ error: "Feedback not found" });
  }

  res.json({ message: "Feedback deleted" });
});

app.get("/feedback/approved", (req, res) => {
  res.json(feedbacks.filter(f => f.status === "approved"));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
