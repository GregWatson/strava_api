"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default async function AuthPage() {
  const searchParams = useSearchParams();
  const userName = searchParams.get("user");
  const stravaID = searchParams.get("clientID");
  const router = useRouter();

  const url = "http://www.strava.com/oauth/authorize";
  const header =
    "?client_id=" +
    stravaID +
    "&response_type=code&redirect_uri=http://localhost:3000/auth/get_access" +
    "&approval_prompt=force&scope=profile:read_all";

  const request = url + header;
  router.push(`${request}`);

  return <div>Connecting to Strava ....</div>;
}
