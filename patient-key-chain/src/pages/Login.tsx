import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { AlignCenter, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import api from "@/lib/axios";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<"patient" | "doctor" | "">(""); // For Google login

  // ---------------- EMAIL/PASSWORD LOGIN ----------------
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post("/auth/login", { email, password });
      const { token, role: userRole } = res.data;

      localStorage.setItem("token", token);

      if (userRole === "doctor") navigate("/doctor");
      else navigate("/patient");

    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- GOOGLE LOGIN ----------------
  const handleGoogleLogin = async (credentialResponse: any) => {
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
      alert(err.response?.data?.message || "Google login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Card className="w-full max-w-md shadow-lg">
        {/* ---------------- CARD HEADER ---------------- */}
        <CardHeader className="text-center pb-4 pt-6">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <Lock className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl font-bold">Welcome Back</CardTitle>
          <CardDescription className="text-sm">
            Login using your email and password or Google
          </CardDescription>
        </CardHeader>

        {/* ---------------- CARD CONTENT ---------------- */}
        <CardContent className="space-y-6 pb-6">
          {/* ---------------- GOOGLE LOGIN ---------------- */}
          <div className="space-y-2">
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
                onSuccess={handleGoogleLogin}
                onError={() => alert("Google login failed")}
              />
            ) : (
              <button
                disabled
                className="w-full py-2 mt-2 rounded-sm border bg-gray-200 text-gray-500 cursor-not-allowed"
              >
                Select role to login with Google
              </button>
            )}
          </div>

         <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <h3 className="mx-4 text-gray-500">OR</h3>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>


          {/* ---------------- EMAIL/PASSWORD LOGIN FORM ---------------- */}
          <form onSubmit={handleLogin} className="space-y-4">
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
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button disabled={loading} type="submit" className="w-full">
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          {/* ---------------- REGISTER LINK ---------------- */}
          <div className="text-center text-xs text-muted-foreground pt-2">
            <span>Don't have an account? </span>
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-primary hover:underline"
            >
              Register here
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
