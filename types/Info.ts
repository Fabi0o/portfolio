import React from "react";

type Info = "professional-info" | "personal-info" | "hobbies" | "contacts";

interface InfoProps {
  currentInfo: Info;
  setCurrentInfo?: React.Dispatch<React.SetStateAction<Info>>;
}

export type { Info, InfoProps };
