"use client";
import { getClientCookiePairs } from "./clientCookies";

export function ShowCookiePairs() {
  const cookiePairs = getClientCookiePairs();
  const pairs = cookiePairs.map((pair) => <li key={pair}>{pair}</li>);
  return <ul>{pairs}</ul>;
}
