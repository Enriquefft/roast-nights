import { text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { schema } from "./schema";

export const stages = ["idea", "mvp", "pre-scale", "seed", "other"] as const;
export const stagesEnum = schema.enum("stages", stages);
export const joinTbl = schema.table("join", {
	name: text("name").notNull(),
	phone: text("phone").notNull(),
	stage: stagesEnum().notNull(),
	startupName: text("startup_name").notNull(),
	text: text("text").notNull(),
});

export const joinInsertSchema = createInsertSchema(joinTbl, {
	name: (nameSchema) => nameSchema.min(1),
	phone: (phoneSchema) =>
		phoneSchema.refine(isValidPhoneNumber, { message: "Invalid phone number" }),
	startupName: (startupNameSchema) => startupNameSchema.min(1),
});
