import { FC, ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Layout } from "antd";
import { Navbar, Sidebar } from "@/components/shared";
import Head from "next/head";

const { Content } = Layout;

interface LayoutProps {
  children: ReactNode;
}

const BaseLayout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [selectedNavbar, setSelectedNavbar] = useState<string | null>(null);
  const [selectedSidebar, setSelectedSidebar] = useState<string | null>(null);

  useEffect(() => {
    if (router.query?.slug) {
      setSelectedSidebar(router.query?.slug[0]);
      setSelectedNavbar(router.query?.slug[1]);
    }
  }, [router.query?.slug]);

  return (
    <>
      <Head>
        <title>Shikho  Blog</title>
      </Head>
      <Layout style={{ minHeight: "100vh" }}>
        <Navbar selectedNavbar={selectedNavbar} selectedSidebar={selectedSidebar} />
        <Layout>
          <Sidebar selectedSidebar={selectedSidebar} />
          <Content style={{ marginLeft: 200 }}>{children}</Content>
        </Layout>
      </Layout>
    </>
  );
};

export default BaseLayout;
