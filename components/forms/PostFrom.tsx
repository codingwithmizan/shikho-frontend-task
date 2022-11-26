import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FiCopy } from "react-icons/fi";
import { Input, FieldLabel, RichEditor, SearchAndTag } from "@/components/controls";

interface PostFromProps {
  selectedItem: string;
}
export const PostFrom: FC<PostFromProps> = ({ selectedItem }) => {
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const { control, handleSubmit } = useForm({
    mode: "all",
  });

  const onSubmit = (data: any) => {
    console.log("post data", data);
  };
  return (
    <div className="px-10 mt-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-600">Edit a Post</h2>
          <button className="block border border-sky-600 px-5 rounded-lg hover:border-sky-500" type="submit">
            <FiCopy className="inline-block text-sky-600 hover:text-sky-500" />
            <span className="text-sky-600 pl-2 font-semibold hover:text-sky-500">UPDATE</span>
          </button>
        </div>
        <div className="mb-4">
          <FieldLabel name="title" label="Title" className="font-semibold" />
          <Input control={control} name="title" placeholder="e.g. This is first title" />
        </div>
        <div className="mb-4">
          <FieldLabel name="body" label="Body" />
          <RichEditor name="body" control={control} editorLoaded={editorLoaded} />
        </div>
        <div>
          <SearchAndTag />
        </div>
      </form>
    </div>
  );
};
