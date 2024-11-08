const mongoose = require('mongoose');

// Schema for QR Code model
const qrCodeSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  qrData: { type: String, required: true }, // Store the actual QR code data (URL or string)
  generatedAt: { type: Date, default: Date.now }, // Automatically set timestamp
});

// Export the QR Code model
module.exports = mongoose.model('QRCode', qrCodeSchema);
