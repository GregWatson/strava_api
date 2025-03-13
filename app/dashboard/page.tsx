import PageHeader from "@/components/page-header";
import PageFooter from "@/components/page-footer";
import { ShowCookiePairs } from "@/components/cookies/ShowCookiePairs";
import AthleteHome from "@/components/athlete/athlete_home";
//import { Suspense } from "react";
import { getDetailedAthlete } from "@/actions/get_strava_info";

export default async function Dashboard(props: {
  // params: { id: string };
  searchParams: Promise<{
    access_token: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const access_token = searchParams.access_token;
  const detailedAthlete = await getDetailedAthlete(access_token);

  return (
    <div>
      <PageHeader title="Test app for Strava API" subtitle="Dashboard" />
      <div className="w-full flex-col items-center justify-items-center  bg-sky-900">
        detailed athlete is {detailedAthlete !== null}
        {!access_token && <div>Access_token not defined!</div>}
        {access_token && <ShowCookiePairs />}
        {access_token && detailedAthlete && (
          <AthleteHome detailedAthlete={detailedAthlete} />
        )}
        {access_token && !detailedAthlete && (
          <p>Unable to get detailed Athlete information</p>
        )}
      </div>
      <PageFooter />
    </div>
  );
}
