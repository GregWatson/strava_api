import GetNewTokens from "@/components/auth/getNewTokens";

// This MUST be a server page otherwise we cannot access process.env vars.

export default function SwapCode({
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

  return (
    <div>
      <h1>Swap Code</h1>
      <h1>Strava URL is {url}</h1>
      <h1>Code is {code}</h1>
      <GetNewTokens
        url={url}
        code={code}
        stravaClientID={stravaClientID}
        stravaClientSecret={stravaClientSecret}
      />
    </div>
  );
}
