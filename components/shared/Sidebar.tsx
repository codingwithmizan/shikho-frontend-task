import { FC } from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { redirectTo } from "@/lib/utils/helper";

const { Sider } = Layout;

const items: MenuProps["items"] = [
  {
    label: (
      <span className="block" onClick={() => redirectTo("/users/crud")}>
        Users
      </span>
    ),
    key: "users",
  },
  {
    label: (
      <span className="block" onClick={() => redirectTo("/posts/crud")}>
        Posts
      </span>
    ),
    key: "posts",
  },
  {
    label: (
      <span className="block" onClick={() => redirectTo("/comments/crud")}>
        Comments
      </span>
    ),
    key: "comments",
  },
];

interface SidebarProps {
  selectedSidebar: string | null;
}

export const Sidebar: FC<SidebarProps> = ({ selectedSidebar }) => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={[selectedSidebar || ""]}
        key={selectedSidebar}
        className="h-full pt-3 border-r-0"
        items={items}
      />
    </Sider>
  );
};
