import express from "express"
import { deleteUser, userStats } from "../controller/miscellaneousController.js"
import jwtAuth from "../middleware/auth.middleware.js"
import authorizedRole from "../middleware/authByRole.js"

const miscRoutes = express.Router()

miscRoutes.get("/admin/stats/users",jwtAuth,authorizedRole("ADMIN"),userStats)
miscRoutes.delete("/admin/deleteuser/:id",jwtAuth,authorizedRole("ADMIN"),deleteUser)

export default miscRoutes