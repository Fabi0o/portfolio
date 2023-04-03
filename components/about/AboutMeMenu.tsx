import styles from "@/styles/AboutMeMenu.module.scss";
import Info from "@/types/Info";
import { Props } from "@/types/Props";
import { useEffect } from "react";
import DropdownInfo from "../common/DropdownInfo";

const AboutMeMenu: React.FC<Props> = ({
  currentInfo,
  setCurrentInfo,
  currentContent,
  setCurrentContent,
}) => {
  useEffect(() => {
    const element = document.getElementById(currentInfo);

    element?.classList.add(styles.current);
  }, [currentInfo]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const current = document.getElementById(currentInfo);

    current?.classList.remove(styles.current);
    setCurrentInfo!(target.id as Info);
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <i
          onClick={handleClick}
          id="professional-info"
          className="ri-terminal-box-fill"
        ></i>

        <i
          onClick={handleClick}
          id="personal-info"
          className="ri-user-4-fill"
        ></i>

        <i onClick={handleClick} id="hobbies" className="ri-gamepad-fill"></i>
      </div>

      <div className={styles.content}>
        <DropdownInfo
          currentInfo={currentInfo}
          currentContent={currentContent}
          setCurrentContent={setCurrentContent}
        />
        <DropdownInfo currentInfo={"contacts"} />
      </div>
    </div>
  );
};

export default AboutMeMenu;
