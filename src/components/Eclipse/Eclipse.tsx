import styles from './Eclipse.module.css';

export const Eclipse = () => {
  return (
    <div className={styles.eclipse}>
      <div className={styles.star}></div>
      <div className={styles.planet}></div>
    </div>
  );
};
