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
      role: user.role,
      userId: user._id
    });

  } catch (error) {
    res.status(500).json({ message: "Registration failed" });
  }
};

export const storePatientPublicKey = async (req, res) => {
  try {
    const userId = req.user.id;
    const { publicKey } = req.body;

    // 1️⃣ Role check
    if (req.user.role !== "patient") {
      return res.status(403).json({
        message: "Only patients can store public keys"
      });
    }

    // 2️⃣ Public key presence
    if (!publicKey) {
      return res.status(400).json({
        message: "Public key is required"
      });
    }

    // 3️⃣ Validate minimal JWK structure
    const { kty, n, e } = publicKey;

    if (!kty || !n || !e) {
      return res.status(400).json({
        message: "Invalid public key format"
      });
    }

    // 4️⃣ Enforce RSA only (important for future safety)
    if (kty !== "RSA") {
      return res.status(400).json({
        message: "Only RSA public keys are supported"
      });
    }

    // 5️⃣ Fetch user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 6️⃣ Prevent overwriting existing key
    if (user.publicKey) {
      return res.status(409).json({
        message: "Public key already exists"
      });
    }

    // 7️⃣ SANITIZE → store only required fields
    user.publicKey = {
      kty,
      n,
      e
    };

    await user.save();

    return res.status(200).json({
      message: "Public key stored successfully"
    });

  } catch (error) {
    console.error("Public key store error:", error);
    return res.status(500).json({
      message: "Failed to store public key"
    });
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



