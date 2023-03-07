import styles from "@/styles/Nav.module.scss";
import Link from "next/link";

const Nav = () => {
  const displayMenu = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const navMenu = document.querySelector(`.${styles.nav_menu}`);

    target.className =
      target.className == "ri-menu-line" ? "ri-close-line" : "ri-menu-line";

    navMenu!.classList.toggle(styles.active);
  };

  const closeMenu = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const navMenu = target.parentElement?.parentElement?.parentElement!;
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
        <div className={styles.nav_menu}>
          <ul className={styles.list}>
            <li>
              <Link className={styles.link} href="/" onClick={closeMenu}>
                _hello
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/about" onClick={closeMenu}>
                _about-me
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/projects"
                onClick={closeMenu}
              >
                _projects
              </Link>
            </li>
          </ul>
          <div className={styles.contact}>
            <Link className={styles.link} href="/contact" onClick={closeMenu}>
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
