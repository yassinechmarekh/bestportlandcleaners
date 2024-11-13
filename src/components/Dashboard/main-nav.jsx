import { NavLink } from "react-router-dom";

export function MainNav() {
  const pages = [
    {
      url: "/dashboard",
      name: "Dashboard",
    },
    {
      url: "/dashboard/appointments",
      name: "Appointments",
    },
    {
      url: "/dashboard/profile",
      name: "Profile",
    },
  ];
  return (
    <nav className={"flex items-center space-x-4 lg:space-x-6"}>
      {pages.map((item , index) => (
        <NavLink
            key={index}
          to={item.url}
          className={({ isActive }) =>
            `text-xs sm:text-sm capitalize ${
              isActive
                ? "text-white font-bold"
                : "font-medium text-zinc-50 transition-colors duration-300 ease-in-out"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}
