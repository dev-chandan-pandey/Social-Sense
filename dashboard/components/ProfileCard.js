// components/ProfileCard.js
// import React from 'react';
// import styles from '../styles/ProfileCard.module.css';

// const ProfileCard = () => {
//   // Dummy user data
//   const user = {
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     avatar: 'https://via.placeholder.com/150',
//   };

//   return (
//     <div className={styles.profileCard}>
//       <img src={user.avatar} alt="User Avatar" className={styles.avatar} />
//       <h2>{user.name}</h2>
//       <p>{user.email}</p>
//     </div>
//   );
// };

// export default ProfileCard;
// components/ProfileCard.js
// import React from 'react';
// import styles from '../styles/ProfileCard.module.css';

// const ProfileCard = () => {
//   // Dummy user data
//   const user = {
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     avatar: 'https://via.placeholder.com/150',
//   };

//   return (
//     <div className={styles.profileCard}>
//       <img src={user.avatar} alt="User Avatar" className={styles.avatar} />
//       <h2>{user.name}</h2>
//       <p>{user.email}</p>
//     </div>
//   );
// };

// export default ProfileCard;
// components/ProfileCard.js
// import React from 'react';
// import styles from '../styles/ProfileCard.module.css';

// const ProfileCard = () => {
//   return (
//     <div className={styles.profileCard}>
//       <img src="/images/profile.jpg" alt="Profile Picture" className={styles.profileImage} />
//       <h2 className={styles.profileName}>John Doe</h2>
//       <p className={styles.profileTitle}>Software Engineer</p>
//     </div>
//   );
// };

// export default ProfileCard;
// components/ProfileCard.js
// import React from 'react';
// import styles from '../styles/ProfileCard.module.css';

// const ProfileCard = ({ user }) => {
//   return (
//     <div className={styles.profileCard}>
//       <img src="/images/profile.jpg" alt="Profile Picture" className={styles.profileImage} />
//       <h2>{user.firstName} {user.lastName}</h2>
//       <p>Email: {user.email}</p>
//       <p>Phone: {user.phone}</p>
//       <p>Job Title: {user.jobTitle}</p>
//       <p>Company: {user.company}</p>
//     </div>
//   );
// };

// export default ProfileCard;
import React from 'react';
import styles from '../styles/ProfileCard.module.css';

const ProfileCard = ({ theme }) => {
  return (
    <div className={`${styles.profileCard} ${styles[theme]}`}>
      <img src="/profile-pic.jpg" alt="Profile Picture" className={styles.profilePic} />
      <h2>Mason Parker</h2>
      <p>Graphics & UI/UX Designer</p>
      <p>Denver, United States</p>
      <p className={styles.biography}>
        I am a visionary Graphics and UI/UX Designer, seamlessly blending artistic flair with technical expertise. With a degree in Graphic Design, I consistently deliver visually stunning and user-centric solutions, leaving an indelible mark on the digital landscape.
      </p>
    </div>
  );
};

export default ProfileCard;
