import Koa from "koa";
import koaBody from "koa-bodyparser";
import cors from '@koa/cors'
import { firestoreRoutes } from "./service/firestore.route";
import env from "./config/env";
import { ApiKeyMiddleware } from "./middleware/api-key";

function bootstarp() {
  const app = new Koa();
  app.use(cors())
  app.use(ApiKeyMiddleware)
  app.use(koaBody());
  app.keys = ['authKey']
  app.use(firestoreRoutes.routes());
  app.use((ctx) => {
    ctx.body = { status: "ok" };
  });
  app.listen(env.APP_PORT);
  console.log(`App running on port ${env.APP_PORT}`);
}

bootstarp();
