import mongoose from "mongoose";

const libSchema = new mongoose.Schema({
   "title": "String",
   "author": "String",
   "genre": "String",
   "ISBN": "String",
   "availability": "Boolean"
   },{timestamps:true});

export default mongoose.model("LibData", libSchema);