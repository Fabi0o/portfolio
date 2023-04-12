import styles from "@/styles/DropdownInfo.module.scss";
import React, { useEffect, useRef } from "react";
import { Props } from "@/types/Props";
import Content from "@/types/Content";

const DropdownInfo: React.FC<Props> = ({
  currentInfo,
  currentContent,
  setCurrentContent,
  currentProjects,
  setCurrentProjects,
}) => {
  const dropdownHeader = useRef<HTMLDivElement>(null);
  const dropdownBody = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dropdownHeader.current!.classList.remove(`${styles.active}`);

    if (currentInfo != "contacts" && currentInfo != "projects")
      setCurrentContent!(undefined);
  }, [currentInfo]);

  useEffect(() => {
    if (!currentContent && currentInfo != "projects")
      Array.from(dropdownBody.current!.childNodes).forEach((div) => {
        const element = div as HTMLElement;
        element.classList.remove(`${styles.active}`);
      });
  }, [currentContent]);

  const displayBody = () => {
    dropdownHeader.current!.classList.toggle(`${styles.active}`);
    dropdownBody.current!.classList.toggle(`${styles.visible}`);
  };

  const handleClickAbout = (content: Content) => {
    if (content != currentContent && currentContent) {
      document
        .getElementById(currentContent!)!
        .classList.remove(`${styles.active}`);
    }

    setCurrentContent!(content);
    document.getElementById(content!)!.classList.add(`${styles.active}`);
  };

  const handleClickProjects = (tech: "React" | "CSS" | "HTML") => {
    setCurrentProjects!({
      ...currentProjects!,
      [tech]: !currentProjects![tech],
    });
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
          <div
            id="work-history"
            onClick={() => handleClickAbout("work-history")}
          >
            <i className="ri-arrow-right-s-line"></i>
            <i className={`ri-folder-3-fill ${styles.folder}`}></i>
            <div>work-history</div>
          </div>
          <div id="skills" onClick={() => handleClickAbout("skills")}>
            <i className="ri-arrow-right-s-line"></i>
            <i className={`ri-folder-3-fill ${styles.folder}`}></i>
            <div>skills</div>
          </div>
        </div>
      )}

      {currentInfo == "hobbies" && (
        <div className={styles.body} ref={dropdownBody}>
          <div id="interests" onClick={() => handleClickAbout("interests")}>
            <i className="ri-arrow-right-s-line"></i>
            <i className={`ri-folder-3-fill ${styles.folder}`}></i>
            <div>interests</div>
          </div>
        </div>
      )}

      {currentInfo == "personal-info" && (
        <div className={styles.body} ref={dropdownBody}>
          <div id="bio" onClick={() => handleClickAbout("bio")}>
            <i className="ri-arrow-right-s-line"></i>
            <i className={`ri-folder-3-fill ${styles.folder}`}></i>
            <div>bio</div>
          </div>
        </div>
      )}

      {currentInfo == "projects" && (
        <div className={`${styles.body} ${styles.projects}`} ref={dropdownBody}>
          <div
            className={`${styles.project} ${
              currentProjects?.React ? styles.active : ""
            }`}
            id="React"
            onClick={() => handleClickProjects("React")}
          >
            <i className="ri-reactjs-fill"></i>
            <div>React</div>
          </div>
          <div
            className={`${styles.project} ${
              currentProjects?.HTML ? styles.active : ""
            }`}
            onClick={() => handleClickProjects("HTML")}
            id="HTML"
          >
            <i className="ri-html5-fill"></i>
            <div>HTML</div>
          </div>
          <div
            className={`${styles.project} ${
              currentProjects?.CSS ? styles.active : ""
            }`}
            onClick={() => handleClickProjects("CSS")}
            id="CSS"
          >
            <i className="ri-css3-fill"></i>
            <div>CSS</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownInfo;
