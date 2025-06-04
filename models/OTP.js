const module=require("mongoose");
const OTPSchema=new mongoose.Schema({

      email:{
        type:String,
        required:true,
      },
      otp:{
        type:String,
        required:true,        
      },
      createdAt:{
        tpe:Date,
        default:Date.now(),
        expires:5*60,
      },


});



//a function->to send email

async function sendVerificationEmail(email,otp){
  try{
    const mailResponse=await mailSender(email,"Verification Email from StudyNotion ",otp);
    console.log("Email Sent Successfully",mailResponse);
  }
  catch(error)
  {
    console.log("error occured while sending mails:",error);
    throw error;
  }

}
module.exports=mongoose.model("OTP",OTPSchema);