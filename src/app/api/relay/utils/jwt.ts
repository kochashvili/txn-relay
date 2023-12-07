import { JWT } from "google-auth-library";

const scopes = ["https://www.googleapis.com/auth/spreadsheets"];

const { email, key } = JSON.parse(process.env.GOOGLE_AUTH!);

console.log({ email, key });

export const jwtFromEnv = new JWT({ email, key, scopes });
