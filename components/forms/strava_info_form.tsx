"use client";

// Note: this assumes that the image "btn_strava_connect_with_orange.png"
// is in the public directory. i.e. path is public/btn_strava_connect_with_orange.png

import { useRouter } from "next/navigation";
import { getStravaClientID } from "@/actions/server_actions";
import { getCurrentAccessToken } from "@/actions/auth_actions";
import { useState, useEffect } from "react";

export default function StravaInfoForm() {
  const router = useRouter();
  const access_token = getCurrentAccessToken();
  const [state, setState] = useState(
    access_token !== null ? "authorized" : "waitClick"
  );

  useEffect(() => {
    if (!access_token) {
      setState("waitClick");
    }
  }, []);

  // This function asks Strava for a temporary key based on the app ID.
  // Strava will then redirect to the redirect_uri specified.
  function getAuthorization() {
    getStravaClientID()
      .then((value) => {
        if (value) {
          const url = "http://www.strava.com/oauth/authorize";
          const redirectURI = "http://localhost:3000/auth";
          const header =
            "?client_id=" +
            value +
            "&response_type=code&redirect_uri=" +
            redirectURI +
            "&approval_prompt=force&scope=profile:read_all";

          const request = url + header;
          router.push(`${request}`);
        } else {
          alert("Strava Client ID for this app is not known.");
        }
      })
      .catch((err) => {
        console.log("StravaInfoForm: call to Strava failed.");
        setState("error");
      });
  }

  function handleGoToDashboard() {
    const access_token = getCurrentAccessToken();
    router.push(`/dashboard?access_token=${access_token}`);
  }

  return (
    <div>
      {state == "waitClick" && (
        <button
          className="border-orange-600 hover:border-orange-300 border-2 rounded-lg"
          onClick={getAuthorization}
        >
          <img
            src={"/btn_strava_connect_with_orange.png"}
            alt={"Click to authorize via Strava"}
          />
        </button>
      )}
      {state == "authorized" && (
        <button
          className="border-orange-600 hover:border-orange-300 border-2 rounded-lg"
          onClick={handleGoToDashboard}
        >
          Already authorized - click to proceed to dashboard.
        </button>
      )}
      {state == "error" && (
        <button
          className="border-orange-600 hover:border-orange-300 border-2 rounded-lg"
          onClick={() => {
            router.push("/");
          }}
        >
          Strava authorization failed.
        </button>
      )}
    </div>
  );
}
