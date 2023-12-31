import Router from "koa-router";
import { willayas } from "../database/willayas.js";
import { desc } from "../database/description.js";
import { info } from "../database/info.js";
export const router = new Router();

router.get("/", (ctx) => {
    ctx.body = "Welcome to Algeria 🎉";
});

router.get("/willayas", (ctx) => {
    ctx.body = willayas;
});

router.get("/desc", (ctx) => {
    ctx.body = desc;
});

router.get("/info", (ctx) => {
    ctx.body = info;
});