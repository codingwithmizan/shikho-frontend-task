import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FieldLabel, RichEditor, SubmitBtn } from "@/components/controls";
import {SearchTags} from '@/components/forms'
interface CommentFormrops {
  selectedItem: string;
}
export const CommentForm: FC<CommentFormrops> = ({ selectedItem }) => {
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const { control, handleSubmit } = useForm({
    mode: "all",
  });

  const onSubmit = (data: any) => {
    console.log("comment data", data);
  };
  return (
    <div className="px-10 mt-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-600">Edit a Comment</h2>
          <SubmitBtn />
        </div>
        <div className="mb-6">
          <FieldLabel name="body" label="Body" />
          <RichEditor name="body" control={control} editorLoaded={editorLoaded} />
        </div>
        <div>
          <FieldLabel name="post" label="Post" />
          <p className="text-gray-400">Search A Post and Tag this Comment </p>
          <SearchTags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        </div>
      </form>
    </div>
  );
};
