'use client';
import styles from './index.module.scss';
import FilmInfo from './components/FilmInfo';
import { JULIE_FILMS } from './constants';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.content}>
        <FilmInfo {...JULIE_FILMS[0]} />
      </div>
    </div>
  );
}
