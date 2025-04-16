import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import { Layout } from "../components/layout/Layout";
import { ROUTES } from "./routes";
export function PrivateRoutes() {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
