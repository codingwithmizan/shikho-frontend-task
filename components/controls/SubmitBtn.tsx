import { FC } from "react";
import { Button, ConfigProvider } from "antd";
import { FiCopy } from "react-icons/fi";

interface SubmitBtnProps {
  btnType: "CREATE" | "EDIT";
}
export const SubmitBtn: FC<SubmitBtnProps> = ({ btnType }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#086EA7",
        },
      }}
    >
      <Button
        type="primary"
        htmlType="submit"
        className="w-32 h-10"
        ghost
        icon={<FiCopy className="inline-block relative right-1" />}
      >
        <span className="relative left-2 font-semibold">{btnType === "CREATE" ? "CREATE" : "UPDATE"}</span>
      </Button>
    </ConfigProvider>
  );
};
