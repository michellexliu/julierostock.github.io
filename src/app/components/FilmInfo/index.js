import Image from 'next/image';
import Joan from '@/app/media/joan_thumbnail.jpg';
import styles from './index.module.scss';

export default function FilmInfo({
  name,
  meta,
  summary,
  cast,
  crew,
  more,
  link,
}) {
  return (
    <div className={styles.container}>
      {link && (
        <div className={styles.videoWrapper}>
          <iframe
            src={link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.metadata}>{meta}</p>
      <p className={styles.info}>{summary}</p>
      {cast && (
        <>
          <p className={styles.header}>Cast</p>
          <ul>
            {cast.map(({ name, role }) => {
              return (
                <li
                  className={styles.body}
                  key={name}
                >{`${name} as ${role}`}</li>
              );
            })}
          </ul>
        </>
      )}
      {crew && (
        <>
          <p className={styles.header}>Crew</p>
          <ul>
            {crew.map(({ name, role }) => {
              return (
                <li
                  className={styles.body}
                  key={`${name}-${role}`}
                >{`${name} - ${role}`}</li>
              );
            })}
          </ul>
        </>
      )}
      {more && (
        <p className={styles.more} dangerouslySetInnerHTML={{ __html: more }} />
      )}
    </div>
  );
}
