import { drizzle } from "drizzle-orm/node-postgres";
import { migrate as prodMigrate } from "drizzle-orm/node-postgres/migrator";
import { Client } from "pg";
import { sql } from "drizzle-orm";
import { migrate as testMigrate } from "drizzle-orm/pglite/migrator";
import { db } from "./db";
import { resolve } from "path";

// Get migrations folder path from CLI args or use default
const migrationsFolder =
  process.argv[2] ?? resolve(__dirname + "/../migrations");

export async function migrator() {
  await testMigrate(db, { migrationsFolder });
}
