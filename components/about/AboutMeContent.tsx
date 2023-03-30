import styles from "@/styles/AboutMeContent.module.scss";
import { ContentProps } from "@/types/Props";
import TextContent from "./TextContent";

const AboutMeContent: React.FC<ContentProps> = ({ currentContent }) => {
  return (
    <div className={styles.container}>
      <TextContent currentContent={currentContent} />
      <div className={styles.code_snippet}></div>
    </div>
  );
};

export default AboutMeContent;
