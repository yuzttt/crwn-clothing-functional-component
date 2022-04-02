import './form-input.styles.scss'
const FormInput = ({ label, ...OtherProps }) => {
  return (
    <div className="group">
      {label && (
        <label className={`${OtherProps.value.length ? "shrink" : ''} form-input-label`}>
          {label}
        </label>
      )}
      <input className="form-input" {...OtherProps} required />
    </div>
  );
};
export default FormInput;
