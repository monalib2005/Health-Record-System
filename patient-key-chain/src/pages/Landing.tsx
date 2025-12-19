// import { Layout } from "@/components/Layout";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { 
//   Shield, 
//   FileText, 
//   Share2, 
//   User, 
//   Stethoscope,
//   Mail,
//   Phone,
//   Github,
//   Twitter,
//   Linkedin
// } from "lucide-react";

// const LandingPage = () => {
//   return (
//     <Layout userType={null} >
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex flex-col">
//         {/* Main Content */}
//         <div className="flex-1">

//           {/* Hero Section */}
//           <section className="px-6 py-16 md:py-24 lg:py-32">
//             <div className="container mx-auto max-w-6xl text-center">
//               <Badge className="mb-4" variant="secondary">
//                 <Shield className="h-3 w-3 mr-1" />
//                 Blockchain-Powered Health Records
//               </Badge>
//               <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//                 Your Health, Your Control
//               </h1>
//               <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
//                 Securely store, share, and manage your medical records on the blockchain. 
//                 Verified via DigiLocker. Accessible to doctors instantly.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button 
//                   size="lg" 
//                   className="gap-2 bg-gradient-to-br from-primary to-primary/100 hover:from-primary/90"
//                   disabled
//                 >
//                   <User className="h-5 w-5" />
//                   Get Started as Patient
//                 </Button>
//                 <Button 
//                   size="lg" 
//                   variant="secondary" 
//                   className="gap-2"
//                   disabled
//                 >
//                   <Stethoscope className="h-5 w-5" />
//                   Get Started as Doctor
//                 </Button>
//               </div>
//             </div>
//           </section>

//           {/* Features Grid */}
//           <section className="px-6 py-16 md:py-24">
//             <div className="container mx-auto max-w-6xl">
//               <h2 className="text-3xl font-bold text-center mb-12">Why Choose MediChain?</h2>
//               <div className="grid md:grid-cols-3 gap-8">
//                 <Card className="p-6 text-center hover:shadow-lg transition-shadow">
//                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
//                     <Shield className="h-6 w-6 text-primary" />
//                   </div>
//                   <h3 className="font-semibold mb-2">Immutable & Secure</h3>
//                   <p className="text-muted-foreground text-sm">
//                     Records stored on blockchain. Tamper-proof and auditable.
//                   </p>
//                 </Card>

//                 <Card className="p-6 text-center hover:shadow-lg transition-shadow">
//                   <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
//                     <Share2 className="h-6 w-6 text-secondary" />
//                   </div>
//                   <h3 className="font-semibold mb-2">Instant Sharing</h3>
//                   <p className="text-sm text-muted-foreground">
//                     Share records with doctors in seconds. Revoke anytime.
//                   </p>
//                 </Card>

//                 <Card className="p-6 text-center hover:shadow-lg transition-shadow">
//                   <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
//                     <FileText className="h-6 w-6 text-accent" />
//                   </div>
//                   <h3 className="font-semibold mb-2">All Records in One Place</h3>
//                   <p className="text-sm text-muted-foreground">
//                     Lab reports, prescriptions, scans — all digitized and linked.
//                   </p>
//                 </Card>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Professional Footer */}
//         <footer className="bg-muted/50 border-t mt-auto">
//           <div className="container mx-auto px-6 py-12">
//             <div className="grid md:grid-cols-4 gap-8">
//               {/* Brand */}
//               <div className="space-y-4">
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
//                     <Shield className="h-5 w-5 text-white" />
//                   </div>
//                   <span className="font-bold text-lg">MediChain</span>
//                 </div>
//                 <p className="text-sm text-muted-foreground">
//                   Secure, decentralized health records powered by blockchain and DigiLocker.
//                 </p>
//                 <div className="flex gap-3">
//                   <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
//                     <Twitter className="h-5 w-5" />
//                   </a>
//                   <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
//                     <Github className="h-5 w-5" />
//                   </a>
//                   <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
//                     <Linkedin className="h-5 w-5" />
//                   </a>
//                 </div>
//               </div>

//               {/* Product */}
//               <div>
//                 <h3 className="font-semibold mb-3">Product</h3>
//                 <ul className="space-y-2 text-sm text-muted-foreground">
//                   <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
//                   <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
//                   <li><a href="#" className="hover:text-primary transition-colors">Blockchain</a></li>
//                   <li><a href="#" className="hover:text-primary transition-colors">DigiLocker</a></li>
//                 </ul>
//               </div>

