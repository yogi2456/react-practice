import { Router } from "express";
import UserRouter from "../routes/user.routes.js";

const router = Router()

router.use("/user", UserRouter)

export default router;