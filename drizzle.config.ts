import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./auth-schema.ts",
  out: "./migrations",
});
