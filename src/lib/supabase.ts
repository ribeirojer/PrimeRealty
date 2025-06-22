import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL) {
	throw new Error("Missing Supabase environment variables: SUPABASE_URL");
}

if (!SUPABASE_ANON_KEY) {
	throw new Error("Missing Supabase environment variables: SUPABASE_ANON_KEY");
}

if (!SUPABASE_SERVICE_ROLE_KEY) {
	throw new Error(
		"Missing Supabase environment variables: SUPABASE_SERVICE_ROLE_KEY",
	);
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const supabaseAdmin = createClient(
	SUPABASE_URL,
	SUPABASE_SERVICE_ROLE_KEY,
);

export const supabaseStorageUrl = `${SUPABASE_URL}/storage/v1/object/public`;
export const supabaseStorageBucket = "public";
