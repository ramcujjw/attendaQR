const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    subName: {
        type: String,
    },
    subCode: {
        type: String,
    },
    sessions: {
        type: String,
    },
    sclassName: {
        type: String, // Or ObjectId if you ref to Sclass
    },
    school: {
        type: String, // Or ObjectId if you ref to Admin
    },
    teacher: {
        type: String, // Or ObjectId if you ref to Teacher
    }
}, { timestamps: true });


module.exports = mongoose.model("subject", subjectSchema);