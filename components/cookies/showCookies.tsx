"use client";

import { useCookies } from "react-cookie";

export default function ShowCookies() {
  const [cookies] = useCookies();
  const allCookies = cookies;

  function CookiePairs() {
    let cookieNames = [];
    for (const cookieName in allCookies) {
      if (allCookies.hasOwnProperty(cookieName)) {
        cookieNames.push(cookieName);
      }
    }
    const pairs = cookieNames.map((cookieName) => (
      <li>
        {cookieName}:{allCookies[cookieName]}
      </li>
    ));
    if (pairs.length > 0) {
      return <ul>{pairs}</ul>;
    } else {
      return <div className="text-xl">No cookies are defined</div>;
    }
  }

  return CookiePairs();
}
