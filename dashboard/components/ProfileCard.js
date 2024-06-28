
// import React from 'react';
// import styles from '../styles/ProfileCard.module.css';

// const ProfileCard = ({ theme }) => {
//   const themeClass = theme.toLowerCase();

//   return (
//     <div className={`${styles.profileCard} ${styles[themeClass]}`}>
//       <img src="/images/profile.jpg" alt="Profile" className={styles.profileImage} />
//       <h2>John Doe</h2>
//       <p>Software Engineer</p>
//     </div>
//   );
// };

// export default ProfileCard;
// import React from 'react';
// import styles from '../styles/ProfileCard.module.css';

// const ProfileCard = ({ theme }) => {
//   const themeClass = theme.toLowerCase();

//   return (
//     <div className={`${styles.profileCard} ${styles[themeClass]}`}>
//       <img src="/images/profile.jpg" alt="Profile" className={styles.profileImage} />
//       <h2>Mason Parker</h2>
//       <p>Graphics & UI/UX Designer</p>
//       <p>Denver, United States</p>
//       <div className={styles.biography}>
//         I am a visionary Graphics and UI/UX Designer, seamlessly blending artistic flair with technical expertise. With a degree in Graphic Design, I consistently deliver visually stunning and user-centric solutions, leaving an indelible mark on the digital landscape. As a trusted collaborator, I am dedicated to crafting pixel-perfect UIs and captivating graphics that elevate user experiences.
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;
// import React from 'react';
// import styles from '../styles/ProfileCard.module.css';

// const ProfileCard = ({ theme }) => {
//   const themeClass = theme.toLowerCase();

//   return (
//     <div className={`${styles.profileCard} ${styles[themeClass]}`}>
//       <div className={styles.profileHeader}>
//         <img src="/images/profile.jpg" alt="Profile" className={styles.profileImage} />
//       </div>
//       <div className={styles.profileBody}>
//         <h2>Mason Parker</h2>
//         <p>Graphics & UI/UX Designer</p>
//         <p>Denver, United States</p>
//         <div className={styles.biography}>
//           I am a visionary Graphics and UI/UX Designer, seamlessly blending artistic flair with technical expertise. With a degree in Graphic Design, I consistently deliver visually stunning and user-centric solutions, leaving an indelible mark on the digital landscape. As a trusted collaborator, I am dedicated to crafting pixel-perfect UIs and captivating graphics that elevate user experiences.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;
// import React from 'react';
// import styles from '../styles/ProfileCard.module.css';

// const ProfileCard = ({ theme }) => {
//   return (
//     <div className={`${styles.profileCard} ${styles[theme]}`}>
//       <div className={styles.banner}>
//         <img src="/images/banner.jpg" alt="Banner" className={styles.bannerImage} />
//         <div className={styles.profileImageWrapper}>
//           <img src="/images/profile.jpg" alt="Profile" className={styles.profileImage} />
//         </div>
//       </div>
//       <div className={styles.profileContent}>
//         <h2>Mason Parker</h2>
//         <h3>Graphics & UI/UX Designer</h3>
//         <p className={styles.location}>Denver, United States</p>
//         <p className={styles.bio}>
//           I am a visionary Graphics and UI/UX Designer, seamlessly blending artistic flair with technical expertise. With a degree in Graphic Design, I consistently deliver visually stunning and user-centric solutions, leaving an indelible mark on the digital landscape. As a trusted collaborator, I am dedicated to crafting pixel-perfect UIs and captivating graphics that elevate user experiences.
//         </p>
//         <p className={styles.biography}>Biography</p>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;
import React from 'react';
import styles from '../styles/ProfileCard.module.css';

const ProfileCard = ({ theme }) => {
  return (
    <div className={`${styles.profileCard} ${styles[theme]}`}>
      <div className={styles.banner}>
        <img src="/images/banner.jpg" alt="Banner" className={styles.bannerImage} />
        <div className={styles.profileImageWrapper}>
          <img src="/images/profile.jpg" alt="Profile" className={styles.profileImage} />
        </div>
      </div>
      <div className={styles.profileContent}>
        <h2>Mason Parker</h2>
        <h3>Graphics & UI/UX Designer</h3>
        <p className={styles.location}>Denver, United States</p>
        <p className={styles.bio}>
          I am a visionary Graphics and UI/UX Designer, seamlessly blending artistic flair with technical expertise. With a degree in Graphic Design, I consistently deliver visually stunning and user-centric solutions, leaving an indelible mark on the digital landscape. As a trusted collaborator, I am dedicated to crafting pixel-perfect UIs and captivating graphics that elevate user experiences.
        </p>
        <p className={styles.biography}>Biography</p>
      </div>
    </div>
  );
};

export default ProfileCard;
