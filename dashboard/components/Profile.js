// components/Profile.js
// import React from 'react';
// import styles from '../styles/Profile.module.css';

// const Profile = () => {
//   return (
//     <div className={styles.profile}>
//       <h2>User Profile</h2>
//       <div className={styles.info}>
//         <div className={styles.infoItem}>
//           <span className={styles.label}>Name:</span>
//           <span className={styles.value}>John Doe</span>
//         </div>
//         <div className={styles.infoItem}>
//           <span className={styles.label}>Email:</span>
//           <span className={styles.value}>john.doe@example.com</span>
//         </div>
//         <div className={styles.infoItem}>
//           <span className={styles.label}>Role:</span>
//           <span className={styles.value}>Administrator</span>
//         </div>
//         <div className={styles.infoItem}>
//           <span className={styles.label}>Joined:</span>
//           <span className={styles.value}>January 1, 2023</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
// pages/profile.js
// import React from 'react';
// import Layout from '../components/Layout';
// import Profile from '../components/Profile';

// const ProfilePage = () => {
//   return (
//     <Layout>
//       <Profile />
//     </Layout>
//   );
// };

// export default ProfilePage;
import React, { useState } from 'react';
import styles from '../styles/Profile.module.css';

const Profile = () => {
  const [user, setUser] = useState({
    firstName: 'Russel',
    lastName: 'Sims',
    email: 'russel@mycompany.com',
    phoneNumber: '+1 255 293 45690',
    position: 'iOS Developer',
    role: 'Employee',
    hr: 'Kate Middleton',
    manager: 'Kirk Mitrohin',
    lead: 'Eugene Hummell',
    onboarding: '21.05.2022',
    onboardingRequired: true,
    currentStatus: 'Onboarding',
    progress: 35,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className={styles.profilePage}>
      <div className={styles.profileHeader}>
        <img src="/images/profile-placeholder.png" alt="Profile" className={styles.profileImage} />
        <div>
          <h1>{`${user.firstName} ${user.lastName}`}</h1>
          <p>{user.position}</p>
        </div>
      </div>
      <div className={styles.profileDetails}>
        <h2>Employee Details</h2>
        <label>
          First Name:
          <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
        </label>
        <label>
          Email Address:
          <input type="email" name="email" value={user.email} onChange={handleInputChange} />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={user.phoneNumber} onChange={handleInputChange} />
        </label>
        <label>
          Position:
          <input type="text" name="position" value={user.position} onChange={handleInputChange} />
        </label>
        <button className={styles.saveButton}>Save Changes</button>
      </div>
      <div className={styles.profileAdditional}>
        <h2>Team</h2>
        <p><strong>HR:</strong> {user.hr}</p>
        <p><strong>Manager:</strong> {user.manager}</p>
        <p><strong>Lead:</strong> {user.lead}</p>
      </div>
      <div className={styles.onboarding}>
        <h2>Onboarding</h2>
        <p><strong>Starts on:</strong> {user.onboarding}</p>
        <p><strong>Onboarding required:</strong> {user.onboardingRequired ? 'Yes' : 'No'}</p>
        <p><strong>Current Status:</strong> {user.currentStatus}</p>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${user.progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
