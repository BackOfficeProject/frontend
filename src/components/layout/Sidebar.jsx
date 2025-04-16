import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/AuthContext";
import { PRIVATE_ROUTES, ROUTES } from "../../router/routes";
import {
  LayoutDashboardIcon,
  UsersIcon,
  ClockIcon,
  ClipboardCheckIcon,
  BarChart3Icon,
  HeartHandshakeIcon,
  UserPlusIcon,
  LogOutIcon,
} from "lucide-react";

export function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const getIcon = (path) => {
    const icons = {
      [ROUTES.DASHBOARD]: <LayoutDashboardIcon size={20} />,
      [ROUTES.EMPLOYEES]: <UsersIcon size={20} />,
      [ROUTES.ATTENDANCE]: <ClockIcon size={20} />,
      [ROUTES.RECRUITMENT]: <UserPlusIcon size={20} />,
      [ROUTES.PERFORMANCE]: <ClipboardCheckIcon size={20} />,
      [ROUTES.BENEFITS]: <HeartHandshakeIcon size={20} />,
      [ROUTES.REPORTS]: <BarChart3Icon size={20} />,
    };
    return icons[path];
  };

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  return (
    <aside className="bg-indigo-700 text-white w-64 flex-shrink-0 hidden md:block">
      <div className="p-4 h-16 flex items-center border-b border-indigo-600">
        <h1 className="text-xl font-bold">인사관리 시스템</h1>
      </div>
      <nav className="mt-6">
        <ul>
          {PRIVATE_ROUTES.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center w-full px-6 py-3 text-left ${
                    isActive
                      ? "bg-indigo-800 border-l-4 border-white"
                      : "hover:bg-indigo-600"
                  }`
                }
              >
                <span className="mr-3">{getIcon(path)}</span>
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute bottom-0 w-64 p-4 border-t border-indigo-600">
        <button
          onClick={handleLogout}
          className="flex items-center text-white opacity-80 hover:opacity-100"
        >
          <LogOutIcon size={20} className="mr-3" />
          <span>로그아웃</span>
        </button>
      </div>
    </aside>
  );
}
