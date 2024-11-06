
import { useState } from "react";


const AttendanceForm = () => {
  const [studentId, setStudentId] = useState("");
  const [status, setStatus] = useState("present");

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await markAttendance({ studentId, status }, token);
      alert("Attendance marked");
    } catch (error) {
      console.error("Failed to mark attendance", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="Student ID" required />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="present">Present</option>
        <option value="absent">Absent</option>
      </select>
      <button type="submit">Mark Attendance</button>
    </form>
  );
};

export default AttendanceForm;
