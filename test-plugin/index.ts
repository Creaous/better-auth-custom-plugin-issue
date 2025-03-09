import { type BetterAuthPlugin } from "better-auth";
import { createAuthEndpoint } from "better-auth/api";

export const test = () => {
  return {
    id: "test",
    endpoints: {
      test: createAuthEndpoint(
        "/test",
        {
          method: "GET",
        },
        async (ctx) => {
          const total = await ctx.context.internalAdapter.countTotalUsers();

          console.log(total);

          return ctx.json({
            total: total,
          });
        },
      ),
    },
  } satisfies BetterAuthPlugin;
};
