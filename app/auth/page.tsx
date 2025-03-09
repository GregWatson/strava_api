// Must be server page to get process.env access
import AthleteHome from "@/components/athlete/athlete_home";
import { getDetailedAthlete } from "@/actions/get_strava_info";
import PageHeader from "@/components/page-header";
import PageFooter from "@/components/page-footer";

// STrava will process the initial request to http://www.strava.com/oauth/authorize
// and will then redirect back to this page, passing the temporary code and the
// scope. We will then use the code to get the access token and refresh token.

export default async function GetAccess(props: {
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
  const scope = searchParams.scope ?? "Scope unavailable";

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

  // Note: the expiry info and refresh token should be stored and
  // used to determine when to refresh the access token. See Strava API.

  const data = await response.json();
  const expires_at = data.expires_at ?? 0;
  const expires_in = data.expires_in ?? 0;
  const refresh_token = data.refresh_token ?? null;
  const access_token = data.access_token ?? null;

  const detailedAthlete = access_token
    ? await getDetailedAthlete(access_token)
    : null;
  // console.log("get_access. detailedAthlete is ", detailedAthlete);

  // Athlete is an object with the following fields:
  // {id, username, resource_state, firstname, lastname, bio, city, state,
  // country, sex, premium, summit, created_at, updated_at, badge_type_id,
  // weight, profile_medium, profile, friend, follower}

  const exp_at_date = new Date(expires_at * 1000);

  return (
    <div className=" bg-sky-900 container flex flex-col items-center justify-center mx-auto">
      <PageHeader
        title="Strava authorization response"
        subtitle={access_token ? "Successful" : "Authorization failed"}
      />
      {detailedAthlete && (
        <div>
          <p>Expires_at: {exp_at_date.toLocaleString()}</p>
          <p>Expires_in: {expires_in / 3600} hours</p>
          <p>Scope: {scope}</p>
        </div>
      )}
      {detailedAthlete && <AthleteHome detailedAthlete={detailedAthlete} />}
      {!detailedAthlete && <h1>Could not get athlete data</h1>}
      <PageFooter />
    </div>
  );
}
