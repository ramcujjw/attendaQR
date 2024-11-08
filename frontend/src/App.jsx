import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import TeacherPage from "./components/TeacherPage";
import Navbar from "./components/Navbar";
import TeacherProfile from "./components/TeacherProfile";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/profile" element={<TeacherProfile />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teacher" element={<TeacherPage />} />
      </Routes>
    </Router>
  );
};

export default App;
