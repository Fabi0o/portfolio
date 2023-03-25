import React from "react";

type Info = "professionalInfo" | "personalInfo" | "hobbyInfo";

interface InfoProps {
  currentInfo: Info;
  setCurrentInfo: React.Dispatch<React.SetStateAction<Info>>;
}

export type { Info, InfoProps };
