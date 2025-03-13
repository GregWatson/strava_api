"server only";
// Must be server page to get process.env access
import PageHeader from "@/components/page-header";
import PageFooter from "@/components/page-footer";
import GoHome from "@/components/nav/go_home";
// import { useState } from "react";

// Strava will process the initial request to http://www.strava.com/oauth/authorize
// and will then redirect back to this page, passing the temporary code and the
// scope. We will then use the code to make another Strava request to
// get the access token and refresh token as well as expiry information.
// Once we have the tokens we save them as SERVER-SIDE cookies. Client
// never sees the private keys on the server.

export default async function Auth(props: {
  // params: { id: string };
  searchParams: Promise<{
    code: string;
    scope: string;
  }>;
}) {
  const stravaClientID = process.env.STRAVA_CLIENT_ID as string;
  const stravaClientSecret = process.env.STRAVA_CLIENT_SECRET as string;
  const searchParams = await props.searchParams;
  const code = searchParams.code;
  const scope = searchParams.scope ?? "Scope unavailable";

  const url = "https://www.strava.com/api/v3/oauth/token";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: stravaClientID,
      client_secret: stravaClientSecret,
      code: code,
      grant_type: "authorization_code",
    }),
  });

  // Note: the expiry info and refresh token should be stored and
  // used to determine when to refresh the access token. See Strava API.

  const data = await response.json();
  const expires_at = data.expires_at ?? 0;
  const expires_in = data.expires_in ?? 0;
  const refresh_token = data.refresh_token ?? null;
  const access_token = data.access_token ?? null;
  const exp_at_date = new Date(expires_at * 1000);

  return (
    <div className=" bg-sky-900 container flex flex-col items-center justify-center mx-auto">
      <PageHeader
        title="Strava authorization response"
        subtitle={access_token ? "Successful" : "Authorization failed"}
      />
      {access_token && (
        <div>
          Access token acquired:
          <p>Expires_at: {exp_at_date.toLocaleString()}</p>
          <p>Expires_in: {expires_in / 3600} hours</p>
          <p>Scope: {scope}</p>
        </div>
      )}
      <GoHome
        scope={scope}
        expires_at={expires_at}
        expires_in={expires_in}
        refresh_token={refresh_token}
        access_token={access_token}
      />
      <PageFooter />
    </div>
  );
}
