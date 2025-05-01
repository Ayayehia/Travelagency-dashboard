import React from "react";
import { Outlet } from "react-router";
import { NavItems } from "./components/NavItems";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
const Adminlayout = () => {
  return (
    <div className="bg-red-500 p-4 ">
      <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent width={270} enableGestures={false}>
          <NavItems />
        </SidebarComponent>
      </aside>

      <aside className="children">
        <Outlet />
        {/* This out let let the child of thelayput in the route display */}
      </aside>
    </div>
  );
};

export default Adminlayout;
