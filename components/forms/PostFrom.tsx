import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input, FieldLabel, RichEditor, SubmitBtn } from "@/components/controls";
import { SearchTags } from "@/components/forms";
import { fetchPostById } from "@/lib/graphql/queries";

interface PostFromProps {
  selectedItem: string;
}
export const PostFrom: FC<PostFromProps> = ({ selectedItem }) => {
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([
    "this post is very helpful",
    "would love to hear more ...",
  ]);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  useEffect(() => {
    if (selectedItem) {
      // fetchPostById(selectedItem).then((res) => {
      //   console.log("post res ponse4444", res);
      // });
    }
  }, [selectedItem]);

  const { control, handleSubmit } = useForm({
    mode: "all",
  });

  const onSubmit = (data: any) => {
    if (selectedItem) {
      console.log("post edit data", data);
    } else {
      console.log("post add data", data);
    }
  };
  return (
    <div className="px-10 mt-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-600">{selectedItem ? "Edit" : "Create"} a Post</h2>
          <SubmitBtn btnType={selectedItem ? "EDIT" : "CREATE"} />
        </div>
        <div className="mb-6">
          <FieldLabel name="title" label="Title" className="font-semibold" />
          <Input control={control} name="title" placeholder="e.g. This is first title" />
        </div>
        <div className="mb-6">
          <FieldLabel name="body" label="Body" />
          <RichEditor name="body" control={control} editorLoaded={editorLoaded} />
        </div>
        <div>
          <FieldLabel name="comment" label="Comments" />
          <p className="text-gray-500">Search Comments And Assign it To the Post </p>
          <SearchTags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        </div>
      </form>
    </div>
  );
};
