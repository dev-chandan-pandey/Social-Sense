
import React from 'react';
import styles from '../styles/DashboardMetrics.module.css';

const metrics = [
  { title: 'Total Sales', value: '$1,234,567' },
  { title: 'New Customers', value: '123' },
  { title: 'Pending Orders', value: '45' },
  { title: 'Support Tickets', value: '67' },
];

const DashboardMetrics = () => {
  return (
    <div className={styles.dashboardMetrics}>
      {metrics.map((metric, index) => (
        <div key={index} className={styles.metric}>
          <h3>{metric.title}</h3>
          <p>{metric.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardMetrics;
