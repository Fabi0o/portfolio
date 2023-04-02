import { ContentProps } from "@/types/Props";
import styles from "@/styles/TextContent.module.scss";
import WorkHistory from "./WorkHistory";
import Skills from "./Skills";
import Bio from "./Bio";
import Interests from "./Interests";

const TextContent: React.FC<ContentProps> = ({
  currentContent,
  setCurrentContent,
}) => {
  return currentContent ? (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          {currentContent}
          <i
            className="ri-close-line"
            onClick={() => setCurrentContent(undefined)}
          ></i>
        </div>
      </div>
      <div className={styles.body}>
        {currentContent == "work-history" && <WorkHistory />}
        {currentContent == "skills" && <Skills />}
        {currentContent == "bio" && <Bio />}
        {currentContent == "interests" && <Interests />}
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default TextContent;
