// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import {generatePatientKeyPair,exportPublicKey,exportPrivateKey,encryptPrivateKey} from "@/lib/crypto/patientKeys";
// import { savePatientPrivateKey } from "@/lib/db/indexedDB";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { User, Stethoscope, Shield, Mail, Lock } from "lucide-react";
// import { GoogleLogin } from "@react-oauth/google";
// import api from "@/lib/axios";

// const RegisterPage = () => {
//   const navigate = useNavigate();

//   const [role, setRole] = useState<"patient" | "doctor" | "">("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   // ---------------- EMAIL/PASSWORD REGISTER ----------------
//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();

//   //   if (!role) return alert("Please select role");
//   //   if (password !== confirmPassword) return alert("Passwords do not match");

//   //   try {
//   //     setLoading(true);

//   //     const res = await api.post("/auth/register", {
//   //       role,
//   //       email,
//   //       password
//   //     });

//   //     const { token, role: userRole } = res.data;

//   //     localStorage.setItem("token", token);

//   //     if (userRole === "doctor") navigate("/doctor");
//   //     else navigate("/patient");

//   //   } catch (err: any) {
//   //     alert(err.response?.data?.message || "Registration failed");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   if (!role) return alert("Please select role");
//   if (password !== confirmPassword) return alert("Passwords do not match");

//   try {
//     setLoading(true);

//     // 1️⃣ Register user
//     const res = await api.post("/auth/register", {
//       role,
//       email,
//       password
//     });

//     const { token, role: userRole, userId } = res.data;
//     localStorage.setItem("token", token);

//     // 2️⃣ Patient-only key generation
//     if (userRole === "patient") {
//       // Generate RSA key pair
//       const keyPair = await generatePatientKeyPair();

//       const publicKeyJwk = await exportPublicKey(keyPair.publicKey);
//       const privateKeyJwk = await exportPrivateKey(keyPair.privateKey);

//       // Encrypt private key with password
//       const { encrypted, iv, salt } = await encryptPrivateKey(
//         privateKeyJwk,
//         password
//       );

//       // Store encrypted private key in IndexedDB
//       await savePatientPrivateKey({
//         patientId: userId,
//         encryptedPrivateKey: encrypted,
//         iv,
//         salt,
//         createdAt: Date.now()
//       });

//       // Send public key to backend
//       await api.post(
//         "/auth/patient/public-key",
//         { publicKey: publicKeyJwk },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
//     }

//     // 3️⃣ Navigate
//     navigate(userRole === "doctor" ? "/doctor" : "/patient");

//   } catch (err: any) {
//     alert(err.response?.data?.message || "Registration failed");
//   } finally {
//     setLoading(false);
//   }
// };


//   // ---------------- GOOGLE REGISTER ----------------
//   const handleGoogleRegister = async (credentialResponse: any) => {
//     if (!role) {
//       return alert("Please select your role first!");
//     }

//     try {
//       setLoading(true);
//       console.log("Google credential response:", credentialResponse);

//       const res = await api.post("/auth/google", {
//         tokenId: credentialResponse.credential,
//         role
//       });

//       const { token, role: userRole } = res.data;

//       localStorage.setItem("token", token);

//       if (userRole === "doctor") navigate("/doctor");
//       else navigate("/patient");

//     } catch (err: any) {
//       alert(err.response?.data?.message || "Google registration failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-slate-50 via-white to-slate-50">
//       <Card className="w-full max-w-md shadow-lg">
//         <CardHeader className="text-center">
//           <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
//             <Shield className="h-6 w-6 text-primary" />
//           </div>
//           <CardTitle>Create Account</CardTitle>
//           <CardDescription>Register with email & password or Google</CardDescription>
//         </CardHeader>

//         <CardContent className="space-y-4">
//           {/* ---------------- GOOGLE REGISTER ---------------- */}
//           <div className="space-y-2">
//             <Label className="text-sm">Select Role for Google</Label>
//             <select
//               className="border rounded-sm px-3 py-1 w-full"
//               value={role}
//               onChange={(e) => setRole(e.target.value as "patient" | "doctor")}
//             >
//               <option value="">Select Role</option>
//               <option value="patient">Patient</option>
//               <option value="doctor">Doctor</option>
//             </select>

