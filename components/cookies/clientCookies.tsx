"use client";
const Cookies = require("js-cookie");

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
    console.log("getClientCookie for %s returns %s", name, val ? val : "null");
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
      name === "access_token" || name === "refresh_token"
        ? val
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
): boolean {
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

export function deleteClientCookies() {
  Cookies.remove("expires_at");
  Cookies.remove("expires_in");
  Cookies.remove("scope");
  Cookies.remove("refresh_token");
  Cookies.remove("access_token");
}
