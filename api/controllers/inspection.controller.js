require("dotenv").config();
const mongoose = require("mongoose");
const Inspection = mongoose.model(process.env.INS_MODEL);
const getAll = function(req,res){
    let count = process.env.DEFAULT_LIMIT;
    let offset = 0;
    Inspection.find().skip(offset).limit(count).exec(function(err,inspections){
        const response = {
            status : process.env.REST_OK,
            message : inspections
        }
        if(err){
            response.status = process.env.REST_SERVER_ERR;
            response.message = err;
        }
        res.status(response.status).json(response.message);
    })
}
const getOne = function(req,res){
    let insId = req.params.insId;
    if(!mongoose.isValidObjectId(insId)){
        res.status(process.env.REST_WRONG).message({"message":process.env.INVALID_ID})
        return
    }
    Inspection.findById(insId).exec(function(err,inspection){
        const response = {
            status : process.env.REST_OK,
            message : inspection
        }
        if(err){
            response.status = process.env.REST_SERVER_ERR;
            response.message = err;
        }
        res.status(response.status).json(response.message);
    })
}
const deletOne = function(req,res){
    let insId = req.params.insId;
    if(!mongoose.isValidObjectId(insId)){
        res.status(process.env.REST_WRONG).message({"message":process.env.INVALID_ID})
        return
    }
    Inspection.findById(insId).exec(function(err,inspection){
        const response = {
            status : process.env.REST_OK,
            message : inspection
        }
        if(err){
            response.status = process.env.REST_SERVER_ERR;
            response.message = err;
        }
        if(!inspection){
            response.status = process.env.REST_WRONG;
            response.status = {"message" : process.env.INS_ID_NOT_FOUND}
        }
        if(response.status !== process.env.REST_OK){
            res.status(response.status).json(response.message);
        }else{
            Inspection.findByIdAndDelete(insId).exec(function(err,result){
                if(err){
                    response.status = process.env.REST_SERVER_ERR;
                    response.message = err;
                }
                res.status(response.status).json(response.message);
            })
        }
    })
}
module.exports={
    getAll,
    getOne,
    deletOne
}