import dotenv from "dotenv";
import Express from "express";


dotenv.config();

const port = process.env.DATABASE_PORT;
const express = Express;
const app = express();

app.listen(port, ()=>{
	console.log(`Example app listening on port ${port}`);
});