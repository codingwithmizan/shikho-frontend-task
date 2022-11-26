import { FC } from "react";
import { UserForm, CommentForm, PostFrom } from "@/components/forms";


interface FromProps {
  selectedItem: string;
  selectedType: string;
}

export const Form: FC<FromProps> = ({ selectedItem, selectedType }) => {
  if (selectedType === "users") {
    return <UserForm selectedItem={selectedItem} />;
  } else if (selectedType === "posts") {
    return <PostFrom selectedItem={selectedItem} />;
  } else {
    return <CommentForm selectedItem={selectedItem}/>;
  }
};
