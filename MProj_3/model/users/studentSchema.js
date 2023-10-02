import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name : String,
    roll_no : Number,
    phn_no : Number,
    address : String,
    parent_name : String,
    caste : String,
    nationality : String,
    religion : String
});

const students = mongoose.model("students", studentSchema);

export default students;