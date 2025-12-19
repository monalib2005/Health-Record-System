import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Stethoscope, Shield, Mail, Lock } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";
import api from "@/lib/axios";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState<"patient" | "doctor" | "">("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ---------------- EMAIL/PASSWORD REGISTER ----------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!role) return alert("Please select role");
    if (password !== confirmPassword) return alert("Passwords do not match");

    try {
      setLoading(true);

      const res = await api.post("/auth/register", {
        role,
        email,
        password
      });

      const { token, role: userRole } = res.data;

      localStorage.setItem("token", token);

      if (userRole === "doctor") navigate("/doctor");
      else navigate("/patient");

    } catch (err: any) {
      alert(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- GOOGLE REGISTER ----------------
  const handleGoogleRegister = async (credentialResponse: any) => {
    if (!role) {
      return alert("Please select your role first!");
    }

    try {
      setLoading(true);
      console.log("Google credential response:", credentialResponse);

      const res = await api.post("/auth/google", {
        tokenId: credentialResponse.credential,
        role
      });

      const { token, role: userRole } = res.data;

      localStorage.setItem("token", token);

      if (userRole === "doctor") navigate("/doctor");
      else navigate("/patient");

    } catch (err: any) {
      alert(err.response?.data?.message || "Google registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>Register with email & password or Google</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* ---------------- GOOGLE REGISTER ---------------- */}
          <div className="space-y-2">
            <Label className="text-sm">Select Role for Google</Label>
            <select
              className="border rounded-sm px-3 py-1 w-full"
              value={role}
              onChange={(e) => setRole(e.target.value as "patient" | "doctor")}
            >
              <option value="">Select Role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>

            {role ? (
              <GoogleLogin
                onSuccess={handleGoogleRegister}
                onError={() => alert("Google registration failed")}
              />
            ) : (
              <button
                disabled
                className="w-full py-2 mt-2 rounded-sm border bg-gray-200 text-gray-500 cursor-not-allowed"
              >
                Select role to register with Google
              </button>
            )}
          </div>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <h3 className="mx-4 text-gray-500">OR</h3>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* ---------------- EMAIL/PASSWORD REGISTER ---------------- */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div className="space-y-1.5">
              <Label>Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <Label>Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="password"
                  className="pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <Label>Confirm Password</Label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <Button disabled={loading} type="submit" className="w-full">
              {loading ? "Registering..." : "Register"}
            </Button>
          </form>

          <p className="text-center text-xs text-muted-foreground pt-3">
            Already registered?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-primary underline"
            >
              Login here
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
