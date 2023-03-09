import styles from "@/styles/Home.module.scss";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <div className={styles.container}>
      <Introduction />
      <div className={styles.container_right}></div>
    </div>
  );
}
