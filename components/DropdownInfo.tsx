import styles from "@/styles/DropdownInfo.module.scss";
import { useRef } from "react";
import { InfoProps } from "@/types/Info";

const DropdownInfo: React.FC<InfoProps> = ({ currentInfo }) => {
  const dropdownHeader = useRef<HTMLDivElement>(null);
  const dropdownBody = useRef<HTMLDivElement>(null);

  const displayBody = () => {
    dropdownHeader.current!.classList.toggle(`${styles.active}`);
    dropdownBody.current!.classList.toggle(`${styles.visible}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header} ref={dropdownHeader} onClick={displayBody}>
        <i className="ri-play-fill"></i>
        {currentInfo}
      </div>
      <div className={styles.body} ref={dropdownBody}>
        <div>
          <i className="ri-arrow-right-s-line"></i>
          folder 1
        </div>
        <div>
          <i className="ri-arrow-right-s-line"></i>
          folder 1
        </div>
        <div>
          <i className="ri-arrow-right-s-line"></i>
          folder 1
        </div>
      </div>
    </div>
  );
};

export default DropdownInfo;
