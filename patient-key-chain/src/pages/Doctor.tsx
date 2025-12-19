import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { RecordCard } from "@/components/RecordCard";
import { Stethoscope, Search, Clock, CheckCircle, Upload } from "lucide-react";

const Doctor = () => {
  const recentPatients = [
    {
      name: "Rahul Kumar",
      abha: "1234-5678-9012",
      accessExpiry: "15 days",
      recordsShared: 5,
    },
    {
      name: "Priya Sharma",
      abha: "2345-6789-0123",
      accessExpiry: "8 days",
      recordsShared: 3,
    },
  ];

  const patientRecords = [
    {
      title: "Annual Health Checkup",
      type: "Lab Report",
      date: "2024-11-10",
      hospital: "Apollo Hospital",
      transactionId: "0x8f3a...9c2b",
    },
    {
      title: "Blood Pressure Monitoring",
      type: "Report",
      date: "2024-10-28",
      hospital: "Apollo Hospital",
      transactionId: "0x2c4e...7d1a",
    },
  ];

  return (
      <div className="max-w-6xl mx-auto space-y-6 animate-fade-in">
        {/* Header */}
        <div className="rounded-xl bg-gradient-to-br from-primary to-secondary p-8 text-primary-foreground">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Stethoscope className="h-8 w-8" />
            Doctor Portal
          </h1>
          <p className="text-primary-foreground/90">
            Access patient records with secure blockchain consent
          </p>
        </div>

        {/* Search Patient */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Search Patient</h2>
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Enter patient's ABHA ID"
                className="pl-9 font-mono"
              />
            </div>
            <Button>Search</Button>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Search by ABHA health ID to request access or view shared records
          </p>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4">
          <Button
            variant="outline"
            className="h-auto flex-col gap-2 py-6"
          >
            <Search className="h-6 w-6 text-primary" />
            <span>Request Access</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto flex-col gap-2 py-6"
          >
            <Upload className="h-6 w-6 text-secondary" />
            <span>Upload Report</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto flex-col gap-2 py-6"
          >
            <Clock className="h-6 w-6 text-accent" />
            <span>Pending Requests</span>
          </Button>
        </div>

        {/* Recent Patients */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Patients</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {recentPatients.map((patient, index) => (
              <Card key={index} className="p-5">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{patient.name}</h3>
                      <p className="text-sm text-muted-foreground font-mono">
                        ABHA: {patient.abha}
                      </p>
                    </div>
                    <Badge className="bg-success text-success-foreground">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Active
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {patient.recordsShared} records shared
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {patient.accessExpiry}
                    </span>
                  </div>
                  <Button variant="outline" className="w-full">
                    View Records
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Sample Patient Records */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Patient Records (Sample)</h2>
          <div className="grid gap-4">
            {patientRecords.map((record, index) => (
              <RecordCard key={index} {...record} />
            ))}
          </div>
        </div>

        {/* Info Card */}
        <Card className="p-6 bg-primary/5 border-primary/20">
          <div className="flex items-start gap-3">
            <Stethoscope className="h-5 w-5 text-primary mt-0.5" />
            <div className="space-y-1 flex-1">
              <p className="font-medium">Secure Access Protocol</p>
              <p className="text-sm text-muted-foreground">
                All patient records are encrypted and access is granted only with patient
                consent. Every access is logged on the blockchain for transparency.
              </p>
            </div>
          </div>
        </Card>
      </div>
  );
};

export default Doctor;
