import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle, Clock, FileText, UserCheck, XCircle } from "lucide-react";
import { useState } from "react";

const RequestAccess = () => {
  const [requesting, setRequesting] = useState(false);

  const accessRequests = [
    {
      patientName: "Rohan Mehta",
      abhaId: "1234-5678-9012",
      requestedOn: "2 hours ago",
      status: "pending",
      expiresIn: "Requested 7 days",
      purpose: "Follow-up consultation",
      records: "Lab Reports, Prescription",
    },
    {
      patientName: "Ananya Singh",
      abhaId: "9876-5432-1098",
      requestedOn: "1 day ago",
      status: "approved",
      expiresIn: "6 days left",
      purpose: "Cardiology referral",
      records: "ECG, Echo Report",
    },
    {
      patientName: "Vikram Rao",
      abhaId: "4567-8901-2345",
      requestedOn: "5 days ago",
      status: "rejected",
      expiresIn: "Rejected",
      purpose: "Routine checkup",
      records: "All Records",
    },
    {
      patientName: "Priya Desai",
      abhaId: "3210-9876-5432",
      requestedOn: "10 days ago",
      status: "expired",
      expiresIn: "Expired 3 days ago",
      purpose: "Dermatology consult",
      records: "Skin biopsy, Photos",
    },
  ];

  return (
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold mb-2">Request Patient Records</h1>
          <p className="text-muted-foreground">
            Request secure, time-bound access to patient health records via ABHA
          </p>
        </div>

        {/* Request New Access */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <UserCheck className="h-5 w-5 text-primary" />
            Request Access
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="patient-abha">Patient ABHA ID</Label>
              <Input
                id="patient-abha"
                placeholder="e.g., 1234-5678-9012"
                className="font-mono"
              />
              <p className="text-xs text-muted-foreground">
                Enter patient's unique ABHA health ID
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="duration">Access Duration</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 day</SelectItem>
                    <SelectItem value="3">3 days</SelectItem>
                    <SelectItem value="7">7 days</SelectItem>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="once">One-time access</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="record-type">Record Types</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select records" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Records</SelectItem>
                    <SelectItem value="lab">Lab Reports Only</SelectItem>
                    <SelectItem value="imaging">Imaging (X-Ray, MRI, etc.)</SelectItem>
                    <SelectItem value="prescription">Prescriptions</SelectItem>
                    <SelectItem value="summary">Discharge Summary</SelectItem>
                    <SelectItem value="custom">Custom Selection</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="purpose">Purpose of Access</Label>
              <Textarea
                id="purpose"
                placeholder="e.g., Preparing for cardiology consultation on March 15"
                className="resize-none"
                rows={2}
              />
            </div>

            <Button
              className="w-full"
              size="lg"
              disabled={requesting}
              onClick={() => setRequesting(true)}
            >
              <FileText className="h-5 w-5 mr-2" />
              Send Access Request
            </Button>
          </div>
        </Card>

        {/* Access Requests History */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Access Requests</h2>
          {accessRequests.map((req, index) => (
            <Card key={index} className="p-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold">{req.patientName}</h3>
                    <Badge variant="outline" className="text-xs font-mono">
                      {req.abhaId}
                    </Badge>
                    <Badge
                      variant={
                        req.status === "approved"
                          ? "default"
                          : req.status === "pending"
                          ? "secondary"
                          : "outline"
                      }
                      className={
                        req.status === "approved"
                          ? "bg-success text-success-foreground"
                          : req.status === "rejected"
                          ? "text-destructive"
                          : req.status === "expired"
                          ? "text-muted-foreground"
                          : ""
                      }
                    >
                      {req.status === "approved" ? (
                        <CheckCircle className="h-3 w-3 mr-1" />
                      ) : req.status === "pending" ? (
                        <Clock className="h-3 w-3 mr-1" />
                      ) : req.status === "rejected" ? (
                        <XCircle className="h-3 w-3 mr-1" />
                      ) : (
                        <AlertCircle className="h-3 w-3 mr-1" />
                      )}
                      {req.status}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground">{req.purpose}</p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {req.expiresIn}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="h-3 w-3" />
                      {req.records}
                    </span>
                    <span>Requested {req.requestedOn}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  {req.status === "pending" && (
                    <Button variant="outline" size="sm" disabled>
                      Pending
                    </Button>
                  )}
                  {req.status === "approved" && (
                    <>
                      <Button variant="default" size="sm">
                        View Records
                      </Button>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </>
                  )}
                  {req.status === "rejected" && (
                    <Button variant="outline" size="sm">
                      Re-request
                    </Button>
                  )}
                  {req.status === "expired" && (
                    <Button variant="outline" size="sm">
                      Request Again
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Consent & Security Info */}
        <Card className="p-6 bg-accent/5 border-accent/20">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-accent/10 p-2">
              <FileText className="h-5 w-5 text-accent" />
            </div>
            <div className="space-y-1 flex-1">
              <p className="font-medium">Secure Consent Framework</p>
              <p className="text-sm text-muted-foreground">
                All requests require explicit patient consent. Access is encrypted,
                time-limited, and logged immutably on the blockchain. Patients can
                revoke access instantly.
              </p>
            </div>
          </div>
        </Card>
      </div>
  );
};

export default RequestAccess;