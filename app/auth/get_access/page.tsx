// Must be server page to get process.env access
import AthleteHome from "@/components/athlete/athlete_home";
import { getDetailedAthlete } from "@/actions/get_strava_info";

export default async function ExchangeToken(props: {
  // params: { id: string };
  searchParams: Promise<{
    code: string;
    scope: string;
  }>;
}) {
  const stravaClientID = process.env.STRAVA_CLIENT_ID as string;
  const stravaClientSecret = process.env.STRAVA_CLIENT_SECRET as string;
  const searchParams = await props.searchParams;
  const code = searchParams.code;
  const scope = searchParams.scope;
  console.log(
    "get_access. Code is ",
    code,
    " clientID is ",
    stravaClientID,
    " scope is ",
    scope
  );

  const url = "https://www.strava.com/api/v3/oauth/token";

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
  const access_token = data.access_token as string;
  // const athlete = data.athlete;

  console.log(
    "Strava response:  clientID is ",
    stravaClientID,
    " scope is ",
    scope,
    " Access_token is ",
    access_token
  );
  // Now get detailed info

  const detailedAthlete = access_token
    ? await getDetailedAthlete(access_token)
    : null;
  console.log("get_access. detailedAthlete is ", detailedAthlete);

  // Athlete is an object with the following fields:
  // {id, username, resource_state, firstname, lastname, bio, city, state,
  // country, sex, premium, summit, created_at, updated_at, badge_type_id,
  // weight, profile_medium, profile, friend, follower}

  return (
    <div>
      {detailedAthlete && <AthleteHome detailedAthlete={detailedAthlete} />}
      {!detailedAthlete && <h1>Could not get athlete data</h1>}
    </div>
  );
}
