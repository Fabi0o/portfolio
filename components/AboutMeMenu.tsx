import styles from "@/styles/AboutMeMenu.module.scss";
import { Info, InfoProps } from "@/types/Info";
import { useEffect } from "react";
import DropdownInfo from "./DropdownInfo";

const AboutMeMenu: React.FC<InfoProps> = ({ currentInfo, setCurrentInfo }) => {
  useEffect(() => {
    const element = document.getElementById(currentInfo);

    element?.classList.add(styles.current);
  }, [currentInfo]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const current = document.getElementById(currentInfo);

    current?.classList.remove(styles.current);
    setCurrentInfo(target.id as Info);
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <i
          onClick={handleClick}
          id="professionalInfo"
          className="ri-terminal-box-fill"
        ></i>

        <i
          onClick={handleClick}
          id="personalInfo"
          className="ri-user-4-fill"
        ></i>

        <i onClick={handleClick} id="hobbyInfo" className="ri-gamepad-fill"></i>
      </div>

      <div className={styles.content}>
        <DropdownInfo />
        <DropdownInfo />
      </div>
    </div>
  );
};

export default AboutMeMenu;
