import React from "react";

function PageFooter({}: {}) {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-sky-900 py-4">
      <img
        src={"/api_logo_cptblWith_strava_horiz_orange.png"}
        alt={"Compatible with Strava"}
      />
    </div>
  );
}
export default PageFooter;
