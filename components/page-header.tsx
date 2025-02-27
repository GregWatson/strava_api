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
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-[#C15A1A] flex gap-4 items-center">
        {title}
      </h1>
      <h2 className="text-2xl font-semibold text-center text-[#c15a1a]">
        {subtitle}
      </h2>
      {children}
    </div>
  );
}
export default PageHeader;
