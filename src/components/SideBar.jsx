import { Home, Info, Phone, Settings } from "lucide-react"; // Import icons from Lucide
import { NavLink } from "react-router-dom"; // Assuming you're using react-router-dom for navigation

export default function Sidebar() {
  const menuItems = [
    { label: "Home", icon: <Home size={20} />, path: "/" },
    { label: "About", icon: <Info size={20} />, path: "/about" },
    { label: "Contact", icon: <Phone size={20} />, path: "/contact" },
    { label: "Settings", icon: <Settings size={20} />, path: "/settings" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      <h1 className="text-2xl font-bold text-center py-4">My Sidebar</h1>
      <nav className="flex flex-col gap-2 px-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-gray-800 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
