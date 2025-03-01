import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "customer" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(form);
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl mb-4">Register</h2>
      <input name="name" placeholder="Name" onChange={handleChange} className="block w-full mb-2 p-2" />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} className="block w-full mb-2 p-2" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="block w-full mb-2 p-2" />
      <select name="role" onChange={handleChange} className="block w-full mb-2 p-2">
        <option value="customer">Customer</option>
        <option value="restaurant">Restaurant</option>
      </select>
      <button type="submit" className="bg-red-500 px-4 py-2 text-white">Register</button>
    </form>
  );
};

export default Register;
