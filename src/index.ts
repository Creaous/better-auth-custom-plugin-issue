import { Hono } from "hono";
import { auth } from "./auth";
import { migrator } from "./migrate";

migrator();

const app = new Hono();

app.get("/", async (c) => {
  try {
    await auth.api.signUpEmail({
      body: {
        name: "test",
        email: "test@test.com",
        password: "P@ssw0rd",
        username: "test",
      },
    });
  } catch (e) {}

  console.log(await auth.api.test());

  return c.text("Hello World");
});

app.on(["POST", "GET"], "/api/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

/* app.use(
  "/api/auth/*",
  cors({
    origin: "http://localhost:3005",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  }),
); */

export default app;
