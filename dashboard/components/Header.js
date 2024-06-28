
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.userProfile}>
      Kushagra Singh
    </div>
    <div className={styles.actions}>
      <button className={styles.customButton}>+ Custom</button>
      <button className={styles.saveButton}>Save</button>
    </div>
  </header>
);

export default Header;

