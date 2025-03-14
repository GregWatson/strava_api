"use client";
import {
  getClientCookie,
  getClientCookiePairs,
  deleteClientCookies,
} from "./clientCookies";
import { useState } from "react";

export function ShowCookiePairs() {
  const [state, setState] = useState(false);
  const cookiePairs = getClientCookiePairs();
  const pairs = cookiePairs.map((pair) => <li key={pair}>{pair}</li>);
  const access_token = getClientCookie("access_token");

  function handleDeleteCookies() {
    deleteClientCookies();
    setState(!state); // force parent redraw
  }

  return (
    <div className="flex-row bg-sky-900">
      <ul>{pairs}</ul>
      {access_token && (
        <button
          className="border-orange-600 hover:border-orange-300 border-2 rounded-lg"
          onClick={handleDeleteCookies}
        >
          Delete cookies
        </button>
      )}
    </div>
  );
}
