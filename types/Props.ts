import Content from "./Content";
import Info from "./Info";
import Projects from "./ProjectsArr";

interface Props {
  currentInfo: Info;
  setCurrentInfo?: React.Dispatch<React.SetStateAction<Info>>;
  currentContent?: Content;
  setCurrentContent?: React.Dispatch<React.SetStateAction<Content>>;
  currentProjects?: Projects;
  setCurrentProjects?: React.Dispatch<React.SetStateAction<Projects>>;
}

interface ContentProps {
  currentContent: Content;
  setCurrentContent: React.Dispatch<React.SetStateAction<Content>>;
}

export type { Props, ContentProps };
