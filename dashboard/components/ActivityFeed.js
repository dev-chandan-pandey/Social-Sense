// components/ActivityFeed.js
import React from 'react';
import styles from '../styles/ActivityFeed.module.css';

const ActivityFeed = () => {
  const activities = [
    { id: 1, activity: 'User A posted a new comment.' },
    { id: 2, activity: 'User B liked your post.' },
    { id: 3, activity: 'User C started following you.' },
    // Add more dummy activities
  ];

  return (
    <div className={styles.activityFeed}>
      <h2>Recent Activity</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
