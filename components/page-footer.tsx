import React from "react";

function PageFooter({}: {}) {
  return (
    <div className="w-full grid grid-cols-3 gap-6 bg-sky-900 pt-4">
      <div className="p-4">
        <img
          src={"/api_logo_cptblWith_strava_stack_orange.png"}
          alt={"Compatible with Strava"}
        />
      </div>
      <div className="px-48"> </div>
      <div className="px-48"> </div>
    </div>
  );
}
export default PageFooter;
