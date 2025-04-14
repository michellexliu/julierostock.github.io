import styles from './index.module.scss';
import cn from 'classnames';

const Nav = ({ children }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h2 className={styles.name}>JULIE ROSTOCK</h2>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>Work</li>
          <li className={cn(styles.navItem, styles.subNavItem)}>My Films</li>
          <li className={cn(styles.navItem, styles.subNavItem)}>Other Work</li>
          <li className={styles.navItem}>CV</li>
          <li className={styles.navItem}>About</li>
          <li className={styles.navItem}>Etc</li>
        </ul>
      </nav>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Nav;
