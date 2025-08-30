import { CV_SECTIONS } from '../constants';
import styles from './page.module.scss';

export default function CV() {
  return (
    <div className={styles.cvContainer}>
      <div className={styles.content}>
        {Object.values(CV_SECTIONS).map((section) => (
          <div key={section.title} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            {section.items.map((item, index) => (
              <div
                key={`${item.organization}-${item.role}-${index}`}
                className={styles.cvItem}
              >
                <div className={styles.header}>
                  <span>
                    <strong>{item.timePeriod}</strong> | {item.role},{' '}
                    {item.organization ?? item.filmName}
                  </span>
                </div>
                {item.description && (
                  <p
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
