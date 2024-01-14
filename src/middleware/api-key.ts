import { Context } from "koa";
import { response } from "../utils/response";
import env from "../config/env";

export const ApiKeyMiddleware = async (ctx: Context, next: any) => {
  const apiKey = ctx.get("x-api-key");
  if (!apiKey) return response(ctx, "forbidden access, keys required", 401);
  if (apiKey !== env.APP_X_API_KEY)
    return response(ctx, "forbidden access, authorization failed", 401);
  await next();
};
