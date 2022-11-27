import { FC } from "react";
import { Empty } from "antd";
import { TbListDetails } from "react-icons/tb";
interface DataListProps {
  items: any[];
  selectedItem: string;
  setSelectedItem: (value: string) => void;
}

export const DataList: FC<DataListProps> = ({ items, selectedItem, setSelectedItem }) => {
  return (
    <div className="pt-2">
      {items.length > 0 ? (
        items.map((item) => (
          <div
            key={item.id}
            className={`flex py-4 px-3 cursor-pointer hover:bg-sky-100 overflow-hidden text-ellipsis text-gray-600 ${
              selectedItem === item.id && "bg-sky-300 font-semibold text-gray-700"
            }`}
            onClick={() => setSelectedItem(item.id)}
          >
            <TbListDetails className="block w-8" />
            <span className="pl-3 w-44 relative -top-0.5 inline-block whitespace-nowrap overflow-hidden text-ellipsis">
              {item?.data?.title}
            </span>
          </div>
        ))
      ) : (
        <div className="h-screen flex justify-center items-center">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      )}
    </div>
  );
};
