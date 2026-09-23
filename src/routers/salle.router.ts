import express from "express";
import salleController from "../controllers/salle.controller.ts";
import salleMiddleware from "../middlewares/salle.middleware.ts";

const salleRouter = express.Router();

salleRouter.get("/salles", salleController.getAll);//read
salleRouter.get("/salles/:id", salleController.getById);//read one
salleRouter.post("/salles", salleController.create);//create
salleRouter.patch("/salles/:id", salleMiddleware.checkExists, salleController.updateOne);//update
salleRouter.delete("/salles/:id", salleMiddleware.checkExists, salleController.deleteOne);//delete



export default salleRouter;