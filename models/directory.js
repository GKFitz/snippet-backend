const mongoose = require("mongoose");
// const bcrypt= require("bcrypt");
const Schema = mongoose.Schema;

// const SALT_WORK_FACTOR = 5;
const directoySchema = new Schema({
  name: { type: String, required: true},
  description: { type: String, lowercase: true, required: true, unique: true }, 
  
  
}, {timestamps: true})


const Directory = mongoose.model("Directory", directorySchema);

module.exports = Directory;
