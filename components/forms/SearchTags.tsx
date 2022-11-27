import {FC} from "react";
import { AutoComplete, Tag } from "@/components/controls";

interface SearchTagsProps{
  selectedTags:string[]
  setSelectedTags:(tags:string[]) => void
}

export const SearchTags:FC<SearchTagsProps> = ({selectedTags, setSelectedTags}) => {
  return (
    <div>
      <AutoComplete />
    </div>
  );
};

