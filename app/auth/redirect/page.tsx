// This MUST be a server page otherwise we cannot access process.env vars.

import AthleteHome from "@/components/athlete/athlete_home";

export default async function Redirect(props: {
  // params: { id: string };
  searchParams: Promise<{
    code: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const stravaClientID = process.env.STRAVA_CLIENT_ID as string;
  const stravaClientSecret = process.env.STRAVA_CLIENT_SECRET as string;
  const url = "https://www.strava.com/api/v3/oauth/token";
  const code = searchParams.code;
  console.log("Redirect: code is ", code, " clientID is ", stravaClientID);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: stravaClientID,
      client_secret: stravaClientSecret,
      code: code,
      grant_type: "authorization_code",
    }),
  });
  const data = await response.json();
  // const responseStr = JSON.stringify(data);
  // console.log("Redirect: response is ", responseStr);
  const expires_at = data.expires_at;
  const expires_in = data.expires_in;
  const refresh_token = data.refresh_token;
  const access_token = data.access_token;
  const athlete = data.athlete;

  // Athlete is an object with the following fields:
  // {id, username, resource_state, firstname, lastname, bio, city, state,
  // country, sex, premium, summit, created_at, updated_at, badge_type_id,
  // weight, profile_medium, profile, friend, follower}

  return (
    <div>
      <AthleteHome
        expires_at={expires_at}
        expires_in={expires_in}
        refresh_token={refresh_token}
        access_token={access_token}
        athlete={athlete}
      />
    </div>
  );
}
