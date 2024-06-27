import React from 'react';
import styles from '../styles/RecentTransactions.module.css';

const transactions = [
  { id: '#1023', date: 'Jan 6, 2022', amount: '$25.50', status: 'Paid' },
  { id: '#1024', date: 'Jan 8, 2022', amount: '$15.75', status: 'Pending' },
  { id: '#1025', date: 'Jan 9, 2022', amount: '$45.00', status: 'Paid' },
];

const RecentTransactions = () => {
  return (
    <div className={styles.transactions}>
      <h3>Recent Transactions</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Invoice</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;
