// "use client";
import PageHeader from "@/components/page-header";
import PageFooter from "@/components/page-footer";
import StravaInfoForm from "@/components/forms/strava_info_form";
import { ShowCookiePairs } from "@/components/cookies/ShowCookiePairs";
import AthleteHome from "@/components/athlete/athlete_home";
import { Suspense } from "react";

export default async function Home(props: {
  searchParams: Promise<{
    isAuth: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const isAuth = searchParams.isAuth;
  return (
    <div>
      <PageHeader title="Test app for Strava API" />
      <div className="w-full flex-col items-center justify-items-center  bg-sky-900">
        {isAuth && (
          <div className="w-full flex-col items-center justify-items-center  bg-sky-900">
            <ShowCookiePairs />
            <Suspense fallback={<div>Loading Athlete...</div>}>
              <AthleteHome />
            </Suspense>
          </div>
        )}
        {!isAuth && (
          <div>
            <StravaInfoForm />
          </div>
        )}
      </div>
      <PageFooter />
    </div>
  );
}
