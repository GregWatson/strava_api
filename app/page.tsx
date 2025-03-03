import StravaInfoForm from "@/components/forms/strava_info_form";
import PageHeader from "@/components/page-header";
import PageFooter from "@/components/page-footer";

const stravaClientID = process.env.STRAVA_CLIENT_ID as string;
const publicURL = process.env.PUBLIC_URL as string;

export default async function Home() {
  return (
    <div className="w-full bg-sky-900 container flex flex-col items-center justify-center mx-auto py-4">
      <PageHeader title="Test app for Strava API" />
      <StravaInfoForm stravaClientID={stravaClientID as string} />
      <PageFooter />
    </div>
  );
}
