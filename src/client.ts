import { createAuthClient } from "better-auth/client";
import { usernameClient } from "better-auth/client/plugins";
import { invitationClient } from "../invitation-plugin/client";

export const authClient = createAuthClient({
  baseURL: "http://localhost:6969",
  plugins: [usernameClient(), invitationClient()],
});
