import styles from "@/styles/Nav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const { asPath } = useRouter();

  const displayMenu = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const navMenu = document.querySelector(`.${styles.nav_menu}`);

    target.className =
      target.className == "ri-menu-line" ? "ri-close-line" : "ri-menu-line";

    navMenu!.classList.toggle(styles.active);
  };

  const closeMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    const navMenu = document.querySelector(`.${styles.nav_menu}`)!;
    const icone = document.querySelector("i")!;

    if (navMenu.className == `${styles.nav_menu} ${styles.active}`) {
      navMenu.classList.toggle(styles.active);
      icone.className = "ri-menu-line";
    }
  };

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.name}>marcin-fabicki</div>

        <div className={styles.nav_menu} onClick={closeMenu}>
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
          <i className="ri-menu-line" onClick={displayMenu}></i>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
