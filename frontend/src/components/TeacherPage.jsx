
import AttendanceForm from "./AttendanceForm";
// import QRCodeDisplay from "./QRCodeDisplay";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";


const TeacherPage = () => {
  const [qrCode, setQrCode] = useState("");



  return (

    <div>
      <Navbar/>
      <h2>Teacher Dashboard</h2>
      <AttendanceForm setQrCode={setQrCode} />
      {qrCode && <QRCodeDisplay qrCode={qrCode} />}
    </div>
  );
};

export default TeacherPage;
