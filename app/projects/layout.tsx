import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ProjectsLayout;
