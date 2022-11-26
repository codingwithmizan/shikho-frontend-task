import { FC, ReactNode, useState, useEffect } from "react";
import{useRouter} from 'next/router'
import { Layout } from "antd";
import { Navbar, Sidebar } from "@/components/shared";

const { Content } = Layout;

interface LayoutProps {
  children: ReactNode;
}

const BaseLayout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [selectedNavbar, setSelectedNavbar] = useState<string|null>(null)
  const [selectedSidebar, setSelectedSidebar] = useState<string|null>(null)
 
 console.log('router', router);
 
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Layout>
        <Sidebar selectedSidebar={selectedSidebar}/>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
