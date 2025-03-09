import PageHeader from "@/components/page-header";
import PageFooter from "@/components/page-footer";
import ShowCookies from "@/components/cookies/showCookies";
import StravaInfoForm from "@/components/forms/strava_info_form";

export default async function Home() {
  return (
    <div>
      <PageHeader title="Test app for Strava API" />
      <div className="w-full flex-col items-center justify-items-center  bg-sky-900">
        <ShowCookies />
        <StravaInfoForm />
      </div>
      <PageFooter />
    </div>
  );
}
