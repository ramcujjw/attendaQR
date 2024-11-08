// Importing required models and QR code library
const QRCode = require('qrcode'); // For generating QR codes
const { Attendance, Session, Student } = require('../models'); // Import models

// Function to generate a QR code for a class session
const generateQrCode = async (req, res) => {
    try {
        const { classId, sessionId } = req.body;  // Assume classId and sessionId are passed in the request body

        // Generate the QR code data, you can also add other info like teacher id, class name, etc.
        const qrData = {
            classId,
            sessionId,
            timestamp: new Date().toISOString() // Timestamp to make it unique
        };

        // Generate QR code using the `qrcode` package
        const qrCode = await QRCode.toDataURL(JSON.stringify(qrData)); // Generate QR code

        // Return the generated QR code in response
        res.status(200).json({ qrCode });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to generate QR code", error });
    }
};

// Function for student to mark attendance by scanning QR code
const markAttendance = async (req, res) => {
    try {
        const { studentId, qrData } = req.body; // studentId and QR data are sent by the student

        // Decode the QR data (it will contain classId and sessionId)
        const decodedData = JSON.parse(qrData);

        // Check if session exists
        const session = await Session.findById(decodedData.sessionId);
        if (!session) return res.status(404).json({ message: "Session not found" });

        // Check if student exists
        const student = await Student.findById(studentId);
        if (!student) return res.status(404).json({ message: "Student not found" });

        // Mark attendance in the database
        const attendance = await Attendance.create({
            studentId: student._id,
            sessionId: decodedData.sessionId,
            date: new Date()  // Mark attendance at current time
        });

        res.status(200).json({ message: "Attendance marked successfully", attendance });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to mark attendance", error });
    }
};

module.exports = { generateQrCode, markAttendance };
