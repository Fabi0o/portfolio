import styles from "@/styles/AboutMeMenu.module.scss";

const AboutMeMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <i className="ri-terminal-box-fill"></i>
        <i className="ri-user-4-fill"></i>
        <i className="ri-gamepad-fill"></i>{" "}
      </div>
      <div className={styles.topContent}></div>
      <div className={styles.bottomContent}></div>
    </div>
  );
};

export default AboutMeMenu;
