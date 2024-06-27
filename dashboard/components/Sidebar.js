
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav>
        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/schedule">Schedule</Link></li>
          <li><Link href="/recommendation">Recommendation</Link></li>
          <li><Link href="/analytics">Analytics</Link></li>
          <li><Link href="/inbox">Inbox</Link></li>
          <li><Link href="/themes">Themes</Link></li>
          <li><Link href="/settings">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;










