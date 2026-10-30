
const express = require("express");
const bcrypt = require("bcryptjs");
const Student = require("../models/Student");

const router = express.Router();

// Student Registration
router.post("/register", async (req, res) => {
    try {
        const { name, email, course, password, cgpa } = req.body;

        if (!name || !email || !course || !password) {
            return res.status(400).json({
                message: "Please fill all required fields."
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters."
            });
        }

        const existingStudent = await Student.findOne({ email });

        if (existingStudent) {
            return res.status(409).json({
                message: "Email is already registered."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const student = new Student({
            name,
            email,
            course,
            password: hashedPassword,
            cgpa: cgpa || 0
        });

        await student.save();

        res.status(201).json({
            message: "Student registered successfully!"
        });

    } catch (error) {
        res.status(500).json({
            message: "Registration failed."
        });
    }
});

// Student Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Please enter email and password."
            });
        }

        const student = await Student.findOne({ email });

        if (!student) {
            return res.status(401).json({
                message: "Student not found."
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            student.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Incorrect password."
            });
        }

        res.status(200).json({
            message: "Login successful!",
            student: {
                id: student._id,
                name: student.name,
                email: student.email,
                course: student.course,
                cgpa: student.cgpa
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Login failed."
        });
    }
});

module.exports = router;
