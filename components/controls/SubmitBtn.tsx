import React from "react";
import { Button } from "antd";
import { FiCopy } from "react-icons/fi";

export const SubmitBtn = () => {
  return (
    <Button
      type="primary"
      htmlType="submit"
      className="w-32 h-10"
      ghost
      icon={<FiCopy className="inline-block relative right-1" />}
    >
      <span className="relative left-2 font-semibold">UPDATE</span>
    </Button>
  );
};
