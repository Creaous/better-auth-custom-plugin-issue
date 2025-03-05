import { Hono } from "hono";
import { auth } from "./auth";
import { migrator } from "./migrate";

migrator();

const app = new Hono();

app.get("/", async (c) => {
  // doesn't work at all
  // authClient.createInvitation();
  // works but there is no type??
  // auth.api.createInvitation();

  await auth.api.signUpEmail({
    body: {
      name: "test",
      email: "test@test.com",
      password: "test",
      username: "test",
    },
  });

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
