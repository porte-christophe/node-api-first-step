import dotenv from 'dotenv';
import Express from "express";
import salleRouter from "./src/routers/salle.router.ts"

dotenv.config();

const express = Express;
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/", salleRouter);


app.listen(port, ()=>{
	console.log(`Example app listening on port ${port}`);
});
