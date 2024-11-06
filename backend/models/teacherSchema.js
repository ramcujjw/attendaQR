const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "Teacher"
    },
    school: {
        type:String,//mongoose.Schema.Types.ObjectId,
        ref: 'admin',
        required: true,
    },
    teachSubject: {
        type:String, //mongoose.Schema.Types.ObjectId,
        // ref: 'subject',
    },
    teachSclass: {
        type:String,// mongoose.Schema.Types.ObjectId,
        // ref: 'classe',
        required: true,
    },
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