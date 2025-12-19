import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload as UploadIcon, FileText, Lock, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const { toast } = useToast();

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setUploaded(true);
      toast({
        title: "Record uploaded successfully!",
        description: "Your record has been encrypted and stored on the blockchain.",
      });
    }, 2000);
  };

  return (
      <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold mb-2">Upload Health Record</h1>
          <p className="text-muted-foreground">
            Securely encrypt and store your health records on the blockchain
          </p>
        </div>

        <Card className="p-6 space-y-6">
          {/* File Upload Area */}
          <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
            <div className="flex flex-col items-center gap-3">
              <div className="rounded-full bg-primary/10 p-4">
                <UploadIcon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="font-medium">Click to upload or drag and drop</p>
                <p className="text-sm text-muted-foreground">
                  PDF, PNG, JPG up to 10MB
                </p>
              </div>
              <Input type="file" className="hidden" id="file-upload" />
              <Button variant="outline" asChild>
                <label htmlFor="file-upload" className="cursor-pointer">
                  Browse Files
                </label>
              </Button>
            </div>
          </div>

          {/* Record Details */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="type">Record Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select record type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="prescription">Prescription</SelectItem>
                  <SelectItem value="lab">Lab Report</SelectItem>
                  <SelectItem value="imaging">Imaging / X-Ray</SelectItem>
                  <SelectItem value="discharge">Discharge Summary</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="hospital">Hospital / Clinic</Label>
                <Input id="hospital" placeholder="Enter hospital name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Add any additional notes..."
                className="h-24"
              />
            </div>
          </div>

          {/* Security Info */}
          <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
            <div className="flex items-start gap-3">
              <Lock className="h-5 w-5 text-primary mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-medium">End-to-End Encryption</p>
                <p className="text-xs text-muted-foreground">
                  Your record will be encrypted with your private key before uploading
                  to the blockchain. Only you and people you grant access to can view it.
                </p>
              </div>
            </div>
          </div>

          {/* Upload Button */}
          <Button
            onClick={handleUpload}
            disabled={uploading || uploaded}
            className="w-full h-12 text-base"
            size="lg"
          >
            {uploading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent mr-2" />
                Encrypting & Uploading...
              </>
            ) : uploaded ? (
              <>
                <CheckCircle2 className="h-5 w-5 mr-2" />
                Uploaded Successfully
              </>
            ) : (
              <>
                <UploadIcon className="h-5 w-5 mr-2" />
                Encrypt & Upload to Blockchain
              </>
            )}
          </Button>
        </Card>

        {/* Recent Uploads */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Recent Uploads
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>✅ Blood Test Report - 2024-11-10</p>
            <p>✅ Prescription - 2024-10-28</p>
            <p>✅ X-Ray - 2024-10-15</p>
          </div>
        </Card>
      </div>
  );
};

export default Upload;
