import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [successMessage, setSuccessmessage] = React.useState("");
  const navigate = useNavigate();
  const submitData = async () => {
    const data = {
      admin_name: name,
      admin_email_id: email,
      admin_password: password,
    };
    try {
      const res = await axios.post("/registration", data);
      console.log(res);
      setSuccessmessage("User is Login Successfully !!!");
      setTimeout(() => {
        navigate("/login"); // Navigate to Login page after success
      }, 2000);
    } catch (error) {
      setSuccessmessage("User Registration is Failed!!!");
    }
  };
  const handleRegistration = (event) => {
    event.preventDefault();
    submitData();
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <form onSubmit={handleRegistration}>
        <h1>Admin Registration Form</h1>
        <label>Admin Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Enter Admin Full name"
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label>Admin Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Enter Admin Email Address"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="Enter Strong Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button type="submit">Register</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {/* Display success message */}
    </div>
  );
};
