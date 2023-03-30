import styles from "@/styles/About.module.scss";
import AboutMeContent from "@/components/about/AboutMeContent";
import AboutMeMenu from "@/components/about/AboutMeMenu";
import { useState } from "react";
import Info from "@/types/Info";
import Content from "@/types/Content";

const About = () => {
  const [currentInfo, setCurrentInfo] = useState<Info>("professional-info");
  const [currentContent, setCurrentContent] = useState<Content>();

  return (
    <div className={styles.container}>
      <AboutMeMenu
        currentInfo={currentInfo}
        setCurrentInfo={setCurrentInfo}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />

      <AboutMeContent currentContent={currentContent} />
    </div>
  );
};

export default About;
