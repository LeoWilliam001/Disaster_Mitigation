import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import User from './models/register.model.js';
import cors from 'cors';
import bcrypt from 'bcryptjs';

dotenv.config();

const app = express();
app.use(express.json()); // allows to accept JSON data in req.body
app.use(cors());

app.post("/api/register", async (req, res) => {
    const info = req.body;

    if (!info.username || !info.email || !info.password) {
        return res.status(400).json({ success: false, message: "Enter all the fields" });
    }

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(info.password, salt);

    const newUser = new User({
        username: info.username,
        email: info.email,
        password: hashedPassword
    });

    try {
        await newUser.save();
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

// Login route
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Enter all the fields" });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        // Compare the hashed password with the entered password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        // Login successful
        res.status(200).json({ success: true, message: "Login successful", data: user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

app.listen(5000, () => {
    connectDB();
    console.log("Server started and MongoDB Connected");
});
