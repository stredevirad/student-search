const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const dataFile = path.join(__dirname, "students.json");

// Read students from students.json
function getStudents() {
    const data = fs.readFileSync(dataFile, "utf8");
    return JSON.parse(data);
}

// Search student by UID
app.get("/api/student/:uid", (req, res) => {
    const uid = req.params.uid.trim().toLowerCase();

    const students = getStudents();

    const student = students.find(
        (student) => student.uid.toLowerCase() === uid
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

// Get all students
app.get("/api/students", (req, res) => {
    const students = getStudents();
    res.json(students);
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});