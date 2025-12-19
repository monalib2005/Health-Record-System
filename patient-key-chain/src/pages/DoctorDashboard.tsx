import { Layout } from "@/components/Layout";
import { StatsCard } from "@/components/StatsCard";
import { RecordCard } from "@/components/RecordCard";
import { FileText, Users, Share2, Activity, Upload, Bell, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
  const navigate = useNavigate();

  // ---------------- LOGOUT FUNCTION ----------------
  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    navigate("/login"); // redirect to login page
  };

  const recentPatients = [
    {
      title: "Rohan Mehta",
      type: "Follow-up (Cardiology)",
      date: "2024-11-14",
      hospital: "Your Clinic",
      transactionId: "0x9f1a...8c3d",
      abhaId: "1234-5678-9012",
    },
    {
      title: "Ananya Singh",
      type: "Lab Results Uploaded",
      date: "2024-11-13",
      hospital: "Your Clinic",
      transactionId: "0x3b2c...5e7f",
      abhaId: "9876-5432-1098",
    },
    {
      title: "Vikram Rao",
      type: "Access Requested",
      date: "2024-11-12",
      hospital: "Pending Consent",
      transactionId: "0x7d4e...1a9b",
      abhaId: "4567-8901-2345",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Banner with Logout */}
      <div className="rounded-xl bg-gradient-to-br from-primary to-chart-3 p-8 text-primary-foreground flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dr. Priya Sharma</h1>
          <p className="text-primary-foreground/90">
            Cardiologist • Fortis Hospital • ABHA ID: 5678-9012-3456
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
          onClick={() => navigate("/request-access")}
          className="h-auto flex-col gap-2 py-6 bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
        >
          <Share2 className="h-6 w-6" />
          <span>Request Access</span>
        </Button>
        <Button
          onClick={() => navigate("/upload")}
          variant="secondary"
          className="h-auto flex-col gap-2 py-6"
        >
          <Upload className="h-6 w-6" />
          <span>Upload Report</span>
        </Button>
        <Button
          onClick={() => navigate("/audit")}
          variant="outline"
          className="h-auto flex-col gap-2 py-6"
        >
          <Activity className="h-6 w-6" />
          <span>View Audit</span>
        </Button>
        <Button
          onClick={() => navigate("/patients")}
          variant="outline"
          className="h-auto flex-col gap-2 py-6 border-accent text-accent hover:bg-accent/10"
        >
          <Users className="h-6 w-6" />
          <span>Patients</span>
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Active Patients"
          value="42"
          icon={Users}
          trend="+5 this week"
          gradient
        />
        <StatsCard
          title="Records Uploaded"
          value="87"
          icon={Upload}
          trend="12 today"
        />
        <StatsCard
          title="Access Requests"
          value="6"
          icon={Share2}
          trend="3 pending"
        />
        <StatsCard
          title="Total Interactions"
          value="156"
          icon={Activity}
          trend="Last 30 days"
        />
      </div>

      {/* Pending Consent Requests */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="h-5 w-5 text-accent" />
          <h2 className="text-xl font-semibold">Pending Consent Requests</h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
            <div className="rounded-full bg-accent p-1.5">
              <Bell className="h-4 w-4 text-accent-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Vikram Rao</p>
              <p className="text-xs text-muted-foreground">
                Requested access to all records for 7 days • ABHA: 4567-8901-2345
              </p>
            </div>
            <Button size="sm" variant="outline" disabled>
              Awaiting Patient
            </Button>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
            <div className="rounded-full bg-muted p-1.5">
              <Stethoscope className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Emergency Access Used</p>
              <p className="text-xs text-muted-foreground">
                Rajesh Kumar • All records accessed on 2024-11-08 02:15
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Recent Patient Interactions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Recent Activity</h2>
          <Button variant="ghost" size="sm">View All</Button>
        </div>
        <div className="grid gap-4">
          {recentPatients.map((patient, index) => (
            <RecordCard
              key={index}
              title={patient.title}
              type={patient.type}
              date={patient.date}
              hospital={patient.hospital}
              transactionId={patient.transactionId}
            />
          ))}
        </div>
      </div>

      {/* Compliance Badge */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 p-2">
            <Stethoscope className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="font-medium">HIPAA & DPDP Compliant</p>
            <p className="text-sm text-muted-foreground">
              All patient data access is encrypted, consent-based, and logged on the blockchain.
              Full audit trail available at any time.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DoctorDashboard;
