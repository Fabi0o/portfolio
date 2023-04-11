import styles from "@/styles/Projects.module.scss";
import DropdownInfo from "@/components/common/DropdownInfo";
import { useState } from "react";
import ProjectsArr from "@/types/ProjectsArr";

const Projects = () => {
  const [currentProjects, setCurrentProjects] = useState(new ProjectsArr());
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <DropdownInfo
          currentInfo="projects"
          currentProjects={currentProjects}
          setCurrentProjects={setCurrentProjects}
        />
      </div>

      <div className={styles.projects}></div>
    </div>
  );
};

export default Projects;
