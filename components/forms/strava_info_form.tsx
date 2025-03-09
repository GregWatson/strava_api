"use client";

// Note: this assumes that the image "btn_strava_connect_with_orange.png"
// is in the public directory. i.e. path is public/btn_strava_connect_with_orange.png

import { useRouter } from "next/navigation";
import { getStravaClientID } from "@/actions/server_actions";

export default function StravaInfoForm() {
  const router = useRouter();

  function getAuthorization() {
    getStravaClientID().then((value) => {
      if (value) {
        const url = "http://www.strava.com/oauth/authorize";
        const header =
          "?client_id=" +
          value +
          "&response_type=code&redirect_uri=http://localhost:3000/auth" +
          "&approval_prompt=force&scope=profile:read_all";

        const request = url + header;
        router.push(`${request}`);
      } else {
        alert("Strava Client ID for this app is not known.");
      }
    });
  }

  return (
    <button
      className="border-orange-600 hover:border-orange-300 border-2 rounded-lg"
      onClick={getAuthorization}
    >
      <img src={"/btn_strava_connect_with_orange.png"} alt={"Use Strava"} />
    </button>
  );
}
