    const mongoose = require('mongoose');

    const studentSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        rollNum: {
            type: Number,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        sclassName: {
            type: String,//mongoose.Schema.Types.ObjectId,
            // ref: 'classe',
            required: true,
        },
        school: {
            type: String,//mongoose.Schema.Types.ObjectId,
            ref: 'admin',
            required: true,
        },
        role: {
            type: String,
            default: "Student"
        },
        // examResult: [
        //     {
        //         subName: {
        //             type: mongoose.Schema.Types.ObjectId,
        //             ref: 'subject',
        //         },
        //         marksObtained: {
        //             type: Number,
        //             default: 0
        //         }
        //     }
        // ],
        // attendance: [{
        //     date: {
        //         type: Date,
        //         required: false
        //     },
        //     status: {
        //         type: String,
        //         enum: ['Present', 'Absent'],
        //         required: false
        //     },
        //     subName: {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: 'subject',
        //         required: false
        //     }
        // }]
    });

    module.exports = mongoose.model("student", studentSchema);