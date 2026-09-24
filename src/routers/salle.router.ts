import express from "express";
import salleController from "../controllers/salle.controller.ts";
import salleMiddleware from "../middlewares/salle.middleware.ts";
import salleFromFrontMiddleware from "../middlewares/salleFromFront.middleware.ts";

const salleRouter = express.Router();

salleRouter.get("/salles", salleController.getAll);//read
salleRouter.get("/salles/:id", salleController.getById);//read one
salleRouter.post("/salles", salleFromFrontMiddleware.checkDataFromFront, salleController.create);//create
salleRouter.patch("/salles/:id", salleFromFrontMiddleware.checkDataFromFront, salleMiddleware.checkExists, salleController.updateOne);//update
salleRouter.delete("/salles/:id", salleMiddleware.checkExists, salleController.deleteOne);//delete



export default salleRouter;