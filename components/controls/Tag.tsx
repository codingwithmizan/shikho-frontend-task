import { FC } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

interface TagProps {
  tag: string;
  onRemove: (tag: string) => void;
}
export const Tag: FC<TagProps> = ({ tag, onRemove }) => {
  return (
    <div className="border rounded px-2 py-3">
      <span>{tag}</span>
      <IoCloseCircleOutline className="cursor-pointer" onClick={() => onRemove(tag)} />
    </div>
  );
};
