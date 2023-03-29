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
            <a href="mailto:marcin.fabicki@yahoo.com">
              marcin.fabicki@yahoo.com
            </a>
          </div>
          <div>
            <i className="ri-phone-fill"></i>
            <a href="tel:+48693737612">+48693737612</a>
          </div>
        </div>
      )}

      {currentInfo == "professional-info" && (
        <div className={styles.body} ref={dropdownBody}>
          <div>
            <i className="ri-arrow-right-s-line"></i>
            <i className={`ri-folder-3-fill ${styles.folder}`}></i>
            <div>work-history</div>
          </div>
          <div>
            <i className="ri-arrow-right-s-line"></i>
            <i className={`ri-folder-3-fill ${styles.folder}`}></i>
            <div>skills</div>
          </div>
        </div>
      )}

      {currentInfo == "hobbies" && (
        <div className={styles.body} ref={dropdownBody}>
          <div>
            <i className="ri-arrow-right-s-line"></i>
            <i className={`ri-folder-3-fill ${styles.folder}`}></i>
            <div>interests</div>
          </div>
        </div>
      )}

      {currentInfo == "personal-info" && (
        <div className={styles.body} ref={dropdownBody}>
          <div>
            <i className="ri-arrow-right-s-line"></i>
            <i className={`ri-folder-3-fill ${styles.folder}`}></i>
            <div>bio</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownInfo;
