const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'Teacher'
    },
    school: {
        type: String,
        ref: 'admin',
        required: true
    },
    teachSubject: {
        type: String, // You can later link this to the `subjectSchema` if needed
    },
    teachSclass: {
        type: String,  // You can link this to the `sclassSchema` if needed
        required: true
    },
    sessions: [{  // Optional: If you want to link multiple sessions for each teacher
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session'
    }]


    // attendance: [{
    //     date: {
    //         type: Date,
    //         required: true
    //     },
    //     presentCount: {
    //         type: String,
    //     },
    //     absentCount: {
    //         type: String,
    //     }
    // }]
}, { timestamps: true });

module.exports = mongoose.model("teacher", teacherSchema)