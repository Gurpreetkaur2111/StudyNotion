const mongoose=require("mongoose");
const courseProgress=new mongoose.Schema({
    gender:{
      type:String,
    },
    dateOfBirth:
    {
      type:String,
    },
    about:{
      type:String,
      trim:true,
    },
    contactNumber:
    {
      type:Number,
      trim:true,
    },

});
module.exports=mongoose.model("courseProgress",courseProgress);