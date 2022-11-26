import { FC} from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";

const { Header} = Layout;

const items1: MenuProps["items"] = ["1", "2"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
  
export const Navbar = () => {
  return (
    <Header className="header">
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} items={items1} />
  </Header>
  )
}

