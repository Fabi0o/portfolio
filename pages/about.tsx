import styles from "@/styles/About.module.scss";
import AboutMeContent from "@/components/AboutMeContent";
import AboutMeMenu from "@/components/AboutMeMenu";
import { useState } from "react";
import { Info } from "@/types/Info";

const About = () => {
  const [currentInfo, setCurrentInfo] = useState<Info>("professionalInfo");
  return (
    <div className={styles.container}>
      <AboutMeMenu currentInfo={currentInfo} setCurrentInfo={setCurrentInfo} />
      <AboutMeContent />
    </div>
  );
};

export default About;
