import { Outlet } from "react-router-dom";
import { ReactNode } from "react";

export const PublicLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="min-h-screen w-full">
      <Outlet />
      {children}
    </div>
  );
};
