import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES, PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes";
import { PrivateRoutes } from "./PrivateRoutes";
// Lazy load components
const LoginPage = lazy(() => import("../components/auth/LoginPage"));
const Dashboard = lazy(() => import("../components/dashboard/Dashboard"));
const Employees = lazy(() => import("../pages/Employees"));
const EmployeeDetail = lazy(() => import("../pages/Employees/EmployeeDetail"));
const Attendance = lazy(() => import("../pages/Attendance"));
const Recruitment = lazy(() => import("../pages/Recruitment"));
const Performance = lazy(() => import("../pages/Performance"));
const Benefits = lazy(() => import("../pages/Benefits"));
const Reports = lazy(() => import("../pages/Reports"));

// Component mapping
const components = {
  LoginPage,
  Dashboard,
  Employees,
  EmployeeDetail,
  Attendance,
  Recruitment,
  Performance,
  Benefits,
  Reports,
};
export function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        {PUBLIC_ROUTES.map(({ path, element }) => {
          const Component = components[element];
          return <Route key={path} path={path} element={<Component />} />;
        })}

        {/* Private Routes */}
        <Route element={<PrivateRoutes />}>
          <Route index element={<Navigate to={ROUTES.DASHBOARD} replace />} />
          {PRIVATE_ROUTES.map(({ path, element }) => {
            const Component = components[element];
            return <Route key={path} path={path} element={<Component />} />;
          })}
          {/* 사이드바에 추가되지 않고 라우터를 추가할 때 여기 */}
          <Route path={ROUTES.EMPLOYEE_DETAIL} element={<EmployeeDetail />} />
        </Route>

        {/* Catch all route */}
        <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
      </Routes>
    </Suspense>
  );
}
