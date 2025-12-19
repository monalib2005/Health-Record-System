import { Outlet } from "react-router-dom";
import { ReactNode } from "react";
import { Layout } from "../components/Layout";

export const PatientLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <Layout userType="patient">
      <Outlet />
      {children}
    </Layout>
  );
};
