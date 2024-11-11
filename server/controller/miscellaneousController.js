import userModel from "../model/userModel.js";
import AppError from "../util.js/error.util.js";

export const userStats = async(req,res,next) => {
    try{
      const allUser = await userModel.find({})

      res.status(200).json({
        success: true,
        message: 'All registered users count',
        allUser
      })
    }catch(err){
      return next(new AppError(err.message, 400));
    }
  }

  export const deleteUser = async(req,res,next) => {
    try{
      const id = req.params.id;
      const user = await userModel.findById(id);

      if(!user){
        return next(new AppError("user not exist", 404));
      }

      const del = await userModel.deleteOne({_id:id})

      if(del.deletedCount === 0){
        return next(new AppError("user not deleted", 400));
      }

      res.status(200).json({
        success: true,
        message: "User deleted successfully",
      })
    }catch(err){
      return next(new AppError(err.message, 400));
    }
  }