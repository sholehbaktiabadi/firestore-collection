import joi from "joi";
import { response } from "../utils/response";
export class VisitorDto {
  name: string;
  company: string;
  phoneNumber: string;
}

export function visitorValidation(data: any): {
  isPassed: boolean;
  message?: string;
} {
  const schema = joi.object({
    name: joi.string().min(3).required(),
    phoneNumber: joi.string().min(3).required(),
    company: joi.string().allow(""),
  });
  const { error } = schema.validate(data);
  if (error?.isJoi) return { isPassed: false, message: error.message };
  return { isPassed: true };
}
