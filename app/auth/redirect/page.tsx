import GetNewTokens from "@/components/auth/getNewTokens";

// This MUST be a server page otherwise we cannot access process.env vars.

export default function Redirect({
  // params: { id },
  searchParams,
}: {
  // params: { id: string };
  searchParams: {
    code: string;
    stravaURL: string;
  };
}) {
  const stravaClientID = process.env.STRAVA_CLIENT_ID as string;
  const stravaClientSecret = process.env.STRAVA_CLIENT_SECRET as string;
  const url = searchParams.stravaURL;
  const code = searchParams.code;
  console.log("Redirect: code is ", code, " clientID is ", stravaClientID);

  return (
    <div>
      <h1>Redirecting to Strava to get new user access tokens</h1>
      url={url}
      <br />
      code={code}
      <br />
      stravaClientID={stravaClientID}
      <br />
      stravaClientSecret={stravaClientSecret}
    </div>
  );
}
