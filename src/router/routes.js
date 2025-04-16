export const ROUTES = {
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  EMPLOYEES: "/employees",
  ATTENDANCE: "/attendance",
  RECRUITMENT: "/recruitment",
  PERFORMANCE: "/performance",
  BENEFITS: "/benefits",
  REPORTS: "/reports",
};
export const PRIVATE_ROUTES = [
  {
    path: ROUTES.DASHBOARD,
    label: "대시보드",
    element: "Dashboard",
  },
  {
    path: ROUTES.EMPLOYEES,
    label: "임직원",
    element: "Employees",
  },
  {
    path: ROUTES.ATTENDANCE,
    label: "근태관리",
    element: "Attendance",
  },
  {
    path: ROUTES.RECRUITMENT,
    label: "채용",
    element: "Recruitment",
  },
  {
    path: ROUTES.PERFORMANCE,
    label: "성과평가",
    element: "Performance",
  },
  {
    path: ROUTES.BENEFITS,
    label: "복리후생",
    element: "Benefits",
  },
  {
    path: ROUTES.REPORTS,
    label: "보고서",
    element: "Reports",
  },
];

export const PUBLIC_ROUTES = [
  {
    path: ROUTES.LOGIN,
    element: "LoginPage",
  },
];
