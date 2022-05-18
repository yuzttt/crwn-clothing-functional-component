import { 
  BaseButton, 
  GoogleSignInButton, 
  InvertedButton,
  LoadingSpinner 
} from './button.styles'

import {FC,ButtonHTMLAttributes} from 'react';
/*
we have 3 kinds of button:
default
inverted
google sign in
*/
export enum BUTTON_TYPE_CLASSES{
  base= 'base',
  google= 'google-sign-in',
  inverted= 'inverted'
}
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => ({
  [BUTTON_TYPE_CLASSES.base]: BaseButton,
  [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
  [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
}[buttonType]);

export type ButtonProps = {
 buttonType?: BUTTON_TYPE_CLASSES;
 isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button:FC<ButtonProps> = ({ children, buttonType, isLoading, ...otherProps }:ButtonProps) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading}{...otherProps}>
    {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
