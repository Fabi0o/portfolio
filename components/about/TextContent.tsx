import { ContentProps } from "@/types/Props";
import styles from "@/styles/TextContent.module.scss";

const TextContent: React.FC<ContentProps> = ({
  currentContent,
  setCurrentContent,
}) => {
  return currentContent ? (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          {currentContent}
          <i
            className="ri-close-line"
            onClick={() => setCurrentContent(undefined)}
          ></i>
        </div>
      </div>
      <div className={styles.body}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero omnis quas
        officiis ad, vel modi repudiandae exercitationem magni impedit, sapiente
        asperiores illum eaque. Repellat commodi vitae quibusdam debitis sed
        tenetur ipsam ut sunt optio voluptatibus quam eius quidem est, tempore
        repudiandae ducimus perferendis dolores aut eaque doloremque, ea quas.
        Aperiam.
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default TextContent;
