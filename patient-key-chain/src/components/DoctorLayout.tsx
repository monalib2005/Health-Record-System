import { Outlet } from "react-router-dom";
import { ReactNode } from "react";
import { Layout } from "../components/Layout";

export const DoctorLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <Layout userType="doctor">
      <Outlet />
      {children}
    </Layout>
  );
};
