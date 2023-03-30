import styles from "@/styles/Home.module.scss";
import Introduction from "@/components/home/Introduction";

export default function Home() {
  return (
    <div className={styles.container}>
      <Introduction />
      <div className={styles.container_right}></div>
      <div className={styles.blurry_gradient_green}></div>
      <div className={styles.blurry_gradient_purple}></div>
    </div>
  );
}
