
import React from 'react';
import Layout from '../components/Layout';
import DashboardMetrics from '../components/DashboardMetrics';
import ActivityFeed from '../components/ActivityFeed';
const Dashboard = () => {
  return (
    <Layout>
      <h1>Dashboard</h1>
      <DashboardMetrics />
      <ActivityFeed />
    </Layout>
  );
};

export default Dashboard;
// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <div>Total Sales: $1,234,567</div>
//       <div>New Customers: 123</div>
//       <div>Pending Orders: 45</div>
//       <div>Support Tickets: 67</div>
//       <div>Recent Activity: User A posted a new comment. User B liked your post. User C started following you.</div>
//     </div>
//   );
// };

// export default Dashboard;
