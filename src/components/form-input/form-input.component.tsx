import { Group, FormInputLabel, Input } from "./form-input.styles";

import { InputHTMLAttributes, FC } from "react";
type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...OtherProps }) => {
  return (
    <Group>
      <Input {...OtherProps} required />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            OtherProps.value &&
              typeof OtherProps.value === "string" &&
              OtherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
export default FormInput;
