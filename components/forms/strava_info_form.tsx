"use client";

import { useRouter } from "next/navigation";

export default function StravaInfoForm({
  stravaClientID,
}: {
  stravaClientID: string;
}) {
  const router = useRouter();
  console.log("StravaInfoForm STRAVA CLIENT ID = ", stravaClientID);

  function getData(formData: any) {
    const userName = formData.get("userName");
    const ClientID = formData.get("clientID");
    router.push(`/auth?user=${userName}&clientID=${ClientID}`);
  }

  // const url = "http://www.strava.com/oauth/authorize"
  // https://www.strava.com/api/v3/athlete/activities

  return (
    <form action={getData}>
      <input
        className=" px-8 bg-pink-800"
        defaultValue="gwatson@gmail.com"
        name="userName"
      />
      <input type="hidden" name="clientID" value={stravaClientID} />

      <button className="rounded-md px-8 bg-blue-500" type="submit">
        Find Strava Data
      </button>
    </form>
  );
}
