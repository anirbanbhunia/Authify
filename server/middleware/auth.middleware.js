import AppError from "../util.js/error.util.js"
import jwt from "jsonwebtoken"
import asyncHandler from "./asyncHandlerMiddleware.js"


const jwtAuth = asyncHandler( async(req,res,next) => {
    const token = (req.cookies && req.cookies.token) || null

    if(!token){
        return next(new AppError("Not authorized",401))
    }
    try{
        //console.log("secret is",process.env.JWT_SECRET)
        const userInfo = await jwt.verify(token,process.env.JWT_SECRET)
        req.user = userInfo
    }catch(err){
        return next(new AppError(err.message,500))
    }
    next()
})

export default jwtAuth