import React from "react";

import NavItem from "./NavItem";
import NavItemsNested from "./NavItemsNested";

// Menu Items
import dashboardRoutes from "../../../../routes/dashboard";

export default function NavItems() {
  return (
    <>
      {dashboardRoutes.map((item) => {
        if (item.children) {
          return (
            <NavItemsNested
              title={item.title}
              iconName={item.iconName}
              items={item.children}
              key={item.title}
            />
          );
        }

        return (
          <NavItem
            title={item.title}
            iconName={item.iconName}
            link={item.link}
            key={item.title}
          />
        );
      })}
    </>
  );
}
