import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["patient", "doctor"],
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: function() {
      return this.authProvider === "local";
    }
  },
  publicKey: {
      type: Object, // JWK format
      default: null
    },
   googleId: String

}, { timestamps: true });

export default mongoose.model("User", userSchema);
