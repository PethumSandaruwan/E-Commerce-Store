import mongoose from "mongoose";
 
const couponSchema= new mongoose.Schema(
    {
        code:{
            type:String,
            required:true,
            unique:true
        },
        discountPercentage:{
            type:Number,
            required:true,
            min:0,
            min100,
        },
        expirationData:{
            type:Date,
            required:true,
        },
        isActive:{
            type:Boolean,
            default:true,
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
            unique:true,
        },
    },
        {
            timestamps:true,
        }
    
);
export const Coupon=mongoose.model("Coupen",couponSchema);

export default Coupon;