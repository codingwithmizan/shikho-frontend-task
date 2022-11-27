import { FC } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { redirectTo } from "@/lib/utils/helper";

const { Header } = Layout;

interface NavbarProps {
  selectedNavbar: string | null;
  selectedSidebar: string | null;
}

export const Navbar: FC<NavbarProps> = ({ selectedNavbar, selectedSidebar }) => {
  console.log("selectedNavbar", selectedNavbar);

  const items: MenuProps["items"] = [
    {
      label: (
        <span
          className={`inline-block px-10  ${selectedNavbar === "crud" && "bg-sky-600"}`}
          onClick={() => redirectTo(`/${selectedSidebar}/crud`)}
        >
          CRUD
        </span>
      ),
      key: "crud",
    },
    {
      label: (
        <span
          className={`inline-block px-10 relative -left-10 ${selectedNavbar === "blank" && "bg-sky-600"}`}
          onClick={() => redirectTo(`/${selectedSidebar}/blank`)}
        >
          Blank
        </span>
      ),
      key: "blank",
    },
  ];
  return (
    <Header className="header flex" style={{ position: "sticky", top: 0, zIndex: 10, width: "100%" }}>
      <div className="inline-block w-32 text-white text-lg relative top-4">React GraphQL</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[selectedNavbar || ""]}
        items={items}
        key={selectedNavbar}
      />
    </Header>
  );
};
