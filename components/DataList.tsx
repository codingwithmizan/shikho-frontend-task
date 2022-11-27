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
    <div>
      {items.length > 0 ? (
        items.map((item) => (
          <div
            key={item.id}
            className={`py-4 px-3 cursor-pointer hover:bg-sky-100 ${selectedItem === item.id && "bg-sky-300"}`}
            onClick={() => setSelectedItem(item.id)}
          >
            <TbListDetails className="inline-block" />
            <span className="pl-3 relative top-0.5">{item?.data?.title}</span>
          </div>
        ))
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </div>
  );
};
