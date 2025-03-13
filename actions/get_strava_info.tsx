"use server";

const stravaAtheleteURL = "https://www.strava.com/api/v3/athlete";

export async function getDetailedAthlete(access_token: string) {
  if (!access_token) return null;
  try {
    const response = await fetch(stravaAtheleteURL, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    if (!response.ok) {
      return null;
    }
    const detailedAthlete = await response.json();
    return detailedAthlete;
  } catch (err) {
    console.log("getDetailedAthlete: caught error from Strava:", err);
    return null;
  }
}
