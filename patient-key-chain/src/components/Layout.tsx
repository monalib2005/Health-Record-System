// import { ReactNode } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Heart, FileText, Share2, Shield, Settings, Stethoscope, Activity } from "lucide-react";
// import { Button } from "./ui/button";
// import { cn } from "@/lib/utils";

// interface LayoutProps {
//   children: ReactNode;
//   userType?: "patient" | "doctor";
// }

// export const Layout = ({ children, userType = "patient" }: LayoutProps) => {
//   const location = useLocation();
  
//   const patientNav = [
//     { path: "/", label: "Dashboard", icon: Activity },
//     { path: "/upload", label: "Upload", icon: FileText },
//     { path: "/share", label: "Share", icon: Share2 },
//     { path: "/emergency", label: "Emergency", icon: Shield },
//     { path: "/audit", label: "Audit Log", icon: Activity },
//     { path: "/settings", label: "Settings", icon: Settings },
//   ];

//   const doctorNav = [
//     { path: "/doctor", label: "Portal", icon: Stethoscope },
//     { path: "/doctor/requests", label: "Requests", icon: FileText },
//     { path: "/settings", label: "Settings", icon: Settings },
//   ];

//   const navItems = userType === "doctor" ? doctorNav : patientNav;

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
//         <div className="container flex h-16 items-center justify-between px-4">
//           <Link to="/" className="flex items-center gap-2 font-semibold">
//             <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
//               <Heart className="h-5 w-5 text-primary-foreground" />
//             </div>
//             <span className="text-xl">HealthChain</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-1">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               const isActive = location.pathname === item.path;
//               return (
//                 <Link key={item.path} to={item.path}>
//                   <Button
//                     variant={isActive ? "secondary" : "ghost"}
//                     size="sm"
//                     className={cn(
//                       "gap-2",
//                       isActive && "bg-primary/10 text-primary hover:bg-primary/20"
//                     )}
//                   >
//                     <Icon className="h-4 w-4" />
//                     {item.label}
//                   </Button>
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Mobile menu button */}
//           <Button variant="ghost" size="sm" className="md:hidden">
//             <Activity className="h-5 w-5" />
//           </Button>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container px-4 py-8">
//         {children}
//       </main>

//       {/* Mobile Navigation */}
//       <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card md:hidden">
//         <div className="flex items-center justify-around py-2">
//           {navItems.slice(0, 5).map((item) => {
//             const Icon = item.icon;
//             const isActive = location.pathname === item.path;
//             return (
//               <Link key={item.path} to={item.path}>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   className={cn(
//                     "flex flex-col gap-1 h-auto py-2",
//                     isActive && "text-primary"
//                   )}
//                 >
//                   <Icon className="h-5 w-5" />
//                   <span className="text-xs">{item.label}</span>
//                 </Button>
//               </Link>
//             );
//           })}
//         </div>
//       </nav>
//     </div>
//   );
// };


import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, FileText, Share2, Shield, Settings, Stethoscope, Activity } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
  userType?: "patient" | "doctor";
}

export const Layout = ({ children, userType = "patient" }: LayoutProps) => {
  const location = useLocation();
  
  const patientNav = [
    { path: "/patient", label: "Dashboard", icon: Activity },
    { path: "/upload", label: "Upload", icon: FileText },
    { path: "/share", label: "Share", icon: Share2 },
    { path: "/emergency", label: "Emergency", icon: Shield },
    { path: "/audit", label: "Audit Log", icon: Activity },
    { path: "/settings", label: "Settings", icon: Settings },
  ];

  const doctorNav = [
    { path: "/doctor", label: "Portal", icon: Stethoscope },
    { path: "/request-access", label: "Requests", icon: FileText },
    { path: "/audit-doctor", label: "Audit Log", icon: Activity  },
  ];

  const navItems = userType === "doctor" ? doctorNav : patientNav;

  return (
    <div className="min-h-screen bg-background">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
              <Heart className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl">HealthChain</span>
          </Link>

          {/* Desktop Navbar */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    size="sm"
                    className={cn(
                      "gap-2",
                      isActive && "bg-primary/10 text-primary hover:bg-primary/20"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>

        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="container px-4 py-8">
        {children}
      </main>

      {/* MOBILE NAV */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card md:hidden">
        <div className="flex items-center justify-around py-2">
          {navItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "flex flex-col gap-1 h-auto py-2",
                    isActive && "text-primary"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs">{item.label}</span>
                </Button>
              </Link>
            );
          })}
        </div>
      </nav>

    </div>
  );
};
