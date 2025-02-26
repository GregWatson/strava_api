// "use client";
// import { useRouter } from "next/navigation";

export default function AthleteHome({
  expires_at,
  expires_in,
  refresh_token,
  access_token,
  athlete,
}: {
  expires_at: number;
  expires_in: number; // seconds
  refresh_token: string;
  access_token: string;
  athlete: any;
}) {
  return (
    <div>
      <h1> Athlete Home </h1>
      <p>
        Athlete is {athlete.firstname} {athlete.lastname} with ID {athlete.id}
      </p>
      <p> token expires_at is {expires_at} </p>
      <p> token expires_in is {expires_in} </p>
      <p> refresh_token is {refresh_token} </p>
      <p> access_token is {access_token} </p>
    </div>
  );
}
