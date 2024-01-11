import Router from "koa-router";
import { FirestoreService } from "./firestore.service";
import type { Context } from "koa";

export const firestoreRoutes = new Router();
const firestoreService = new FirestoreService();
firestoreRoutes.post(
  "/store",
  async (ctx: Context) => await firestoreService.store(ctx)
);
