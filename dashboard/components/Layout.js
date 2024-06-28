;
// components/Layout.js
// import React from 'react';
// import Sidebar from './Sidebar';
// import styles from '../styles/Layout.module.css';

// const Layout = ({ children }) => {
//   return (
//     <div className={styles.container}>
//       <Sidebar />
//       <main className={styles.main}>
//         {children}
//       </main>
//     </div>
//   );
// };

// export default Layout;

import React from 'react';
import Sidebar from './Sidebar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Layout;



