import express from "express";
import userController from "../controllers/user.controller.ts";
import userMiddleware from "../middlewares/user.middleware.ts";
import userFromFrontMiddleware from "../middlewares/userFromFront.middleware.ts";

const userRouter = express.Router();

userRouter.get();//read
userRouter.get();//read one
userRouter.post();//create
userRouter.patch();//update
userRouter.delete();//delete



export default userRouter;