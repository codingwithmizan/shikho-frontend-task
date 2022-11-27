import React, { useState } from "react";
import { AutoComplete } from "antd";

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const AutoCompleteControl: React.FC = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const onSearch = (searchText: string) => {
    setOptions(!searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]);
  };

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

  return (
    <AutoComplete
      className={`rounded-sm my-1 py-2 w-full !text-xs placeholder:!text-xs `}
      size="large"
      value={value}
      options={options}
      onSelect={onSelect}
      onSearch={onSearch}
      onChange={onChange}
      placeholder="Search tags"
    />
  );
};

export default AutoCompleteControl;
