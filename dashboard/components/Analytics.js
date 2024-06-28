// components/Analytics.js
import React from 'react';
import styles from '../styles/Analytics.module.css';

const Analytics = () => {
  return (
    <div className={styles.analyticsContainer}>
      <h1>Analytics</h1>
      <div className={styles.chartsContainer}>
        <div className={styles.chartCard}>
          <h2>Sales Over Time</h2>
          {/* Dummy chart placeholder */}
          <div className={styles.chartPlaceholder}>Chart</div>
        </div>
        <div className={styles.chartCard}>
          <h2>Customer Segmentation</h2>
          {/* Dummy chart placeholder */}
          <div className={styles.chartPlaceholder}>Chart</div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
