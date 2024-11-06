
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import TeacherPage from "./components/TeacherPage";
// import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import TeacherProfile from "./components/TeacherProfile";

const App = () => {
  return (
    
      <Routes>
        
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/profile" element={<TeacherProfile />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teacher" element={<TeacherPage />} />
      </Routes>
    
  );
};

export default App;
