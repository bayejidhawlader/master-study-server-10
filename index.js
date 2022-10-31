const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const Courses = require("./data/courses.json");
const program = require("./data/courseData.json");
app.get("/", (req, res) => {
  res.send("Learning Api Data Running");
});

app.get("/Courses", (req, res) => {
  res.send(Courses);
});
app.get("/program", (req, res) => {
  res.send(program);
});
app.get("/pro/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourses = program.find((p) => p._id === id);
  res.send(selectedCourses);
});
app.listen(port, () => {
  console.log("Learning Api Data Running", port);
});
