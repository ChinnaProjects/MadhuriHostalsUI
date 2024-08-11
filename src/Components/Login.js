import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = (onLogin) => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const submitData = async () => {
    const data = {
      admin_email_id: email,
      admin_password: password,
    };
    try {
      const result = await axios.post("/login", data);
      console.log(result);
      setSuccessMessage("User is Login Successfully !!!");
      onLogin();
      setTimeout(() => {
        navigate("/home");
      }, 20);
    } catch (error) {
      setErrorMessage("User Login Failed");
    }
  };
  const handleLogin = (event) => {
    event.preventDefault();
    submitData();
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Admin Email-ID: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label>Admin Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
