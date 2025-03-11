import { cookies } from "next/headers";

const authCookieNames = [
  "scope",
  "expires_in",
  "expires_at",
  "refresh_token",
  "access_token",
];

// // This is a Server Action. Must be called by client component.
// export async function getCookiePairs() {
//   const cookieStore = await cookies();
//   let cookiePairs: string[] = [];

//   authCookieNames.forEach((cookieName) => {
//     const s =
//       cookieName + " : " + cookieStore.has(cookieName)
//         ? cookieStore.get(cookieName)?.value
//         : "Not defined";
//     cookiePairs.push(s as string);
//   });

//   return cookiePairs;
// }

// This is a Server Action. Must be called by client component.
// Server Components are NOT allowed to set cookies.
export async function saveServerCookies(
  scope: string,
  expires_at: number,
  expires_in: number,
  refresh_token: string,
  access_token: string
) {
  const cookieStore = await cookies();
  let resultMessage = "Cookies values not valid - not stored.";
  if (
    scope !== "" &&
    expires_at > 0 &&
    expires_in > 0 &&
    refresh_token !== "" &&
    access_token !== ""
  ) {
    cookieStore.set({
      name: "expires_at",
      value: expires_at.toString(),
      httpOnly: true,
      path: "/",
    });
    cookieStore.set({
      name: "expires_in",
      value: expires_in.toString(),
      httpOnly: true,
      path: "/",
    });
    cookieStore.set({ name: "scope", value: scope, httpOnly: true, path: "/" });
    cookieStore.set({
      name: "refresh_token",
      value: refresh_token,
      httpOnly: true,
      path: "/",
    });
    cookieStore.set({
      name: "access_token",
      value: access_token,
      httpOnly: true,
      path: "/",
    });

    resultMessage = "Saved cookies.";
  }
  return resultMessage;
}
