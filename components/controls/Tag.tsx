import { FC } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

interface TagProps {
  tag: string;
  onRemove: (tag: string) => void;
}
export const Tag: FC<TagProps> = ({ tag, onRemove }) => {
  return (
    <div className="border rounded pr-2 pl-4 py-2 shadow-sm">
      <span className="relative right-2 text-gray-700">{tag}</span>
      <IoCloseCircleOutline className="cursor-pointer inline-block hover:text-red-600" onClick={() => onRemove(tag)} />
    </div>
  );
};
