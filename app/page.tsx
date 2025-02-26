import StravaInfoForm from "@/components/forms/strava_info_form";
// require("dotenv").config();
// import { useRouter } from "next/navigation";

const stravaClientID = process.env.STRAVA_CLIENT_ID as string;

export default async function Home() {
  return (
    <div>
      <p>Test Strava API</p>
      <StravaInfoForm stravaClientID={stravaClientID as string} />
    </div>
  );
}
