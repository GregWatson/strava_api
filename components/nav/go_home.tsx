"use client";
import { useRouter } from "next/navigation";
// import { saveServerCookies } from "../cookies/serverCookies";
import { saveClientCookies } from "../cookies/clientCookies";

export default function GoHome({
  scope,
  expires_at,
  expires_in,
  refresh_token,
  access_token,
}: {
  scope: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  access_token: string;
}) {
  const router = useRouter();
  const authOK = saveClientCookies(
    scope,
    expires_at,
    expires_in,
    refresh_token,
    access_token
  );

  const resultMessage = authOK ? "Saved cookies" : "Failed: Cookies not saved";

  return (
    <button
      className="border-orange-600 hover:border-orange-300 border-2 rounded-lg"
      onClick={() => router.push(`/?isAuth=${authOK}`)}
    >
      {resultMessage} - click to return to Home page
    </button>
  );
}
