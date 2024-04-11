// components/Header.js

import Link from 'next/link';
import styles from '../header/Header.module.css';
import Dark from './dark_theme/Dark'

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          
            <img src="/logo.png" alt="Logo" />
         
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/services">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
