// components/Inbox.js
import React from 'react';
import styles from '../styles/Inbox.module.css';

const messages = [
  { from: 'John Doe', subject: 'Meeting Reminder', date: '2023-12-01' },
  { from: 'Jane Smith', subject: 'Project Update', date: '2023-11-28' },
  { from: 'Sam Wilson', subject: 'Holiday Schedule', date: '2023-11-20' },
];

const Inbox = () => {
  return (
    <div className={styles.inboxContainer}>
      <h1>Inbox</h1>
      <ul className={styles.messageList}>
        {messages.map((message, index) => (
          <li key={index} className={styles.messageItem}>
            <div className={styles.messageHeader}>
              <span className={styles.messageFrom}>{message.from}</span>
              <span className={styles.messageDate}>{message.date}</span>
            </div>
            <div className={styles.messageSubject}>{message.subject}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inbox;
