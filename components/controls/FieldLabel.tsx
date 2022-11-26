import { FC } from "react";

interface FieldLabelProps {
  name: string;
  label: string;
  required?: boolean;
  className?: string;
}
export const FieldLabel: FC<FieldLabelProps> = ({ name, label, required = false, className = "" }) => {
  return (
    <div className="mb-2">
      <label htmlFor={name} className={` whitespace-nowrap  font-semibold text-gray-600 relative ${className}`}>
        {label} {required && <span className="text-red-600">*</span>}
      </label>
    </div>
  );
};
