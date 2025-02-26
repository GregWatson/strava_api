"use client";

export default async function GetNewTokens({
  url,
  code,
  stravaClientID,
  stravaClientSecret,
}: {
  url: string;
  code: string;
  stravaClientID: string;
  stravaClientSecret: string;
}) {
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
  const data = await response.json();
  const expires_at = data.expires_at;
  const expires_in = data.expires_in;
  const refresh_token = data.refresh_token;
  const athlete = data.athlete;

  return (
    <div>
      expires_at = {expires_at}
      <br />
      expires_in = {expires_in}
      <br />
      refresh_token = {refresh_token}
      <br />
      athlete = {athlete}
    </div>
  );
}
