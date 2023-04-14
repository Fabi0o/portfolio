import styles from "@/styles/Nav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Nav = () => {
  const { asPath } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.name}>marcin-fabicki</div>

        <div
          className={`${styles.nav_menu} ${isMenuOpen ? styles.active : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <ul className={styles.list}>
            <li id="home" className={asPath == "/" ? styles.current : ""}>
              <Link className={styles.link} href="/">
                _hello
              </Link>
            </li>

            <li id="about" className={asPath == "/about" ? styles.current : ""}>
              <Link className={styles.link} href="/about">
                _about-me
              </Link>
            </li>

            <li
              id="projects"
              className={asPath == "/projects" ? styles.current : ""}
            >
              <Link className={styles.link} href="/projects">
                _projects
              </Link>
            </li>
          </ul>

          <div
            className={`${styles.contact} ${
              asPath == "/contact" ? styles.current : ""
            }`}
            id="contact"
          >
            <Link className={styles.link} href="/contact">
              _contact-me
            </Link>
          </div>
        </div>

        <div className={styles.hamburger}>
          <i
            className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></i>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
