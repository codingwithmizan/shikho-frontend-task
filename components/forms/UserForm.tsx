import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input, FieldLabel, SubmitBtn } from "@/components/controls";
import { SearchTags } from "@/components/forms";

interface UserFormProps {
  selectedItem: string;
}
export const UserForm: FC<UserFormProps> = ({ selectedItem }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const { control, handleSubmit } = useForm({
    mode: "all",
  });

  const onSubmit = (data: any) => {
    console.log("user data", data);
  };
  return (
    <div className="px-10 mt-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-600">Edit a User</h2>
          <SubmitBtn />
        </div>
        <div className="mb-6">
          <FieldLabel name="name" label="Name" className="font-semibold" />
          <Input control={control} name="name" placeholder="e.g. John Doe" />
        </div>
        <div className="mb-6">
          <FieldLabel name="address" label="Address" className="font-semibold" />
          <Input control={control} name="address" placeholder="e.g. Dhaka, Bangladesh" />
        </div>
        <div>
          <FieldLabel name="post" label="Posts" />
          <p className="text-gray-400">Search Posts And Tag </p>
          <SearchTags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        </div>
      </form>
    </div>
  );
};
