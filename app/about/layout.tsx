import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default AboutLayout;
