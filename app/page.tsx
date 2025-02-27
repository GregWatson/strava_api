import StravaInfoForm from "@/components/forms/strava_info_form";
import PageHeader from "@/components/page-header";

const stravaClientID = process.env.STRAVA_CLIENT_ID as string;

export default async function Home() {
  return (
    <div className="container flex flex-col items-center justify-center mx-auto py-8">
      <PageHeader title="Test app for Strava API" />
      <StravaInfoForm stravaClientID={stravaClientID as string} />
    </div>
  );
}
