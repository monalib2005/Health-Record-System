import User from "../model/user.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.js";
import { googleClient } from "../utils/google.js";

export const register = async (req, res) => {
  try {
    const { role, email, password } = req.body;

    // 1️⃣ Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // 2️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3️⃣ Create user
    const user = await User.create({
      role,
      email,
      password: hashedPassword
    });

    // 4️⃣ Generate JWT
    const token = generateToken(user);

    res.status(201).json({
      token,
      role: user.role
    });

  } catch (error) {
    res.status(500).json({ message: "Registration failed" });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Find user
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid credentials" });

    // 2️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // 3️⃣ Generate JWT
    const token = generateToken(user);

    res.json({
      token,
      role: user.role
    });

  } catch {
    res.status(500).json({ message: "Login failed" });
  }
};

export const googleAuth = async (req, res) => {
  try {
    const { tokenId, role } = req.body; // role: patient / doctor

    // 1️⃣ Verify Google token
    const ticket = await googleClient.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const email = payload?.email;
    const googleId = payload?.sub;

    if (!email || !googleId) {
      return res.status(400).json({ message: "Invalid Google token payload" });
    }

    // 2️⃣ Check if user exists by email
    let user = await User.findOne({ email });

    if (!user) {
      // 3️⃣ First-time Google user: create user with role
      user = await User.create({
        email,
        role, // only for first-time signup
        googleId,
      });
    } else {
      // 4️⃣ User exists: ensure role matches
      if (user.role !== role) {
        return res.status(403).json({
          message: `This Google account is already registered as a different role. You cannot login as a ${role}.`,
        });
      }

      // Optional: update googleId if missing
      if (!user.googleId) {
        user.googleId = googleId;
        await user.save();
      }
    }

    // 5️⃣ Generate JWT
    const token = generateToken(user);

    res.json({
      token,
      role: user.role,
    });
  } catch (err) {
    console.error("Google auth error:", err);
    res.status(401).json({ message: "Google authentication failed" });
  }
};



