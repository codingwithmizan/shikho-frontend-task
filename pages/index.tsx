import { useEffect } from "react";
import { Skeleton } from "antd";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/users/crud");
  }, []);
  return (
    <div className="mt-10 ml-4">
      <div className="mb-8">
        <Skeleton avatar paragraph={{ rows: 4 }} />
      </div>
      <div>
        <Skeleton avatar paragraph={{ rows: 6 }} />
      </div>
    </div>
  );
};

export default Home;
