require("dotenv").config();
const mongoose = require("mongoose");
const inspectionSchema = mongoose.Schema(
    {
        id : String,
        business_name : String,
        date : Date,
        result : String
    }
)
mongoose.model(process.env.INS_MODEL,inspectionSchema,process.env.INS_MODEL_COL)