import React from "react";

function PageHeader({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full grid grid-cols-6 auto-cols-min gap-6 bg-sky-900 py-4">
      <h2 className="text-2xl font-semibold text-center text-[#c15a1a]">
        {subtitle}
      </h2>
      <h1 className="col-span-4 text-3xl md:text-5xl font-bold text-center text-[#C15A1A] gap-4 items-center">
        {title}
      </h1>
      <div className="col-start-6">{children}</div>
    </div>
  );
}
export default PageHeader;
