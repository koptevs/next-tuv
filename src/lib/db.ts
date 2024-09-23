// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";

export async function getDbData() {
    const sql = neon(process.env.DATABASE_URL as string);
    const data = await sql`SELECT NOW()`;
    return data;
}
