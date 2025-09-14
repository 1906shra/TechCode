import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { NextAuthConfig } from "next-auth";

export const authOptions: NextAuthConfig = {
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt", // ensures session is handled via JWT
  },
  jwt: {
    // optional: you can provide custom encryption/signing keys
    // encryption: true, // encrypt the JWT
  },
  secret: process.env.AUTH_SECRET, // mandatory for JWT encryption
  debug: true, // enables detailed logs for debugging
};

export default authOptions;
