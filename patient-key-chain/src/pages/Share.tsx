import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Share2, UserPlus, Clock, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

const Share = () => {
  const [sharing, setSharing] = useState(false);

  const sharedAccess = [
    {
      name: "Dr. Priya Sharma",
      type: "Cardiologist",
      hospital: "Fortis Hospital",
      status: "active",
      expiresIn: "30 days",
      records: 5,
    },
    {
      name: "Dr. Amit Patel",
      type: "General Physician",
      hospital: "Apollo Clinic",
      status: "active",
      expiresIn: "15 days",
      records: 3,
    },
    {
      name: "Dr. Neha Gupta",
      type: "Dermatologist",
      hospital: "Max Healthcare",
      status: "expired",
      expiresIn: "Expired 2 days ago",
      records: 2,
    },
  ];

  return (
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold mb-2">Share Records</h1>
          <p className="text-muted-foreground">
            Grant temporary access to your health records
          </p>
        </div>

        {/* Grant New Access */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <UserPlus className="h-5 w-5 text-primary" />
            Grant New Access
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="abha">Doctor's ABHA ID</Label>
              <Input
                id="abha"
                placeholder="Enter ABHA ID (e.g., 1234-5678-9012)"
                className="font-mono"
              />
              <p className="text-xs text-muted-foreground">
                Search by doctor's ABHA health ID
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="duration">Access Duration</Label>
                <select
                  id="duration"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="1">1 day</option>
                  <option value="7">7 days</option>
                  <option value="30">30 days</option>
                  <option value="90">90 days</option>
                  <option value="once">One-time access</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="records">Select Records</Label>
                <select
                  id="records"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="all">All Records</option>
                  <option value="recent">Recent Records Only</option>
                  <option value="specific">Specific Records</option>
                </select>
              </div>
            </div>

            <Button className="w-full" size="lg" disabled={sharing}>
              <Share2 className="h-5 w-5 mr-2" />
              Grant Access
            </Button>
          </div>
        </Card>

        {/* Active Access List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Shared Access</h2>
          {sharedAccess.map((access, index) => (
            <Card key={index} className="p-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold">{access.name}</h3>
                    <Badge
                      variant={access.status === "active" ? "default" : "secondary"}
                      className={
                        access.status === "active"
                          ? "bg-success text-success-foreground"
                          : ""
                      }
                    >
                      {access.status === "active" ? (
                        <CheckCircle className="h-3 w-3 mr-1" />
                      ) : (
                        <XCircle className="h-3 w-3 mr-1" />
                      )}
                      {access.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {access.type} • {access.hospital}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {access.expiresIn}
                    </span>
                    <span>{access.records} records shared</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {access.status === "active" ? (
                    <>
                      <Button variant="outline" size="sm">
                        Extend
                      </Button>
                      <Button variant="destructive" size="sm">
                        Revoke
                      </Button>
                    </>
                  ) : (
                    <Button variant="outline" size="sm">
                      Re-grant
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Emergency Access Info */}
        <Card className="p-6 bg-accent/5 border-accent/20">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-accent/10 p-2">
              <Share2 className="h-5 w-5 text-accent" />
            </div>
            <div className="space-y-1 flex-1">
              <p className="font-medium">Smart Consent Management</p>
              <p className="text-sm text-muted-foreground">
                All access is recorded on the blockchain. You can revoke access at any
                time. For emergency scenarios, visit the Emergency Access settings.
              </p>
            </div>
          </div>
        </Card>
      </div>
  );
};

export default Share;
