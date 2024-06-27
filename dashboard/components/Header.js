// components/Header.js
// import React from 'react';
// import styles from '../styles/Header.module.css';

// const Header = () => {
//   return (
//     <div className={styles.header}>
//       <div className={styles.user}>Kushagra Singh</div>
//     </div>
//   );
// };

// export default Header;
// import styles from '../styles/Header.module.css';
// import Link from 'next/link';

// const Header = () => (
//   <header className={styles.header}>
//     <div className={styles.userProfile}>
//       Kushagra Singh
//     </div>
//     <div className={styles.actions}>
//       <Link href="/custom" legacyBehavior>
//         <a className={styles.customButton}>+ Custom</a>
//       </Link>
//       <button className={styles.saveButton}>Save</button>
//     </div>
//   </header>
// );

// export default Header;
// components/Header.js
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

