const mongoose=require ('mongoose')

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
        type: String, // Or change to ObjectId if you ref to Sclass
        required: true,
    },
    school: {
        type: String, // Change to ObjectId if you ref to Admin
        ref: 'admin',
        required: true,
    },
    role: {
        type: String,
        default: "Student"
    },
    attendance: [{
        subName: { type: String, required: true },  // The subject name
        date: { type: Date, required: true },      // The date of the attendance
        status: { type: Boolean, default: false }   // Mark as present (true) or absent (false)
    }]



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