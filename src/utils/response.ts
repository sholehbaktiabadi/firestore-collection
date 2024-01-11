import { Context } from "koa";

export function response(ctx: Context, message: string | any, status?: number) {
  if (!status) ctx.response.status = 200;
  const data = {
    statusCode: status ? status : 200,
    message,
  };
  return (ctx.body = data);
}
