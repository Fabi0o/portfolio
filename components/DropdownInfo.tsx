import styles from "@/styles/DropdownInfo.module.scss";
import { useEffect, useRef } from "react";
import { InfoProps } from "@/types/Info";

const DropdownInfo: React.FC<InfoProps> = ({ currentInfo }) => {
  const dropdownHeader = useRef<HTMLDivElement>(null);
  const dropdownBody = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dropdownHeader.current!.classList.remove(`${styles.active}`);
  }, [currentInfo]);

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
      {currentInfo == "contacts" && (
        <div className={styles.body} ref={dropdownBody}>
          <div>
            <i className="ri-mail-fill"></i>
            marcin.fabicki@yahoo.com
          </div>
          <div>
            <i className="ri-phone-fill"></i>
            +48693737612
          </div>
        </div>
      )}

      {currentInfo == "professional-info" && (
        <div className={styles.body} ref={dropdownBody}>
          <div>
            <i className="ri-arrow-right-s-line"></i>
            work-history
          </div>
          <div>
            <i className="ri-arrow-right-s-line"></i>
            skills
          </div>
        </div>
      )}

      {currentInfo == "hobbies" && (
        <div className={styles.body} ref={dropdownBody}>
          <div>
            <i className="ri-arrow-right-s-line"></i>
            interests
          </div>
        </div>
      )}

      {currentInfo == "personal-info" && (
        <div className={styles.body} ref={dropdownBody}>
          <div>
            <i className="ri-arrow-right-s-line"></i>
            bio
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownInfo;
