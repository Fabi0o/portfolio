import styles from "@/styles/Projects.module.scss";
import DropdownInfo from "@/components/common/DropdownInfo";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <DropdownInfo currentInfo="projects" />
      </div>

      <div className={styles.projects}></div>
    </div>
  );
};

export default Projects;
