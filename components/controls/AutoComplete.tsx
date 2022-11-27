import React, { FC, useState } from "react";
import { AutoComplete } from "antd";

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

interface AutoCompleteControlProps {
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

const AutoCompleteControl: FC<AutoCompleteControlProps> = ({ selectedTags, setSelectedTags }) => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const onSearch = (searchText: string) => {
    setOptions(!searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]);
  };

  const onSelect = (data: string) => {
    const tags = [...selectedTags];
    tags.push(data);
    setSelectedTags(tags);
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
