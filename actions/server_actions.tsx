// Server Actions
"use server";

export async function getStravaClientID() {
  const stravaClientID = process.env.STRAVA_CLIENT_ID as string;
  console.log("getStravaClientID returns ", stravaClientID);
  return stravaClientID ? stravaClientID : null;
}
