import { Layout } from "@/components/Layout";
import { StatsCard } from "@/components/StatsCard";
import { RecordCard } from "@/components/RecordCard";
import { FileText, Share2, Shield, Activity, Upload, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // ---------------- LOGOUT FUNCTION ----------------
  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT token
    navigate("/login"); // redirect to login page
  };

  const mockRecords = [
    {
      title: "Annual Health Checkup",
      type: "Lab Report",
      date: "2024-11-10",
      hospital: "Apollo Hospital",
      transactionId: "0x8f3a...9c2b",
    },
    {
      title: "Dental X-Ray",
      type: "Imaging",
      date: "2024-10-28",
      hospital: "City Dental Clinic",
      transactionId: "0x2c4e...7d1a",
    },
    {
      title: "Prescription - Antibiotics",
      type: "Prescription",
      date: "2024-10-15",
      hospital: "MedPlus Pharmacy",
      transactionId: "0x9a1f...4b8c",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Banner with Logout */}
      <div className="rounded-xl bg-gradient-to-br from-primary to-secondary p-8 text-primary-foreground flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, Rahul!</h1>
          <p className="text-primary-foreground/90">
            Your health records are secure on the blockchain
          </p>
        </div>
        <Button
          onClick={handleLogout}
          variant="outline"
          className="h-10 self-start"
        >
          Logout
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button
          onClick={() => navigate("/upload")}
          className="h-auto flex-col gap-2 py-6 bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
        >
          <Upload className="h-6 w-6" />
          <span>Upload Record</span>
        </Button>
        <Button
          onClick={() => navigate("/share")}
          variant="secondary"
          className="h-auto flex-col gap-2 py-6"
        >
          <Share2 className="h-6 w-6" />
          <span>Share Access</span>
        </Button>
        <Button
          onClick={() => navigate("/audit")}
          variant="outline"
          className="h-auto flex-col gap-2 py-6"
        >
          <Activity className="h-6 w-6" />
          <span>View Audit Log</span>
        </Button>
        <Button
          onClick={() => navigate("/emergency")}
          variant="outline"
          className="h-auto flex-col gap-2 py-6 border-accent text-accent hover:bg-accent/10"
        >
          <Shield className="h-6 w-6" />
          <span>Emergency</span>
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Records"
          value="24"
          icon={FileText}
          trend="+3 this month"
          gradient
        />
        <StatsCard
          title="Shared Records"
          value="8"
          icon={Share2}
          trend="3 active"
        />
        <StatsCard
          title="Emergency Contacts"
          value="2"
          icon={Shield}
        />
        <StatsCard
          title="Recent Activities"
          value="12"
          icon={Activity}
          trend="Last 7 days"
        />
      </div>

      {/* Notifications */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="h-5 w-5 text-accent" />
          <h2 className="text-xl font-semibold">Notifications</h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
            <div className="rounded-full bg-accent p-1.5">
              <Bell className="h-4 w-4 text-accent-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">New consent request</p>
              <p className="text-xs text-muted-foreground">
                Dr. Sharma from Fortis Hospital is requesting access to your lab reports
              </p>
            </div>
            <Button size="sm" variant="outline">Review</Button>
          </div>
        </div>
      </Card>

      {/* Recent Records */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Recent Records</h2>
          <Button variant="ghost" size="sm">View All</Button>
        </div>
        <div className="grid gap-4">
          {mockRecords.map((record, index) => (
            <RecordCard key={index} {...record} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
