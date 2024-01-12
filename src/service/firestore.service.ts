import { Firestore } from "@google-cloud/firestore";
import type { Context } from "koa";
import path from "path";
import env from "../config/env";
import { response } from "../utils/response";
import { visitorValidation } from "../dto/visitor.dto";

export class FirestoreService {
  private firestore: Firestore;
  constructor() {
    this.firestore = new Firestore({
      projectId: env.FIRESTORE_PROJECT_ID,
      keyFilename: path.join(__dirname, env.FIRESTORE_SECRET_PATH),
    });
  }
  async storeVisitor(ctx: Context) {
    try {
      const dto = ctx.request.body;
      const { isPassed, message } = visitorValidation(dto);
      if (!isPassed) return response(ctx, message, 400);
      const epochTime = Date.now();
      const document = this.firestore.doc(`/visitor/${epochTime}`);
      await document.set(dto);
      return response(ctx, "write success");
    } catch (error) {
      return response(ctx, error, 500);
    }
  }
}
