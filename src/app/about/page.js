import styles from './page.module.scss';

export default function About() {
  return (
    <div className={styles.cvContainer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>About</h2>
          <p className={styles.description}>
            I am a filmmaker and aspiring sound designer based in Pittsburgh,
            PA.
            <br />
            <br />
            Currently @ University of Pittsburgh pursuing a BA in Film and Media
            Studies and a BS in mathematics.{' '}
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p className={styles.description}>
            <b>Email:</b>{' '}
            <a href="mailto:julierrostock@gmail.com">julierrostock@gmail.com</a>
            <br />
            <b>Instagram:</b>{' '}
            <a href="https://www.instagram.com/julierostock/">@julierostock</a>
            <br />
            <b>LinkedIn:</b>{' '}
            <a href="https://www.linkedin.com/in/julierostock/">
              @julierostock
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
