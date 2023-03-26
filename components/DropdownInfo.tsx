import styles from "@/styles/DropdownInfo.module.scss";
import { useRef } from "react";
import { InfoProps } from "@/types/Info";

const DropdownInfo: React.FC<InfoProps> = ({ currentInfo }) => {
  const dropdownHeader = useRef<HTMLDivElement>(null);

  const displayBody = () => {
    dropdownHeader.current!.classList.toggle(`${styles.active}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header} ref={dropdownHeader} onClick={displayBody}>
        <i className="ri-play-fill"></i>
        {currentInfo}
      </div>
      <div className={styles.body}></div>
    </div>
  );
};

export default DropdownInfo;
