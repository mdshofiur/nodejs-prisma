import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { userRoute } from "./module/user/user.routers";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use(userRoute)


app.listen(port, async () => {
  console.log(`⚡️[server]: Server is running at ${port}`);
});
