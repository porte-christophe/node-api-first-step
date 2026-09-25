import dotenv from 'dotenv';
import Express from "express";
import salleRouter from "./src/routers/salle.router.ts";
import roleRouter from "./src/routers/role.router.ts";
import cors from "cors";


dotenv.config();

const express = Express;
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
}));
app.use("/", salleRouter, roleRouter);



app.listen(port, ()=>{
	console.log(`Example app listening on port ${port}`);
});
