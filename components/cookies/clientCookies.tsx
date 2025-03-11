"use client";
// import { useCookies } from "react-cookie";
// import Cookies from "js-cookie";
const Cookies = require("js-cookie");

// import { getCookiePairs } from "./serverCookies";

// export default async function ShowCookies() {
//   const cookiePairs = await getCookiePairs();

//   const pairs = cookiePairs.map((pair) => <li key={pair}>{pair}</li>);

//   return <ul>{pairs}</ul>;
// }

const authCookieNames = [
  "scope",
  "expires_in",
  "expires_at",
  "refresh_token",
  "access_token",
];

export function getClientCookie(name: string) {
  if (authCookieNames.includes(name)) {
    const val = Cookies.get(name);
    console.log("getClientCookie for %s returns %s", name, val);
    return val;
  } else {
    return null;
  }
}

export function getClientCookiePairs() {
  let pairs: string[] = [];
  authCookieNames.forEach((name) => {
    const val = Cookies.get(name);
    const saneVal =
      name == "access_token" || name == "refresh_token"
        ? name.length > 10
          ? "Valid token"
          : "Invalid token"
        : val;
    pairs.push(name + " : " + saneVal);
  });
  return pairs;
}

export function saveClientCookies(
  scope: string,
  expires_at: number,
  expires_in: number,
  refresh_token: string,
  access_token: string
) {
  if (
    scope !== "" &&
    expires_at > 0 &&
    expires_in > 0 &&
    refresh_token !== "" &&
    access_token !== ""
  ) {
    Cookies.set("expires_at", expires_at.toString());
    Cookies.set("expires_in", expires_in.toString());
    Cookies.set("scope", scope);
    Cookies.set("refresh_token", refresh_token);
    Cookies.set("access_token", access_token);
    return true;
  }
  return false;
}
