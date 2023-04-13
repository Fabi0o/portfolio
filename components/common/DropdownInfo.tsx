import styles from "@/styles/DropdownInfo.module.scss";
import React, { useState } from "react";
import { Props } from "@/types/Props";
import Content from "@/types/Content";

const DropdownInfo: React.FC<Props> = ({
  currentInfo,
  currentContent,
  setCurrentContent,
  currentProjects,
  setCurrentProjects,
}) => {
  const [isBodyDisplayed, setIsBodyDisplayed] = useState(true);

  const displayBody = () => {
    setIsBodyDisplayed(!isBodyDisplayed);
  };

  const handleClickAbout = (content: Content) => {
    setCurrentContent!(content);
  };

  const handleClickProjects = (tech: "React" | "CSS" | "HTML") => {
    setCurrentProjects!({
      ...currentProjects!,
      [tech]: !currentProjects![tech],
    });
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.header} ${isBodyDisplayed ? styles.active : ""}`}
        onClick={displayBody}
      >
        <i className="ri-play-fill"></i>
        {currentInfo}
      </div>

      {currentInfo == "contacts" && (
        <div
          className={`${styles.body} ${isBodyDisplayed ? styles.visible : ""}`}
        >
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
        <div
          className={`${styles.body} ${isBodyDisplayed ? styles.visible : ""}`}
        >
          <div
            id="work-history"
            className={currentContent == "work-history" ? styles.active : ""}
            onClick={() => handleClickAbout("work-history")}
          >
            <i className="ri-arrow-right-s-line"></i>
            <i className={`ri-folder-3-fill ${styles.folder}`}></i>
            <div>work-history</div>
          </div>
          <div
            id="skills"
            className={currentContent == "skills" ? styles.active : ""}
            onClick={() => handleClickAbout("skills")}
          >
            <i className="ri-arrow-right-s-line"></i>
            <i className={`ri-folder-3-fill ${styles.folder}`}></i>
            <div>skills</div>
          </div>
        </div>
      )}

      {currentInfo == "hobbies" && (
        <div
          className={`${styles.body} ${isBodyDisplayed ? styles.visible : ""}`}
        >
          <div
            id="interests"
            className={currentContent == "interests" ? styles.active : ""}
            onClick={() => handleClickAbout("interests")}
          >
            <i className="ri-arrow-right-s-line"></i>
            <i className={`ri-folder-3-fill ${styles.folder}`}></i>
            <div>interests</div>
          </div>
        </div>
      )}

      {currentInfo == "personal-info" && (
        <div
          className={`${styles.body} ${isBodyDisplayed ? styles.visible : ""}`}
        >
          <div
            id="bio"
            className={currentContent == "bio" ? styles.active : ""}
            onClick={() => handleClickAbout("bio")}
          >
            <i className="ri-arrow-right-s-line"></i>
            <i className={`ri-folder-3-fill ${styles.folder}`}></i>
            <div>bio</div>
          </div>
        </div>
      )}

      {currentInfo == "projects" && (
        <div
          className={`${styles.body} ${styles.projects} ${
            isBodyDisplayed ? styles.visible : ""
          }`}
        >
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
