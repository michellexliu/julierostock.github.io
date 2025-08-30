import styles from './index.module.scss';
import Link from 'next/link';

const Nav = ({ children }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h2 className={styles.name}>
          <Link href="/">JULIE ROSTOCK</Link>
        </h2>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">Work</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/cv">CV</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Nav;
