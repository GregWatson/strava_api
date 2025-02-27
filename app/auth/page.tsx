"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/page-header";

export default function AuthPage() {
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

  return (
    <div>
      <PageHeader title="Connect to Strava" />
      <h1>username is {userName}</h1>
      <h1>Strava ID is {stravaID}</h1>
      Strava request is {request}
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
        Connect to Strava
      </button>
    </div>
  );
}
