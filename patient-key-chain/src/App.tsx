import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import ProtectedRoute from "@/components/ProtectedRoute";

import { PublicLayout } from "./components/PublicLayout";
import { PatientLayout } from "./components/PatientLayout";
import { DoctorLayout } from "./components/DoctorLayout";

// Patient pages
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Share from "./pages/Share";
import Emergency from "./pages/Emergency";
import Audit from "./pages/Audit";
import Settings from "./pages/Settings";

// Doctor pages
import DoctorDashboard from "./pages/DoctorDashboard";
import RequestAccess from "./pages/RequestAccess";
import DoctorAudit from "./pages/AuditDoctor";

// Public pages
import LandingPage from "./pages/Landing";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";

// Misc
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <Routes>
            {/* ---------------- PUBLIC ROUTES ---------------- */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>

            {/* ---------------- PATIENT ROUTES (PROTECTED) ---------------- */}
            <Route
              element={
                <ProtectedRoute>
                  <PatientLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/patient" element={<Dashboard />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/share" element={<Share />} />
              <Route path="/emergency" element={<Emergency />} />
              <Route path="/audit" element={<Audit />} />
              <Route path="/settings" element={<Settings />} />
            </Route>

            {/* ---------------- DOCTOR ROUTES (PROTECTED) ---------------- */}
            <Route
              element={
                <ProtectedRoute>
                  <DoctorLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/doctor" element={<DoctorDashboard />} />
              <Route path="/request-access" element={<RequestAccess />} />
              <Route path="/audit-doctor" element={<DoctorAudit />} />
            </Route>

            {/* ---------------- 404 PAGE ---------------- */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
