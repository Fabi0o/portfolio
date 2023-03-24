import styles from "@/styles/About.module.scss";
import AboutMeContent from "@/components/AboutMeContent";
import AboutMeMenu from "@/components/AboutMeMenu";

const About = () => {
  return (
    <div className={styles.container}>
      <AboutMeMenu />
      <AboutMeContent />
    </div>
  );
};

export default About;
