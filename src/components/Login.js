import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { NT_API_URL } from "../apiConfig";
import axios from "axios";

export default function Login({ handleSetLoggedIn })
{
  const navigate = useNavigate();
  const [formData, setFormData] = useState(
    {
      username: "",
      password: "",
    }
  );

  function handleChange(event)
  {
    setFormData((prevState) =>
    {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  function handleLogin(event)
  {
    event.preventDefault();

    axios.post(NT_API_URL + "users/login", formData)
      .then((response) =>
      {
        if (response.status === 200)
        {
          handleSetLoggedIn(response.data.token);
          setTimeout(() =>
          {
            navigate("/");
          }, 2000);
        }
      });
  }

  return (
    <form
      className="user-form login-form"
      onSubmit={handleLogin}>
      <label htmlFor="login-username">
        Username
      </label>
      <input
        autoFocus
        required
        type="text"
        name="username"
        id="login-username"
        className="form-input login-input"
        value={formData.username}
        onChange={handleChange} />

      <label htmlFor="login-password">
        Password
      </label>
      <input
        required
        type="password"
        name="password"
        id="login-password"
        className="form-input login-input"
        value={formData.password}
        onChange={handleChange} />

      <button
        type="submit"
        className="form-button login-button">
        Submit
      </button>
    </form>
  )
}