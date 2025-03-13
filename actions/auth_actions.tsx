"use client";
import { getClientCookie } from "@/components/cookies/clientCookies";

// TODO: needs cleanup to renew access_token if necessary
export function getCurrentAccessToken() {
  const aT = getClientCookie("access_token");
  // Add code to update access token if needed.
  return aT;
}
