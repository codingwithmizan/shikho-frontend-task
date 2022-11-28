import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input, FieldLabel, SubmitBtn } from "@/components/controls";
import { SearchTags } from "@/components/forms";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface UserFormProps {
  selectedItem: string;
}
export const UserForm: FC<UserFormProps> = ({ selectedItem }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([
    "Building a Huge Site With ReactJS Javascript Library",
    "this is my second post",
  ]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      address: "",
    },
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data: any) => {
    if (selectedItem) {
      console.log("user edit data", data);
    } else {
      console.log("user add data", data);
    }
  };
  return (
    <div className="px-10 mt-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-600">{selectedItem ? "Edit" : "Create"} a User</h2>
          <SubmitBtn btnType={selectedItem ? "EDIT" : "CREATE"} />
        </div>
        <div className="mb-6">
          <FieldLabel name="name" label="Name" className="font-semibold" required />
          <Input control={control} name="name" errors={errors} placeholder="e.g. John Doe" />
        </div>
        <div className="mb-6">
          <FieldLabel name="address" label="Address" className="font-semibold" required />
          <Input control={control} name="address" errors={errors} placeholder="e.g. Dhaka, Bangladesh" />
        </div>
        <div>
          <FieldLabel name="post" label="Posts" />
          <p className="text-gray-500">Search Posts And Tag </p>
          <SearchTags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        </div>
      </form>
    </div>
  );
};

const userSchema = yup
  .object()
  .shape({
    name: yup.string().required("Name is requred").trim(),
    address: yup.string().required("Address is requred").trim(),
  })
  .required();
