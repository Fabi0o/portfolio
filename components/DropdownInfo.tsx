import styles from "@/styles/DropdownInfo.module.scss";

const DropdownInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <i className="ri-play-fill"></i>personal-info
      </div>
      <div className={styles.body}></div>
    </div>
  );
};

export default DropdownInfo;
