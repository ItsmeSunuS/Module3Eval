const express=require("express");
const suerbase=require("../config/superbase");
const rateLimiter=require("../middlewares/rateLimiter.middleware");
const superbase = require("../config/superbase");
const router=express.Router();
router.post("/add",rateLimiter,async(req, res)=>{
    const {owner_id}=req.body;

const {data:owner}= await superbase.from("users").select("*").eq("id",owner_id).single();

if(!owner|| owner.role!=="owner")

    return res.status(403).json({msg:"only owners can add vehicles"});



}