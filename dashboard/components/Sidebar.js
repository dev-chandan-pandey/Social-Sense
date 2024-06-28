
// import React from 'react';
// import Link from 'next/link';
// import styles from '../styles/Sidebar.module.css';

// const Sidebar = () => {
//   return (
//     <div className={styles.sidebar}>
//       <nav>
//         <ul>
//           <li><Link href="/dashboard">Dashboard</Link></li>
//           <li><Link href="/profile">Profile</Link></li>
//           <li><Link href="/schedule">Schedule</Link></li>
//           <li><Link href="/recommendation">Recommendation</Link></li>
//           <li><Link href="/analytics">Analytics</Link></li>
//           <li><Link href="/inbox">Inbox</Link></li>
//           <li><Link href="/themes">Themes</Link></li>
//           <li><Link href="/settings">Settings</Link></li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;



// components/Sidebar.js
// import React from 'react';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import styles from '../styles/Sidebar.module.css';

// const Sidebar = () => {
//   return (
//     <div className={styles.sidebar}>
//       <nav>
//         <ul>
//           <li>
//             <Link href="/dashboard" legacyBehavior>
//               <a>
//                 <FontAwesomeIcon icon={['fas', 'tachometer-alt']} /> Dashboard
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/profile" legacyBehavior>
//               <a>
//                 <FontAwesomeIcon icon={['fas', 'user']} /> Profile
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/schedule" legacyBehavior>
//               <a>
//                 <FontAwesomeIcon icon={['fas', 'calendar-alt']} /> Schedule
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/recommendation" legacyBehavior>
//               <a>
//                 <FontAwesomeIcon icon={['fas', 'thumbs-up']} /> Recommendation
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/analytics" legacyBehavior>
//               <a>
//                 <FontAwesomeIcon icon={['fas', 'chart-bar']} /> Analytics
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/inbox" legacyBehavior>
//               <a>
//                 <FontAwesomeIcon icon={['fas', 'inbox']} /> Inbox
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/themes" legacyBehavior>
//               <a>
//                 <FontAwesomeIcon icon={['fas', 'palette']} /> Themes
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/settings" legacyBehavior>
//               <a>
//                 <FontAwesomeIcon icon={['fas', 'cogs']} /> Settings
//               </a>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;






import React from 'react';
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Logo Here</div>
      <nav>
        <ul>
          <li className={styles.sectionTitle}>Menu</li>
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/schedule">Schedule</Link></li>
          <li><Link href="/recommendation">Recommendation</Link></li>
          <li><Link href="/analytics">Analytics</Link></li>
          <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/inbox">Inbox <span className={styles.badge}>8</span></Link></li>
          <li><Link href="/themes">Themes</Link></li>
          <li className={styles.sectionTitle}>Account</li>
          <li><Link href="/settings">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

