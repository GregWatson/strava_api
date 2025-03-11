// Must be server page to get process.env access
import AthleteHome from "@/components/athlete/athlete_home";
import { getDetailedAthlete } from "@/actions/get_strava_info";
import PageHeader from "@/components/page-header";
import PageFooter from "@/components/page-footer";

// STrava will process the initial request to http://www.strava.com/oauth/authorize
// and will then redirect back to this page, passing the temporary code and the
// scope. We will then use the code to get the access token and refresh token.

export default async function Athelete(props: {
  // params: { id: string };
  searchParams: Promise<{
    code: string;
    scope: string;
  }>;
}) {
  // const access_token = data.access_token ?? null;
  const access_token = "abcd";

  const detailedAthlete = access_token
    ? await getDetailedAthlete(access_token)
    : null;
  // console.log("get_access. detailedAthlete is ", detailedAthlete);

  // Athlete is an object with the following fields:
  // {id, username, resource_state, firstname, lastname, bio, city, state,
  // country, sex, premium, summit, created_at, updated_at, badge_type_id,
  // weight, profile_medium, profile, friend, follower}

  return (
    <div className=" bg-sky-900 container flex flex-col items-center justify-center mx-auto">
      <PageHeader
        title="Strava authorization response"
        subtitle={access_token ? "Successful" : "Authorization failed"}
      />
      {detailedAthlete && <AthleteHome detailedAthlete={detailedAthlete} />}
      {!detailedAthlete && <h1>Could not get athlete data</h1>}
      <PageFooter />
    </div>
  );
}
