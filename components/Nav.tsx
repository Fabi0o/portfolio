import styles from "@/styles/Nav.module.scss";
import Link from "next/link";

const Nav = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.name}>marcin-fabicki</div>
        <div className={styles.nav_menu}>
          <ul className={styles.list}>
            <li>
              <Link className={styles.link} href="/">
                _hello
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/about">
                _about-me
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/projects">
                _projects
              </Link>
            </li>
          </ul>
          <div className={styles.contact}>
            <Link className={styles.link} href="/contact">
              _contact-me
            </Link>
          </div>
        </div>
        <div className={styles.hamburger}>
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
