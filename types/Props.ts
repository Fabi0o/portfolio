import Content from "./Content";
import Info from "./Info";

interface Props {
  currentInfo: Info;
  setCurrentInfo?: React.Dispatch<React.SetStateAction<Info>>;
  currentContent?: Content;
  setCurrentContent?: React.Dispatch<React.SetStateAction<Content>>;
}

export default Props;