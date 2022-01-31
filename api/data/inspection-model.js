require("dotenv").config();
const mongoose = require("mongoose");
const addressSchema = mongoose.Schema(
    {
        city : String,
        zip : Number,
        street : String,
        number : Number
    }
)
const inspectionSchema = mongoose.Schema(
    {
        id : String,
        business_name : String,
        date : Date,
        result : String,
        address :  addressSchema
    }
)
mongoose.model(process.env.INS_MODEL,inspectionSchema,process.env.INS_MODEL_COL)