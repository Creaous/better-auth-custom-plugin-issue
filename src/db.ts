import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import * as schema from "../auth-schema";

const db = drizzle(new PGlite(), {
  schema,
});

export { db };
