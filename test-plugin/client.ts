import type { test } from "./index";
import type { BetterAuthClientPlugin } from "better-auth";

export const testClient = () => {
  return {
    id: "test",
    $InferServerPlugin: {} as ReturnType<typeof test>,
    pathMethods: {
      "/test": "GET",
    },
  } satisfies BetterAuthClientPlugin;
};
