import { FC } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

interface TagProps {
  tag: string;
  onRemove: (tag: string) => void;
}
export const Tag: FC<TagProps> = ({ tag, onRemove }) => {
  return (
    <div className="border rounded-lg pr-2 pl-5 py-2 shadow bg-white">
      <span className="relative right-2 text-gray-700">{tag}</span>
      <IoCloseCircleOutline className="relative -top-0.5 cursor-pointer inline-block text-gray-500 hover:text-red-600" onClick={() => onRemove(tag)} />
    </div>
  );
};
