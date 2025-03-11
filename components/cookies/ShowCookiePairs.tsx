"use client";
import { getClientCookiePairs } from "./clientCookies";

// Server Component - this is allowed to read cookies
// export function GetServerCookies() {
//   const cookiePairs = await getCookiePairs();
//   // const cookiePairs = ["a:b", "c:d"];
//   console.log("cookiePairs is ", cookiePairs);
//   const pairs = cookiePairs.map((pair) => <li key={pair}>{pair}</li>);
//   return <ul>{pairs}</ul>;
// }

export function ShowCookiePairs() {
  const cookiePairs = getClientCookiePairs();
  const pairs = cookiePairs.map((pair) => <li key={pair}>{pair}</li>);
  return <ul>{pairs}</ul>;
}
