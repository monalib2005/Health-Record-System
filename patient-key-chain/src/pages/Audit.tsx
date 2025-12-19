import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Activity, Eye, Upload, Share2, Lock, Search, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Audit = () => {
  const auditLogs = [
    {
      action: "Record Viewed",
      user: "Dr. Priya Sharma",
      record: "Blood Test Report",
      timestamp: "2024-11-12 14:30:00",
      txHash: "0x8f3a...9c2b",
      icon: Eye,
      type: "view",
    },
    {
      action: "Record Uploaded",
      user: "You",
      record: "X-Ray Chest",
      timestamp: "2024-11-10 10:15:00",
      txHash: "0x2c4e...7d1a",
      icon: Upload,
      type: "upload",
    },
    {
      action: "Access Granted",
      user: "Dr. Amit Patel",
      record: "All Lab Reports",
      timestamp: "2024-11-08 16:45:00",
      txHash: "0x9a1f...4b8c",
      icon: Share2,
      type: "share",
    },
    {
      action: "Record Viewed",
      user: "Dr. Amit Patel",
      record: "Prescription",
      timestamp: "2024-11-05 09:20:00",
      txHash: "0x7b2d...3e5f",
      icon: Eye,
      type: "view",
    },
    {
      action: "Access Revoked",
      user: "Dr. Neha Gupta",
      record: "Dermatology Records",
      timestamp: "2024-11-03 11:00:00",
      txHash: "0x5c8a...6f9d",
      icon: Lock,
      type: "revoke",
    },
    {
      action: "Emergency Access",
      user: "Apollo Hospital ER",
      record: "All Records",
      timestamp: "2024-10-28 03:15:00",
      txHash: "0x4d9b...2a7c",
      icon: Activity,
      type: "emergency",
    },
  ];

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      view: "bg-primary/10 text-primary border-primary/20",
      upload: "bg-secondary/10 text-secondary border-secondary/20",
      share: "bg-chart-3/10 text-chart-3 border-chart-3/20",
      revoke: "bg-destructive/10 text-destructive border-destructive/20",
      emergency: "bg-accent/10 text-accent border-accent/20",
    };
    return colors[type] || "";
  };

  return (
      <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Activity className="h-8 w-8 text-primary" />
            Audit Log
          </h1>
          <p className="text-muted-foreground">
            Complete blockchain-verified history of all access to your records
          </p>
        </div>

        {/* Filters */}
        <Card className="p-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search logs..." className="pl-9" />
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
                <option value="share">Shares</option>
                <option value="emergency">Emergency</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">48</p>
              <p className="text-xs text-muted-foreground">Total Events</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-secondary">12</p>
              <p className="text-xs text-muted-foreground">Record Views</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-chart-3">8</p>
              <p className="text-xs text-muted-foreground">Access Grants</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">1</p>
              <p className="text-xs text-muted-foreground">Emergency Access</p>
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
                          <p className="text-sm text-muted-foreground">
                            by <span className="font-medium">{log.user}</span>
                          </p>
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

        {/* Info Card */}
        <Card className="p-6 bg-primary/5 border-primary/20">
          <div className="flex items-start gap-3">
            <Lock className="h-5 w-5 text-primary mt-0.5" />
            <div className="space-y-1 flex-1">
              <p className="font-medium">Blockchain Verified</p>
              <p className="text-sm text-muted-foreground">
                Every action is immutably recorded on the blockchain with a unique
                transaction hash. This ensures complete transparency and prevents
                tampering with your health record access history.
              </p>
            </div>
          </div>
        </Card>
      </div>
  );
};

export default Audit;
