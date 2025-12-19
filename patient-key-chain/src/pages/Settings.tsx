import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Settings as SettingsIcon, User, Key, Link as LinkIcon, Shield, Bell } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <SettingsIcon className="h-8 w-8 text-primary" />
            Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your account, security, and privacy settings
          </p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="abha">ABHA ID</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Personal Information
              </h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Rahul" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Kumar" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="rahul.kumar@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+91-98765-43210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" defaultValue="1990-05-15" />
                </div>
                <Button className="w-full">Save Changes</Button>
              </div>
            </Card>
          </TabsContent>

          {/* ABHA Tab */}
          <TabsContent value="abha" className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-primary" />
                ABHA Health ID
              </h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-success/10 border border-success/20 p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Linked ABHA ID</p>
                      <p className="font-mono text-lg">1234-5678-9012-3456</p>
                      <p className="text-xs text-muted-foreground">
                        Verified on: Nov 10, 2024
                      </p>
                    </div>
                    <Badge className="bg-success text-success-foreground">
                      ✓ Verified
                    </Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Your ABHA (Ayushman Bharat Health Account) ID is linked and verified.
                    This allows healthcare providers across India to access your records
                    with your consent.
                  </p>
                  <Button variant="outline" className="w-full">
                    Update ABHA ID
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Key className="h-5 w-5 text-primary" />
                Encryption Keys
              </h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Master Encryption Key</p>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 rounded bg-muted px-3 py-2 text-xs font-mono overflow-x-auto">
                        0x7a8f9c2b4d6e8a1c3f5e7d9b2a4c6e8f...
                      </code>
                      <Button variant="outline" size="sm">
                        Copy
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Store this key securely. It's required to decrypt your records.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full">
                    Download Backup Key
                  </Button>
                  <Button variant="destructive" className="w-full">
                    Regenerate Key
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Password</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current">Current Password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new">New Password</Label>
                  <Input id="new" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm">Confirm New Password</Label>
                  <Input id="confirm" type="password" />
                </div>
                <Button className="w-full">Update Password</Button>
              </div>
            </Card>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy" className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Privacy Controls
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Allow Anonymous Access Logs</Label>
                    <p className="text-sm text-muted-foreground">
                      Hide personal details in audit logs
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Automatic Consent Expiry</Label>
                    <p className="text-sm text-muted-foreground">
                      Auto-revoke access after 30 days
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Share Data for Research</Label>
                    <p className="text-sm text-muted-foreground">
                      Anonymized data for medical research
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Emergency Access Enabled</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow emergency overrides
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Notification Preferences
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Access Requests</Label>
                    <p className="text-sm text-muted-foreground">
                      When doctors request access
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Record Views</Label>
                    <p className="text-sm text-muted-foreground">
                      When someone views your records
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Emergency Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Emergency access notifications
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Consent Expiry Reminders</Label>
                    <p className="text-sm text-muted-foreground">
                      3 days before access expires
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
  );
};

export default Settings;
