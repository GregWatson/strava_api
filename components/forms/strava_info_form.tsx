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

  function getData(formData: any) {
    const url = "http://www.strava.com/oauth/authorize";
    const header =
      "?client_id=" +
      stravaClientID +
      "&response_type=code&redirect_uri=http://localhost:3000/auth" +
      "&approval_prompt=force&scope=profile:read_all";

    const request = url + header;
    router.push(`${request}`);
  }

  return (
    <form
      className="container flex flex-col items-center justify-center mx-auto py-8"
      action={getData}
    >
      <input type="hidden" name="clientID" value={stravaClientID} />
      <button type="submit">
        <img src={"/btn_strava_connect_with_orange.png"} alt={"Use Strava"} />
      </button>
    </form>
  );
}
