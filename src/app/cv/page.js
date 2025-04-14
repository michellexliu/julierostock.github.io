'use client';
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
              <div key={`${item.role}-${index}`} className={styles.cvItem}>
                <div className={styles.header}>
                  <h3 className={styles.role}>{item.role}</h3>
                  <span className={styles.timePeriod}>{item.timePeriod}</span>
                </div>
                <h3 className={styles.organization}>{item.organization}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