//               {/* Company */}
//               <div>
//                 <h3 className="font-semibold mb-3">Company</h3>
//                 <ul className="space-y-2 text-sm text-muted-foreground">
//                   <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
//                   <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
//                   <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
//                   <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
//                 </ul>
//               </div>

//               {/* Support */}
//               <div>
//                 <h3 className="font-semibold mb-3">Support</h3>
//                 <ul className="space-y-2 text-sm text-muted-foreground">
//                   <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
//                   <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
//                   <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
//                   <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
//                 </ul>
//               </div>
//             </div>

//             <Separator className="my-8" />

//             <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
//               <p>© 2025 MediChain. All rights reserved.</p>
//               <div className="flex gap-6 mt-4 md:mt-0">
//                 <a href="mailto:support@medichain.in" className="flex items-center gap-1 hover:text-primary transition-colors">
//                   <Mail className="h-4 w-4" />
//                   support@medichain.in
//                 </a>
//                 <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-primary transition-colors">
//                   <Phone className="h-4 w-4" />
//                   +91 98765 43210
//                 </a>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </Layout>
//   );
// };

// export default LandingPage;

import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import RegisterPage from "./Register";
import { 
  Shield, 
  FileText, 
  Share2, 
  User, 
  Stethoscope,
  Mail,
  Phone,
  Github,
  Twitter,
  Linkedin,
  Lock,
  CheckCircle2,
  Zap,
  Hospital,
  Activity,
  Brain,
  QrCode,
  Clock,
  Fingerprint,
  Cloud,
  Globe,
  Award,
  ChevronRight
} from "lucide-react";
import { PublicLayout } from "@/components/PublicLayout";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex flex-col">
        {/* Main Content */}
        <div className="flex-1">

          {/* Hero Section */}
          <section className="px-6 py-16 md:py-24 lg:py-32">
            <div className="container mx-auto max-w-6xl text-center">
              <Badge className="mb-4" variant="secondary">
                <Shield className="h-3 w-3 mr-1" />
                Blockchain-Powered Health Records
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Your Health, Your Control
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                Securely store, share, and manage your medical records on the blockchain. 
                Verified via DigiLocker. Accessible to doctors instantly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="gap-2 bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90"
                  onClick={() => navigate('/register')}
                >
                  <User className="h-5 w-5" />
                  Get Started as Patient
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="gap-2"
                  onClick={() => navigate('/register')}
                >
                  <Stethoscope className="h-5 w-5" />
                  Get Started as Doctor
                </Button>
              </div>
            </div>
          </section>

          {/* How It Works - 4 Steps */}
          <section className="px-6 py-16 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: Fingerprint, title: "Verify via DigiLocker", desc: "Connect your DigiLocker to verify identity and import government-issued health documents securely." },
                  { icon: Cloud, title: "Upload or Auto-Fetch", desc: "Upload prescriptions, lab reports, scans, or link hospital portals for instant sync." },
                  { icon: Shield, title: "Blockchain Ownership", desc: "Your records are encrypted and anchored on blockchain for tamper-proof ownership." },
                  { icon: QrCode, title: "Share Securely", desc: "Generate a temporary access token or QR code. Doctors view records instantly." }
                ].map((step, i) => (
                  <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Step {i + 1}: {step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Dual Benefits: Patients & Doctors */}
          <section className="px-6 py-16">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12">Designed for Patients & Doctors</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5">
                  <div className="flex items-center gap-3 mb-4">
                    <User className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">For Patients</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    {["Full control over who sees your medical history", "A single place for all records", "No more carrying physical files", "Blockchain ensures no tampering", "Revoke access instantly"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-8 border-secondary/20 bg-gradient-to-br from-secondary/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Stethoscope className="h-8 w-8 text-secondary" />
                    <h3 className="text-2xl font-bold">For Doctors</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    {["Instant access to patient history", "Better diagnostics with complete background", "Secure and verified records", "No need for patients to remember history", "Improves emergency and OPD flow"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </section>

          {/* What Makes MediChain Different? */}
          <section className="px-6 py-16 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12">What Makes MediChain Different?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Lock, title: "Blockchain-Level Security", desc: "Your records cannot be altered — every update is timestamped and verifiable." },
                  { icon: Award, title: "DigiLocker Integration", desc: "Authentic documents directly from government-verified sources." },
                  { icon: Zap, title: "Real-Time Access", desc: "Doctors can access records in seconds through a secure link or QR scan." },
                  { icon: Hospital, title: "Hospital Interoperability", desc: "Import/export records from any hospital system." },
                  { icon: Activity, title: "Emergency Access (Soon)", desc: "Allow emergency doctors to access critical info with your permission." }
                ].map((item, i) => (
                  <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                    <item.icon className="h-10 w-10 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="px-6 py-16">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12">Real-World Use Cases</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Activity, title: "Chronic Patients", desc: "Manage diabetes, cardiac, thyroid with record timelines." },
                  { icon: FileText, title: "Lab Reports", desc: "All reports auto-linked with your health profile." },
                  { icon: Hospital, title: "Hospital Visits", desc: "No need to carry files — just share access." },
                  { icon: Zap, title: "Emergency Cases", desc: "Provide paramedics with life-saving info instantly." }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          {/* <section className="px-6 py-16 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12">Technology Behind MediChain</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Blockchain Layer
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Tamper-proof record verification</li>
                    <li>• Immutable record tracking</li>
                    <li>• Secure access logs</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Cloud className="h-5 w-5 text-secondary" />
                    Cloud Storage Layer
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Encrypted document storage</li>
                    <li>• Fast retrieval</li>
                    <li>• Distributed backups</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Fingerprint className="h-5 w-5 text-accent" />
                    Identity Verification
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Via DigiLocker & ABHA (optional)</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    Data Compliance
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• HIPAA-inspired security</li>
                    <li>• AES-256 encryption</li>
                    <li>• End-to-end audit trail</li>
                  </ul>
                </Card>
              </div>
            </div>
          </section> */}

          {/* Testimonials */}
          <section className="px-6 py-16">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 italic">
                  <p className="text-lg mb-4">“Sharing my medical history with a new doctor took 10 seconds. Life-changing!”</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">R</div>
                    <div>
                      <p className="font-semibold">Riya, Pune</p>
                      <p className="text-sm text-muted-foreground">Chronic Patient</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 italic">
                  <p className="text-lg mb-4">“As a doctor, having the full patient history improves diagnoses tremendously.”</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-sm font-bold">D</div>
                    <div>
                      <p className="font-semibold">Dr. Menon</p>
                      <p className="text-sm text-muted-foreground">Cardiologist</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Security Guarantee */}
          <section className="px-6 py-16 bg-primary/5">
            <div className="container mx-auto max-w-6xl text-center">
              <h2 className="text-3xl font-bold mb-6">Your Privacy, Guaranteed</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                You own your data — not hospitals or apps. Zero-knowledge encryption by default. No third-party data sharing.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {["Blockchain Verified", "Encrypted Storage", "Patient-Owned Privacy"].map((badge, i) => (
                  <Badge key={i} variant="outline" className="text-sm py-2 px-4 border-primary/50">
                    <Shield className="h-4 w-4 mr-1" />
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </section>

          {/* Roadmap */}
          {/* <section className="px-6 py-16 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12">Roadmap 2025</h2>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { icon: ChevronRight, title: "Auto-fetch from hospitals" },
                  { icon: Brain, title: "AI-powered insights" },
                  { icon: Activity, title: "Record timeline & analytics" },
                  { icon: Shield, title: "Emergency access protocol" },
                  { icon: Clock, title: "Wearable integration" }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 rounded-lg bg-white dark:bg-slate-800 shadow-sm">
                    <item.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </section> */}

          {/* FAQ */}
          <section className="px-6 py-16">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Is my data stored on the blockchain?", a: "Only encrypted metadata + ownership logs. Actual files are stored securely on cloud." },
                  { q: "Can doctors modify my records?", a: "No — they can only upload new records." },
                  { q: "What happens if I lose my login?", a: "You can re-verify identity through DigiLocker or ABHA." }
                ].map((faq, i) => (
                  <Card key={i} className="p-6">
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Professional Footer */}
        <footer className="bg-muted/50 border-t mt-16">
          <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-lg">MediChain</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Secure, decentralized health records powered by blockchain and DigiLocker.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Product</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Blockchain</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">DigiLocker</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Company</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Support</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                </ul>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
              <p>© 2025 MediChain. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="mailto:support@medichain.in" className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  support@medichain.in
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default LandingPage;