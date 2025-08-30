'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './index.module.scss';
import cn from 'classnames';

const Nav = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <div className={styles.header}>
          <h2 className={styles.name}>
            <Link href="/">JULIE ROSTOCK</Link>
          </h2>
          <button
            className={cn(styles.hamburger, isMenuOpen && styles.open)}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className={`${styles.navItems} ${isMenuOpen ? styles.show : ''}`}>
          <li className={styles.navItem}>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Work
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/cv" onClick={() => setIsMenuOpen(false)}>
              CV
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Nav;
