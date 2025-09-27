import asyncHandler from "express-async-handler"
export const protectRoute=asyncHandler(async(req,res)=>{
    if(!req.auth().isAuthenticated)
        return res.status(401).json({message:"Unauthorized Access Prohibited"})
    next()
})