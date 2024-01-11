import { Firestore } from "@google-cloud/firestore";
import { VisitorDto } from "../dto/visitor.dto";
import type { Context } from "koa";
import path from "path";
import env from "../config/env";
import { response } from "../utils/response";

export class FirestoreService {
  private firestore: Firestore;
  constructor() {
    this.firestore = new Firestore({
      projectId: env.FIRESTORE_PROJECT_ID,
      keyFilename: path.join(__dirname, env.FIRESTORE_SECRET_PATH),
    });
  }
  async store(ctx: Context) {
    try {
      const dto = ctx.request.body as VisitorDto;
      const epochTime = Date.now();
      const document = this.firestore.doc(`/visitor/${epochTime}`);
      await document.set(dto);
      response(ctx, "write success");
    } catch (error) {
        console.log(error)
      response(ctx, "write failed", 500);
    }
  }
}
