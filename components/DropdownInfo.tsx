import styles from "@/styles/DropdownInfo.module.scss";

const DropdownInfo = () => {
  const displayBody = () => {
    const header = document.getElementById("personalHeader");

    header?.classList.toggle(`${styles.active}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header} id="personalHeader" onClick={displayBody}>
        <i className="ri-play-fill"></i>personal-info
      </div>
      <div className={styles.body}></div>
    </div>
  );
};

export default DropdownInfo;
