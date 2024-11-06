const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    subName: {
        type: String,
        // required: true,
    },
    subCode: {
        type: String,
        // required: true,
    },
    sessions: {
        type: String,
        // required: true,
    },
    sclassName: {
        type: String,//mongoose.Schema.Types.ObjectId,
        ref: 'classe',
        // required: true,
    },
    school: {
        type:String,// mongoose.Schema.Types.ObjectId,
        // ref: 'admin'
    },
    teacher: {
        type:String,// mongoose.Schema.Types.ObjectId,
        // ref: 'teacher',
    }
}, { timestamps: true });

module.exports = mongoose.model("subject", subjectSchema);