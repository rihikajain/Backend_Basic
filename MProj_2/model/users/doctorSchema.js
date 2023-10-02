import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    doctor_name : String,
    id : Number,
    phn_no : Number,
    email : String,
    address : String,
    specialisation : String,
    image_profile : String,
    doj : String
});

const doctors = mongoose.model("doctors", doctorSchema);

export default doctors;
