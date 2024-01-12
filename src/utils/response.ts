import { Context } from "koa";

export function response(ctx: Context, message: string | any, status?: number) {
  ctx.response.status = status ? status : 200
  const data = {
    statusCode: status ? status : 200,
    message,
  };
  ctx.body = data
}
