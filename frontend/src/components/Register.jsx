
import { useState } from "react";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("teacher");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ name, email, password, role });
      alert("Registration successful");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
        <option value="student">Student</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
