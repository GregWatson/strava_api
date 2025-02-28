"use client";

// Note: this assumes that the image "btn_strava_connect_with_orange.png"
// is in the public directory. i.e. path is public/btn_strava_connect_with_orange.png

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
    <form className="py-6" action={getData}>
      <br />
      <div className="container flex flex-col items-center justify-center mx-auto py-8">
        Enter your Strava ID here:{" "}
        <input
          className=" px-8 bg-gray-800 text-white"
          defaultValue="gwatson@gmail.com"
          name="userName"
        />
        <input type="hidden" name="clientID" value={stravaClientID} />
        <br />
        <button type="submit">
          <img src={"/btn_strava_connect_with_orange.png"} alt={"Use Strava"} />
        </button>
      </div>
    </form>
  );
}
