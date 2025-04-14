import './globals.css';
import Nav from './components/Nav';
import styles from './index.module.scss';

export const metadata = {
  title: 'Julie Rostock',
  description: 'Julie Rostock - Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.pageContainer}>
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
