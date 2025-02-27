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

  return (
    <form className="py-12" action={getData}>
      <div className="container flex flex-col items-center justify-center mx-auto py-8">
        Enter your Strava ID here:{" "}
        <input
          className=" px-8 bg-gray-800 text-white"
          defaultValue="gwatson@gmail.com"
          name="userName"
        />
        <input type="hidden" name="clientID" value={stravaClientID} />
        <br />
        <button
          className="m-4 justify-center rounded-md p-2 bg-blue-500"
          type="submit"
        >
          Click to Find Strava Data
        </button>
      </div>
    </form>
  );
}
