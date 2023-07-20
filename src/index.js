import Koa from "koa";
import { router } from "./routes/router.js";
import json from "koa-json";
import dotenv from "dotenv";
export const api = new Koa();
dotenv.config();

api.use(async (ctx) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Methods", "GET");
    ctx.set("Access-Control-Allow-Headers", "Content-Type");
});

api.use(json()).use(router.routes()).use(router.allowedMethods());

api.listen(process.env.PORT, () => console.log("Listening on Port", process.env.PORT));