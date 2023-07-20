import Koa from "koa";
import { router } from "./routes/router.js";
import json from "koa-json";
import cors from "koa-cors";
import dotenv from "dotenv";
export const api = new Koa();
dotenv.config();

api.use(cors({ 
    origin: "*",  
    methods: "GET",
    maxAge: 30
}));

api.use(json()).use(router.routes()).use(router.allowedMethods());

api.listen(process.env.PORT, () => console.log("Listening on Port", process.env.PORT));