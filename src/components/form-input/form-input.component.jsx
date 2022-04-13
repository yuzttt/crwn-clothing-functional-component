import {Group,FormInputLabel,Input} from './form-input.styles';


const FormInput = ({ label, ...OtherProps }) => {
  return (
    <Group>
    <Input {...OtherProps} required/>
      {label && (
        <FormInputLabel shrink={OtherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
export default FormInput;
