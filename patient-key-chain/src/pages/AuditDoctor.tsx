import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Activity, Eye, Upload, Share2, Lock, Search, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const DoctorAudit = () => {
  const auditLogs = [
    {
      action: "Record Viewed",
      patient: "Rohan Mehta",
      abhaId: "1234-5678-9012",
      record: "ECG Report",
      timestamp: "2024-11-14 11:20:00",
      txHash: "0x9f1a...8c3d",
      icon: Eye,
      type: "view",
    },
    {
      action: "Record Uploaded",
      patient: "Ananya Singh",
      abhaId: "9876-5432-1098",
      record: "Blood Test Results",
      timestamp: "2024-11-13 15:45:00",
      txHash: "0x3b2c...5e7f",
      icon: Upload,
      type: "upload",
    },
    {
      action: "Access Requested",
      patient: "Vikram Rao",
      abhaId: "4567-8901-2345",
      record: "All Records (7 days)",
      timestamp: "2024-11-12 09:10:00",
      txHash: "0x7d4e...1a9b",
      icon: Share2,
      type: "request",
    },
    {
      action: "Record Viewed",
      patient: "Priya Desai",
      abhaId: "3210-9876-5432",
      record: "Skin Biopsy Report",
      timestamp: "2024-11-11 14:30:00",
      txHash: "0x5a6b...3f2c",
      icon: Eye,
      type: "view",
    },
    {
      action: "Emergency Access Granted",
      patient: "Rajesh Kumar",
      abhaId: "7890-1234-5678",
      record: "All Records",
      timestamp: "2024-11-08 02:15:00",
      txHash: "0x1e2f...9d4a",
      icon: Activity,
      type: "emergency",
    },
    {
      action: "Access Approved",
      patient: "Rohan Mehta",
      abhaId: "1234-5678-9012",
      record: "Lab Reports",
      timestamp: "2024-11-07 10:00:00",
      txHash: "0x8c9d...6b1e",
      icon: Share2,
      type: "approved",
    },
  ];

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      view: "bg-primary/10 text-primary border-primary/20",
      upload: "bg-secondary/10 text-secondary border-secondary/20",
      request: "bg-chart-3/10 text-chart-3 border-chart-3/20",
      approved: "bg-success/10 text-success-foreground border-success/20",
      emergency: "bg-accent/10 text-accent border-accent/20",
    };
    return colors[type] || "";
  };

  return (
      <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Activity className="h-8 w-8 text-primary" />
            Access Audit Log
          </h1>
          <p className="text-muted-foreground">
            Blockchain-verified history of all your interactions with patient records
          </p>
        </div>

        {/* Filters */}
        <Card className="p-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by patient name or ABHA ID..." className="pl-9" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Calendar className="h-4 w-4" />
                Filter by Date
              </Button>
              <select className="flex h-9 rounded-md border border-input bg-background px-3 text-sm">
                <option value="all">All Actions</option>
                <option value="view">Views</option>
                <option value="upload">Uploads</option>
                <option value="request">Access Requests</option>
                <option value="emergency">Emergency</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">62</p>
              <p className="text-xs text-muted-foreground">Total Events</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">28</p>
              <p className="text-xs text-muted-foreground">Records Viewed</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-secondary">15</p>
              <p className="text-xs text-muted-foreground">Records Uploaded</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-chart-3">12</p>
              <p className="text-xs text-muted-foreground">Access Requests</p>
            </div>
          </Card>
        </div>

        {/* Audit Timeline */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Activity Timeline</h2>
          <div className="space-y-3">
            {auditLogs.map((log, index) => {
              const Icon = log.icon;
              return (
                <Card
                  key={index}
                  className="p-5 transition-all hover:shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`rounded-lg p-2.5 ${getTypeColor(log.type)}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold">{log.action}</h3>
                            <Badge variant="outline" className={getTypeColor(log.type)}>
                              {log.type}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="h-3.5 w-3.5" />
                            <span>
                              <span className="font-medium">{log.patient}</span>
                              <span className="font-mono text-xs ml-1">({log.abhaId})</span>
                            </span>
                          </div>
                          <p className="text-sm">
                            Record: <span className="font-medium">{log.record}</span>
                          </p>
                        </div>
                        <div className="text-right text-sm space-y-1">
                          <p className="text-muted-foreground">{log.timestamp}</p>
                          <p className="font-mono text-xs text-primary">{log.txHash}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="flex justify-center pt-4">
            <Button variant="outline">Load More Events</Button>
          </div>
        </div>

        {/* Compliance Info */}
        <Card className="p-6 bg-primary/5 border-primary/20">
          <div className="flex items-start gap-3">
            <Lock className="h-5 w-5 text-primary mt-0.5" />
            <div className="space-y-1 flex-1">
              <p className="font-medium">Regulatory Compliance</p>
              <p className="text-sm text-muted-foreground">
                All access is logged immutably on the blockchain with cryptographic proof.
                This ensures full compliance with HIPAA, GDPR, and Indian DPDP Act.
                Patients can verify any access at any time.
              </p>
            </div>
          </div>
        </Card>
      </div>
  );
};

export default DoctorAudit;