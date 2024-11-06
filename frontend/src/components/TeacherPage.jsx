
import AttendanceForm from "./AttendanceForm";
import QRCodeDisplay from "./QRCodeDisplay";
import { useState, useEffect } from "react";


const TeacherPage = () => {
  const [qrCode, setQrCode] = useState("");



  return (
    <div>
      <h2>Teacher Dashboard</h2>
      <AttendanceForm setQrCode={setQrCode} />
      {qrCode && <QRCodeDisplay qrCode={qrCode} />}
    </div>
  );
};

export default TeacherPage;
