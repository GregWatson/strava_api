"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ExchangeToken() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const scope = searchParams.get("scope");
  const router = useRouter();
  const request = `/auth/redirect?code=${code}`;

  return (
    <div>
      <h1>ExchangeToken: Strava responded - click to complete exchange</h1>
      request is {request}
      <br />
      <button
        className="rounded-md px-8 bg-blue-500"
        onClick={() => {
          try {
            router.push(`${request}`);
          } catch (error) {
            console.error("Error in router.push", error);
          }
        }}
      >
        Complete Exchange
      </button>
    </div>
  );
}
//statecode76a5672ff5034e5bf7ab3a626a8e3d5d31840722scoperead
// https://www.strava.com/oauth/token \
// 	-F client_id=YOURCLIENTID \
// 	-F client_secret=YOURCLIENTSECRET \
// 	-F code=AUTHORIZATIONCODE \
// 	-F grant_type=authorization_code
