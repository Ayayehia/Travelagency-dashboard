import { Link, NavLink } from "react-router";
import { sidebarItems } from "../../../constants/index";
import { cn } from "~/lib/utils";

export const NavItems = () => {
  return (
    <section className="nav-items">
      <Link to="" className="link-logo  ">
        <img src="/assets/icons/logo.svg" alt="logo" className="size-7" />
        <h1>Tourvisto</h1>
      </Link>
      <hr className="text-[#ECF2EF] " />
      <div className="pt-9">
        {sidebarItems.map(({ id, icon, label, href }) => (
          <div className="pt-3.5">
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn("group nav-item !text-lg !text-[#7F7E83] ", {
                    "bg-primary-100 !text-white font-semibold": isActive,
                  })}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0  group-hover:invert ${
                      isActive ? "brightness-0 invert" : "text-dark-200"
                    }`}
                  />
                  <span>{label}</span>
                </div>
              )}
            </NavLink>
          </div>
        ))}
      </div>
      <div className="flex flex-col  mt-auto mb-8">
        <div className="flex h-full gap-2 items-center">
          <img
            src="/assets/images/james.webp"
            alt="User avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1 overflow-hidden">
            <h2 className="font-semibold">Aya Nader</h2>
            <p className="truncate w-[120px] text-sm">aya@gmail.com</p>
          </div>
          <button>
            <img
              src="/assets/icons/logout.svg"
              alt="Logout"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
