import styles from "@/styles/Introduction.module.scss";

const Introduction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.welcome_text}>
        <p className={styles.greeting}>Hi all. I am</p>
        <h1 className={styles.name}>Marcin Fabicki</h1>
        <h2 className={styles.position}>{`> Web Developer`}</h2>
      </div>
      <div className={styles.code_snippet}>
        <p>{`// this is my portfolio page`}</p>
        <p>{`// you can see all the code on my Github page`}</p>
        <p className={styles.const}>
          <span>const</span> <span>githubLink</span> ={" "}
          <span>
            {`"`}
            <a href="https://github.com/Fabi0o/portfolio">{`https://github.com/Fabi0o/portfolio`}</a>
            {`"`}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Introduction;
