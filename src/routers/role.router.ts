import express from "express";
import roleController from "../controllers/role.controller.ts";

const roleRouter = express.Router();

roleRouter.get("/roles", roleController.getAll);//read

export default roleRouter;