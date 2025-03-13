import PageHeader from "@/components/page-header";
import PageFooter from "@/components/page-footer";
import StravaInfoForm from "@/components/forms/strava_info_form";
import { ShowCookiePairs } from "@/components/cookies/ShowCookiePairs";

export default async function Home() {
  return (
    <div>
      <PageHeader title="Test app for Strava API" />
      <div className="w-full flex-col items-center justify-items-center  bg-sky-900">
        <ShowCookiePairs />
        <StravaInfoForm />
      </div>
      <PageFooter />
    </div>
  );
}
