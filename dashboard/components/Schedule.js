// components/Schedule.js
import React from 'react';
import styles from '../styles/Schedule.module.css';

const Schedule = () => {
  return (
    <div className={styles.schedule}>
      <h2>Schedule</h2>
      <div className={styles.calendar}>
        {/* Dummy calendar for demonstration */}
        <p>Calendar view will go here</p>
      </div>
    </div>
  );
};

export default Schedule;
