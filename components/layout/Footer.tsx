import styles from "@/styles/Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_socials}>
        <div>find me in:</div>
        <Link href="https://twitter.com/FabickiM" className={styles.link}>
          <i className={`ri-twitter-fill ${styles.icone}`}></i>
        </Link>
      </div>
      <Link
        href="https://github.com/Fabi0o"
        className={`${styles.footer_github} ${styles.link}`}
      >
        @Fabi0o<i className={`ri-github-fill ${styles.icone}`}></i>
      </Link>
    </footer>
  );
};

export default Footer;
