import { FC } from "react";
import { AutoComplete, Tag } from "@/components/controls";
import { Empty } from "antd";

interface SearchTagsProps {
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

export const SearchTags: FC<SearchTagsProps> = ({ selectedTags, setSelectedTags }) => {
  const onRemoveTag = (tag: string) => {
    const tags = [...selectedTags];
    const index = tags.findIndex((currentTag) => currentTag === tag);
    tags.splice(index, 1);
    setSelectedTags(tags);
  };
  return (
    <div>
      <AutoComplete selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
      <div className="mt-3">
        {selectedTags.length > 0 ? (
          <div className="flex gap-4">
            {selectedTags.map((tag) => (
              <Tag key={tag} tag={tag} onRemove={onRemoveTag} />
            ))}
          </div>
        ) : (
          <div>
             <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </div>
        )}
      </div>
    </div>
  );
};
