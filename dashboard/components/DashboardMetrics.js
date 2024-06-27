// components/DashboardMetrics.js
// import React from 'react';
// import styles from '../styles/DashboardMetrics.module.css';

// const DashboardMetrics = () => {
//   // Dummy data for metrics
//   const metrics = [
//     { title: 'Total Users', value: 1200 },
//     { title: 'Active Users', value: 800 },
//     { title: 'New Signups', value: 50 },
//     { title: 'Revenue', value: '$25,000' },
//   ];

//   return (
//     <div className={styles.metricsContainer}>
//       {metrics.map((metric, index) => (
//         <div key={index} className={styles.metricCard}>
//           <h3>{metric.title}</h3>
//           <p>{metric.value}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DashboardMetrics;
// components/DashboardMetrics.js
// import React from 'react';
// import styles from '../styles/DashboardMetrics.module.css';

// const DashboardMetrics = () => {
//   return (
//     <div className={styles.metrics}>
//       <div className={styles.metric}>
//         <h3>Total Sales</h3>
//         <p>$24,000</p>
//       </div>
//       <div className={styles.metric}>
//         <h3>New Users</h3>
//         <p>120</p>
//       </div>
//       <div className={styles.metric}>
//         <h3>Active Users</h3>
//         <p>1,200</p>
//       </div>
//       <div className={styles.metric}>
//         <h3>Support Tickets</h3>
//         <p>32</p>
//       </div>
//     </div>
//   );
// };

// export default DashboardMetrics;
// import React from 'react';
// import styles from '../styles/DashboardMetrics.module.css';

// const DashboardMetrics = () => {
//   return (
//     <div className={styles.dashboardMetrics}>
//       <div className={styles.metricCard}>
//         <h3>Customers</h3>
//         <p>3,812</p>
//         <span>15.73%</span>
//       </div>
//       <div className={styles.metricCard}>
//         <h3>Orders</h3>
//         <p>1,658</p>
//         <span>21.15%</span>
//       </div>
//       <div className={styles.metricCard}>
//         <h3>Revenue</h3>
//         <p>$2,000</p>
//         <span>12.76%</span>
//       </div>
//       <div className={styles.metricCard}>
//         <h3>Growth</h3>
//         <p>32.56%</p>
//       </div>
//     </div>
//   );
// };

// export default DashboardMetrics;
// components/DashboardMetrics.js
// import React from 'react';
// import styles from '../styles/DashboardMetrics.module.css';

// const DashboardMetrics = () => {
//   return (
//     <div className={styles.metricsContainer}>
//       <div className={styles.metricCard}>
//         <h2>Metric 1</h2>
//         <p>Value</p>
//       </div>
//       <div className={styles.metricCard}>
//         <h2>Metric 2</h2>
//         <p>Value</p>
//       </div>
//       <div className={styles.metricCard}>
//         <h2>Metric 3</h2>
//         <p>Value</p>
//       </div>
//       <div className={styles.metricCard}>
//         <h2>Metric 4</h2>
//         <p>Value</p>
//       </div>
//     </div>
//   );
// };

// export default DashboardMetrics;
// components/DashboardMetrics.js
import React from 'react';
import styles from '../styles/DashboardMetrics.module.css';

const DashboardMetrics = () => {
  return (
    <div className={styles.dashboardMetrics}>
      <div className={styles.metric}>
        <h3>Total Sales</h3>
        <p>$1,234,567</p>
      </div>
      <div className={styles.metric}>
        <h3>New Customers</h3>
        <p>123</p>
      </div>
      <div className={styles.metric}>
        <h3>Pending Orders</h3>
        <p>45</p>
      </div>
      <div className={styles.metric}>
        <h3>Support Tickets</h3>
        <p>67</p>
      </div>
    </div>
  );
};

export default DashboardMetrics;