//             {role ? (
//               <GoogleLogin
//                 onSuccess={handleGoogleRegister}
//                 onError={() => alert("Google registration failed")}
//               />
//             ) : (
//               <button
//                 disabled
//                 className="w-full py-2 mt-2 rounded-sm border bg-gray-200 text-gray-500 cursor-not-allowed"
//               >
//                 Select role to register with Google
//               </button>
//             )}
//           </div>

//           <div className="flex items-center my-4">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <h3 className="mx-4 text-gray-500">OR</h3>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>

//           {/* ---------------- EMAIL/PASSWORD REGISTER ---------------- */}
//           <form onSubmit={handleSubmit} className="space-y-4">

//             {/* Email */}
//             <div className="space-y-1.5">
//               <Label>Email</Label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   type="email"
//                   className="pl-10"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div className="space-y-1.5">
//               <Label>Password</Label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   type="password"
//                   className="pl-10"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>

//             {/* Confirm Password */}
//             <div className="space-y-1.5">
//               <Label>Confirm Password</Label>
//               <Input
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <Button disabled={loading} type="submit" className="w-full">
//               {loading ? "Registering..." : "Register"}
//             </Button>
//           </form>

//           <p className="text-center text-xs text-muted-foreground pt-3">
//             Already registered?{" "}
//             <button
//               onClick={() => navigate("/login")}
//               className="text-primary underline"
//             >
//               Login here
//             </button>
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default RegisterPage;


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {generatePatientKeyPair,exportPublicKey,exportPrivateKey,encryptPrivateKey} from "@/lib/crypto/patientKeys";
import { savePatientPrivateKey } from "@/lib/db/indexedDB";
import { useState, useRef } from "react"; // Added useRef for focus
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

  // New: For Google patient password prompt
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [recoveryPassword, setRecoveryPassword] = useState("");
  const [confirmRecoveryPassword, setConfirmRecoveryPassword] = useState("");
  const [googleToken, setGoogleToken] = useState<string | null>(null);
  const [googleUserId, setGoogleUserId] = useState<string | null>(null);

  // Refs for Dialog focus
  const recoveryInputRef = useRef<HTMLInputElement>(null);
  const confirmRecoveryInputRef = useRef<HTMLInputElement>(null);

  // ---------------- SHARED PATIENT KEY GENERATION ----------------
  const handlePatientKeySetup = async (userId: string, encPassword: string) => {
    console.log("🔑 [Step 1] Starting patient key setup for userId:", userId);
    
    if (!userId) {
      throw new Error("Missing userId - check backend response");
    }

    try {
      // Step 1: Generate RSA key pair
      console.log("🔑 [Step 2] Generating RSA key pair...");
      const keyPair = await generatePatientKeyPair();
      console.log("🔑 [Step 2] Key pair generated successfully");

      // Step 2: Export keys
      console.log("🔑 [Step 3] Exporting public/private keys...");
      const publicKeyJwk = await exportPublicKey(keyPair.publicKey);
      const privateKeyJwk = await exportPrivateKey(keyPair.privateKey);
      console.log("🔑 [Step 3] Keys exported:", { public: !!publicKeyJwk, private: !!privateKeyJwk });

      // Step 3: Encrypt private key
      console.log("🔑 [Step 4] Encrypting private key...");
      const { encrypted, iv, salt } = await encryptPrivateKey(privateKeyJwk, encPassword);
      console.log("🔑 [Step 4] Private key encrypted:", { encrypted: !!encrypted, ivLength: iv.length, saltLength: salt.length });

      // Step 4: Store in IndexedDB
      console.log("🔑 [Step 5] Saving to IndexedDB...");
      await savePatientPrivateKey({
        patientId: userId,
        encryptedPrivateKey: encrypted,
        iv,
        salt,
        createdAt: Date.now()
      });
      console.log("🔑 [Step 5] Saved to IndexedDB successfully");

      // Step 5: Send public key to backend
      console.log("🔑 [Step 6] Uploading public key to backend...");
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");
      const res = await api.post("/auth/patient/public-key", { publicKey: publicKeyJwk }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log("🔑 [Step 6] Public key uploaded:", res.status);

      console.log("✅ Patient keys setup complete!");
    } catch (err: any) {
      console.error("❌ Patient key setup failed:", err);
      throw new Error(`Key setup failed: ${err.message || err}`);
    }
  };

  // ---------------- EMAIL/PASSWORD REGISTER ----------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!role) return alert("Please select role");
    if (password !== confirmPassword) return alert("Passwords do not match");

    try {
      setLoading(true);
      console.log("📝 [Register] Starting email/password registration for role:", role);

      // 1️⃣ Register user
      console.log("📝 [Step 1] Calling /auth/register...");
      const res = await api.post("/auth/register", {
        role,
        email,
        password
      });
      console.log("📝 [Step 1] Registration response:", res.data); // Log full data to check userId

      const { token, role: userRole, userId } = res.data;
      if (!userId) throw new Error("Backend did not return userId");
      localStorage.setItem("token", token);
      console.log("📝 [Step 1] Token stored, userId:", userId);

      // 2️⃣ Patient-only key generation
      if (userRole === "patient") {
        await handlePatientKeySetup(userId, password); // Reuse shared logic
      }

      // 3️⃣ Navigate
      console.log("📝 [Step 3] Navigating to:", userRole === "doctor" ? "/doctor" : "/patient");
      navigate(userRole === "doctor" ? "/doctor" : "/patient");

    } catch (err: any) {
      console.error("❌ Registration failed:", err);
      const msg = err.response?.data?.message || err.message || "Registration failed";
      alert(msg);
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
      console.log("🔗 [Google] Starting Google registration for role:", role);
      console.log("🔗 [Google] Credential response:", credentialResponse);

      const res = await api.post("/auth/google", {
        tokenId: credentialResponse.credential,
        role
      });
      console.log("🔗 [Google] Response:", res.data); // Log to check userId

      const { token, role: userRole, userId } = res.data;
      if (!userId) throw new Error("Backend did not return userId");
      localStorage.setItem("token", token);
      console.log("🔗 [Google] Token stored, userId:", userId);

      if (userRole === "doctor") {
        navigate("/doctor");
      } else {
        // For patient: Prompt for recovery password, then generate keys
        setGoogleUserId(userId);
        setGoogleToken(credentialResponse.credential);
        setShowPasswordPrompt(true);
        if (recoveryInputRef.current) recoveryInputRef.current.focus();
      }

    } catch (err: any) {
      console.error("❌ Google registration failed:", err);
      const msg = err.response?.data?.message || err.message || "Google registration failed";
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google patient password confirmation and key setup
  const handleGooglePatientConfirm = async () => {
    if (recoveryPassword !== confirmRecoveryPassword) {
      return alert("Recovery passwords do not match");
    }
    if (!googleUserId) return alert("Missing user data");

    try {
      setLoading(true);
      console.log("🔗 [Google Patient] Confirming with recovery password...");
      setShowPasswordPrompt(false);
      await handlePatientKeySetup(googleUserId, recoveryPassword);
      console.log("🔗 [Google Patient] Setup complete, navigating...");
      navigate("/patient");
    } catch (err: any) {
      console.error("❌ Google patient confirm failed:", err);
      alert(`Key setup failed: ${err.message}`);
      setShowPasswordPrompt(true); // Reopen dialog on failure
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
          {/* ---------------- SHARED ROLE SELECT ---------------- */}
          <div className="space-y-2">
            <Label className="text-sm">Select Role</Label>
            <select
              className="border rounded-sm px-3 py-1 w-full"
              value={role}
              onChange={(e) => setRole(e.target.value as "patient" | "doctor")}
            >
              <option value="">Select Role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          {/* ---------------- GOOGLE REGISTER ---------------- */}
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

      {/* ---------------- DIALOG FOR GOOGLE PATIENT RECOVERY PASSWORD ---------------- */}
      <Dialog open={showPasswordPrompt} onOpenChange={setShowPasswordPrompt}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Setup Patient Security</DialogTitle>
            <DialogDescription>
              Create a recovery password to encrypt your private key (required for secure data access).
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>Recovery Password</Label>
              <Input
                ref={recoveryInputRef}
                type="password"
                value={recoveryPassword}
                onChange={(e) => setRecoveryPassword(e.target.value)}
                placeholder="Enter a strong password"
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label>Confirm Recovery Password</Label>
              <Input
                ref={confirmRecoveryInputRef}
                type="password"
                value={confirmRecoveryPassword}
                onChange={(e) => setConfirmRecoveryPassword(e.target.value)}
                placeholder="Confirm the password"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button 
              onClick={handleGooglePatientConfirm} 
              disabled={loading || recoveryPassword !== confirmRecoveryPassword || !recoveryPassword}
            >
              {loading ? "Setting up..." : "Confirm & Continue"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegisterPage;