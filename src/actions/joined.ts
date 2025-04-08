"use server";
import type { z } from "zod";
import { db } from "@/db";
import { type joinInsertSchema, joinTbl } from "@/db/schema/join";

export async function joinCommunity(
	data: z.infer<typeof joinInsertSchema> & {
		agreement_feedback: boolean;
		agreement_privacy: boolean;
	},
) {
	if (!data.agreement_feedback || !data.agreement_privacy) {
		console.error("You must agree to the terms");
		return;
	}

	console.log("Submitting form data:", data);
	console.log("Submitting form data:", data);
	console.log("Submitting form data:", data);

	await db.insert(joinTbl).values({
		name: data.name,
		phone: data.phone,
		stage: data.stage,
		startupName: data.startupName,
		text: data.text,
	});
}
