import { Link, NavLink } from "react-router";
import { sidebarItems } from "../../../constants/index";
import { cn } from "~/lib/utils";

export const NavItems = () => {
  return (
    <section className="nav-items">
      <Link to="" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo" className="size-7" />
      </Link>
      <h1>Tourvisto</h1>
      <div>
        {sidebarItems.map(({ id, icon, label, href }) => (
          <div>
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn("group nav-item", {
                    "bg-primary-100 !text-white": isActive,
                  })}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 size-0 group-hover:invert ${
                      isActive ? "brightness-0 invert" : "text-dark-200"
                    }`}
                  />
                  <span className="text-sm">{label}</span>
                </div>
              )}
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
};
