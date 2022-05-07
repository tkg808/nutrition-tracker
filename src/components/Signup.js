import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { NT_API_URL } from "../apiConfig";
import axios from "axios";

export default function Signup()
{
  const navigate = useNavigate();
  const [formData, setFormData] = useState(
    {
      username: "",
      email: "",
      password: "",
      re_password: "",
    }
  );

  function handleChange(event)
  {
    setFormData((prevState) =>
    {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event)
  {
    event.preventDefault();

    axios.post(NT_API_URL + "users/signup", formData)
      .then((response) =>
      {
        if (response.status === 201)
        {
          setTimeout(() =>
          {
            navigate("/login");
          }, 3000);
        }
      });
  }

  return (
    <form
      className="user-form signup-form"
      onSubmit={handleSubmit}>
      <label htmlFor="signup-username">
        Username
      </label>
      <input
        autoFocus
        required
        type="text"
        name="username"
        id="signup-username"
        className="form-input signup-input"
        value={formData.username}
        onChange={handleChange} />

      <label htmlFor="signup-email">
        Email
      </label>
      <input
        required
        type="text"
        name="email"
        id="signup-email"
        className="form-input signup-input"
        value={formData.email}
        onChange={handleChange} />

      <label htmlFor="signup-password">
        Password
      </label>
      <input
        required
        type="password"
        name="password"
        id="signup-password"
        className="form-input signup-input"
        value={formData.password}
        onChange={handleChange} />

      <label htmlFor="signup-re_password">
        Confirm Password
      </label>
      <input
        required
        type="password"
        name="re_password"
        id="signup-re_password"
        className="form-input signup-input"
        value={formData.re_password}
        onChange={handleChange} />

      <button
        type="submit"
        className="form-button signup-button">
        Submit
      </button>
    </form>
  )
}