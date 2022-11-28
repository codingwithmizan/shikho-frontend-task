import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FieldLabel, RichEditor, SubmitBtn } from "@/components/controls";
import { SearchTags } from "@/components/forms";
import { addComment } from "@/lib/graphql/queries";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface CommentFormrops {
  selectedItem: string;
}
export const CommentForm: FC<CommentFormrops> = ({ selectedItem }) => {
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>(["Building a Huge Site With ReactJS Javascript Library"]);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      body: "",
    },
    resolver: yupResolver(commentSchema),
  });

  const onSubmit = (data: any) => {
    if (selectedItem) {
      console.log("comment edit data", data);
    } else {
      addComment(data.body)
        .then((res) => {
          if (res?.createComment) {
            toast.success("Comment added successfully");
          } else {
            toast.error("Something went wrong");
          }
        })
        .catch((err) => {
          toast.error("Something went worng");
        });
    }
  };
  return (
    <div className="px-10 mt-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-600">{selectedItem ? "Edit" : "Create"} a Comment</h2>
          <SubmitBtn btnType={selectedItem ? "EDIT" : "CREATE"} />
        </div>
        <div className="mb-6">
          <FieldLabel name="body" label="Body" required />
          <RichEditor name="body" control={control} editorLoaded={editorLoaded} errors={errors} />
        </div>
        <div>
          <FieldLabel name="post" label="Post" />
          <p className="text-gray-500">Search A Post and Tag this Comment </p>
          <SearchTags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        </div>
      </form>
    </div>
  );
};

const commentSchema = yup
  .object()
  .shape({
    body: yup.string().required("Body is requred").trim(),
  })
  .required();
