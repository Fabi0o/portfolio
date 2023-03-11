import styles from "@/styles/Nav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Nav = () => {
  const { asPath } = useRouter();

  useEffect(() => {
    toggleCurrentClass(asPath, "add");
  });

  const toggleCurrentClass = (path: string, action: "add" | "remove") => {
    let current;

    if (path == "/") {
      current = document.querySelector("#home");
    } else if (path == "/about") {
      current = document.querySelector("#about");
    } else if (path == "/projects") {
      current = document.querySelector("#projects");
    } else if (path == "/contact") {
      current = document.querySelector("#contact");
    }

    if (action == "add") {
      current?.classList.add(`${styles.current}`);
    } else if (action == "remove") {
      current?.classList.remove(`${styles.current}`);
    }
  };

  const displayMenu = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const navMenu = document.querySelector(`.${styles.nav_menu}`);

    target.className =
      target.className == "ri-menu-line" ? "ri-close-line" : "ri-menu-line";

    navMenu!.classList.toggle(styles.active);
  };

  const closeMenu = () => {
    const navMenu = document.querySelector(`.${styles.nav_menu}`)!;
    const icone = document.querySelector("i")!;

    toggleCurrentClass(asPath, "remove");

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
            <li id="home">
              <Link className={styles.link} href="/" onClick={closeMenu}>
                _hello
              </Link>
            </li>

            <li id="about">
              <Link className={styles.link} href="/about" onClick={closeMenu}>
                _about-me
              </Link>
            </li>

            <li id="projects">
              <Link
                className={styles.link}
                href="/projects"
                onClick={closeMenu}
              >
                _projects
              </Link>
            </li>
          </ul>

          <div className={styles.contact} id="contact">
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
