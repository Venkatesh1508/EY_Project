import { useState, useContext } from "react";
import { loginUser } from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await loginUser(form);
    login(data.token);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl mb-4">Login</h2>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} className="block w-full mb-2 p-2" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="block w-full mb-2 p-2" />
      <button type="submit" className="bg-red-500 px-4 py-2 text-white">Login</button>
    </form>
  );
};

export default Login;
