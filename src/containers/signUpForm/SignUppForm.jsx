import React, { useState } from "react";
import "./signUpForm.style.css";

const defaultFormData = {
  displayName: "",
  password: "",
  confirmPassword: "",
};
function SignUppForm() {
  const [formData, setFormData] = useState(defaultFormData);

  const onChangeHandler = (e) => {
    console.log(e.target.name, ":", e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Please signup:</h1>
        <form onSubmit={onSubmitHandler}>
          <label for="display">Display Name</label>
          <input
            name="displayName"
            onChange={onChangeHandler}
            value={formData.displayName}
          />

          <label for="display">Password</label>
          <input
            name="Password"
            onChange={onChangeHandler}
            value={formData.password}
          />

          <label for="display">Confirm Password</label>
          <input
            name="Confirm Password"
            onChange={onChangeHandler}
            value={formData.confirmPassword}
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}
export default SignUppForm;
