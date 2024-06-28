// components/Recommendation.js
import React from 'react';
import styles from '../styles/Recommendation.module.css';

const recommendations = [
  { id: 1, text: 'Recommendation 1' },
  { id: 2, text: 'Recommendation 2' },
  { id: 3, text: 'Recommendation 3' },
  // Add more recommendations as needed
];

const Recommendation = () => {
  return (
    <div className={styles.recommendation}>
      <h2>Recommendations</h2>
      <ul>
        {recommendations.map(rec => (
          <li key={rec.id}>{rec.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
