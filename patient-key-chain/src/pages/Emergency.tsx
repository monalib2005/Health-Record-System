import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Shield, UserPlus, AlertTriangle, CheckCircle2, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Emergency = () => {
  const guardians = [
    { name: "Sneha Kumar (Wife)", phone: "+91-98765-43210", verified: true },
    { name: "Dr. Ravi Mehta", phone: "+91-87654-32109", verified: true },
  ];

  const preApprovedHospitals = [
    { name: "Apollo Hospital", location: "Delhi", abha: "HOSP-1234" },
    { name: "Fortis Healthcare", location: "Bangalore", abha: "HOSP-5678" },
  ];

  return (
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Shield className="h-8 w-8 text-accent" />
            Emergency Access
          </h1>
          <p className="text-muted-foreground">
            Configure emergency access to your health records
          </p>
        </div>

        {/* Warning Banner */}
        <Card className="p-4 bg-accent/10 border-accent/30">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-accent mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-accent">Emergency Override Protocol</p>
              <p className="text-sm text-muted-foreground mt-1">
                In critical situations, authorized guardians or hospitals can request
                emergency access to your records. All emergency access is logged on the
                blockchain.
              </p>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="guardians" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="guardians">Guardians</TabsTrigger>
            <TabsTrigger value="hospitals">Hospitals</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Guardians Tab */}
          <TabsContent value="guardians" className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <UserPlus className="h-5 w-5 text-primary" />
                Add Emergency Guardian
              </h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="guardian-name">Guardian Name</Label>
                    <Input id="guardian-name" placeholder="Full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guardian-phone">Phone Number</Label>
                    <Input id="guardian-phone" placeholder="+91-XXXXX-XXXXX" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guardian-abha">ABHA ID (Optional)</Label>
                  <Input
                    id="guardian-abha"
                    placeholder="ABHA health ID"
                    className="font-mono"
                  />
                </div>
                <Button className="w-full">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Guardian
                </Button>
              </div>
            </Card>

            <div className="space-y-4">
              <h3 className="font-semibold">Current Guardians ({guardians.length})</h3>
              {guardians.map((guardian, index) => (
                <Card key={index} className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{guardian.name}</h4>
                        {guardian.verified && (
                          <Badge variant="default" className="bg-success">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{guardian.phone}</p>
                    </div>
                    <Button variant="destructive" size="sm">
                      Remove
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Hospitals Tab */}
          <TabsContent value="hospitals" className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Add Pre-Approved Hospital</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="hospital-abha">Hospital ABHA ID</Label>
                  <Input
                    id="hospital-abha"
                    placeholder="Search by hospital ABHA ID"
                    className="font-mono"
                  />
                </div>
                <Button className="w-full">Add Hospital</Button>
              </div>
            </Card>

            <div className="space-y-4">
              <h3 className="font-semibold">
                Pre-Approved Hospitals ({preApprovedHospitals.length})
              </h3>
              {preApprovedHospitals.map((hospital, index) => (
                <Card key={index} className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="font-medium">{hospital.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {hospital.location} • {hospital.abha}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Remove
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-4">
            <Card className="p-6 space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Emergency Access Model</h3>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                    <input type="radio" name="model" defaultChecked className="mt-1" />
                    <div className="flex-1">
                      <p className="font-medium">Guardian Vote (Recommended)</p>
                      <p className="text-sm text-muted-foreground">
                        Requires majority approval from guardians
                      </p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                    <input type="radio" name="model" className="mt-1" />
                    <div className="flex-1">
                      <p className="font-medium">Pre-Approved Hospital</p>
                      <p className="text-sm text-muted-foreground">
                        Instant access for pre-approved hospitals only
                      </p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                    <input type="radio" name="model" className="mt-1" />
                    <div className="flex-1">
                      <p className="font-medium">DAO Override</p>
                      <p className="text-sm text-muted-foreground">
                        Decentralized approval by community validators
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Voting Threshold
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="threshold">Required Guardian Votes</Label>
                  <select
                    id="threshold"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="1">1 guardian (Any)</option>
                    <option value="majority">Majority (50%+)</option>
                    <option value="all">All guardians</option>
                  </select>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Save Settings
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
  );
};

export default Emergency;
