import { useState} from "react";
import { useDispatch } from "react-redux";
import "./sign-in-form.style.scss"
import FormInput from "../form-input/form-input.component";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import { googleSignInStart,emailSignInStart } from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: ""
};

const SignInForm = () => {
  const dispatch=useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart())
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart(email,password));
      resetFormFields();
     } catch (error) {
    //   switch (error.code) {
    //     case 'auth/wrong-password':
    //       alert("incorrect password for email");
    //       break;
    //     case 'auth/user-not-fount':
    //       alert("no user associated with this email");
    //       break;
    //     default:
          console.log(error);
      }
    };
//};

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          label="Email"
          type="email"
          name="email"
          value={email}
        />
        <FormInput
          onChange={handleChange}
          label="Password"
          type="password"
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base} >Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
        </div>

      </form>
    </div>
  );
};

export default SignInForm;
