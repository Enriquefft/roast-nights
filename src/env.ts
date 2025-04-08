/** biome-ignore-all lint/complexity/useLiteralKeys: On this file, we need to use string keys for the env object. */

import { vercel } from "@t3-oss/env-core/presets-zod";
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	client: {
		NEXT_PUBLIC_APP_URL: z.string().optional(),
		NEXT_PUBLIC_PROJECT_NAME: z.string(),
	},

	emptyStringAsUndefined: false,
	extends: [vercel()],
	runtimeEnv: {
		DRIZZLE_DATABASE_URL: process.env["DRIZZLE_DATABASE_URL"],
		NEXT_PUBLIC_APP_URL: process.env["NEXT_PUBLIC_APP_URL"],
		NEXT_PUBLIC_PROJECT_NAME: process.env["NEXT_PUBLIC_PROJECT_NAME"],
	},
	server: {
		DRIZZLE_DATABASE_URL: z.string().url(),
	},
});
