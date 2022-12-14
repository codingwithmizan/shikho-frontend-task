import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input, FieldLabel, RichEditor, SubmitBtn } from "@/components/controls";
import { SearchTags } from "@/components/forms";
import { fetchPostById, addPost, updatePost } from "@/lib/graphql/queries";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      title: "",
      body: "",
    },
    resolver: yupResolver(postSchema),
  });

  useEffect(() => {
    if (selectedItem) {
      fetchPostById(selectedItem).then((res) => {
        reset({
          title: res?.post?.data?.title,
          body: res?.post?.data?.body?.text,
        });
      });
    }
  }, [selectedItem, reset]);

  const onSubmit = (data: any) => {
    if (selectedItem) {
      updatePost(selectedItem, data.title, data.body)
        .then((res) => {
          if (res?.updatePost) {
            toast.success("Post updated successfully");
          } else {
            toast.error("Something went wrong");
          }
        })
        .catch((err) => {
          toast.error("Something went wrong");
        });
    } else {
      addPost(data.title, data.body)
        .then((res) => {
          if (res?.createPost) {
            toast.success("Post added successfully");
          } else {
            toast.error("Something went wrong");
          }
        })
        .catch((err) => {
          toast.error("Something went wrong");
        });
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
          <FieldLabel name="title" label="Title" className="font-semibold" required  />
          <Input control={control} name="title" placeholder="e.g. This is first title" errors={errors}  />
        </div>
        <div className="mb-6">
          <FieldLabel name="body" label="Body"  />
          <RichEditor name="body" control={control} editorLoaded={editorLoaded}  />
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

const postSchema = yup
  .object()
  .shape({
    title: yup.string().required("Title is requred").trim(),
    // body: yup.string().required("Body is requred").trim(),
  })
  .required();
