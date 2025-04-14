'use client';
import styles from './index.module.scss';
import FilmInfo from './components/FilmInfo';
import { useState } from 'react';
import { JULIE_FILMS } from './constants';

export default function Home() {
  const [selectedFilm, setSelectedFilm] = useState(0);
  const filmInfo = JULIE_FILMS[selectedFilm];

  return (
    <div className={styles.homeContainer}>
      <div className={styles.content}>
        <div className={styles.filmMenu}>
          {JULIE_FILMS.map(({ name }, index) => (
            <p
              className={
                index === selectedFilm
                  ? styles.selectedFilm
                  : styles.deselectedFilm
              }
              key={`${name}-${index}`}
              onClick={() => setSelectedFilm(index)}
            >
              {name}
            </p>
          ))}
        </div>
        <FilmInfo {...filmInfo} />
      </div>
    </div>
  );
}
