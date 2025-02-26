import StravaInfoForm from "@/components/forms/strava_info_form";
// require("dotenv").config();
// import { useRouter } from "next/navigation";

const stravaClientID = process.env.STRAVA_CLIENT_ID as string;
const stravaClientSecret = process.env.STRAVA_CLIENT_SECRET as string;
//console.log("STRAVA CLIENT ID = ", stravaClientID);
// console.log("STRAVA_CLIENT_SECRET = ", stravaClientSecret);
// console.log("All process.env is ", process.env);

export default function Home() {
  return (
    <div>
      <p>Test Strava API</p>
      <StravaInfoForm stravaClientID={stravaClientID as string} />
    </div>
  );
}

// <StravaInfoForm/>
