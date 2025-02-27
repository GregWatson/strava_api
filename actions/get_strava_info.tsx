const stravaAtheleteURL = "https://www.strava.com/api/v3/athlete";

export async function getDetailedAthlete(access_token: string) {
  try {
    const response = await fetch(stravaAtheleteURL, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const detailedAthlete = await response.json();
    return detailedAthlete;
  } catch (error) {
    console.error("Could not fetch athlete data:", error);
    return null;
  }
}
