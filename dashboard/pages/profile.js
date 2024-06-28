
// import React, { useState } from 'react';
// import ProfileCard from '../components/ProfileCard';
// import ThemeSelector from '../components/ThemeSelector';
// import styles from '../styles/Profile.module.css';

// const Profile = () => {
//   const [theme, setTheme] = useState('Default');

//   return (
//     <div className={styles.profilePage}>
//       <ThemeSelector setTheme={setTheme} />
//       <ProfileCard theme={theme} />
//     </div>
//   );
// };

// export default Profile;
// import React, { useState } from 'react';
// import ProfileCard from '../components/ProfileCard';
// import ThemeSelector from '../components/ThemeSelector';
// import styles from '../styles/Profile.module.css';

// const Profile = () => {
//   const [theme, setTheme] = useState('default');

//   return (
//     <div className={styles.profilePage}>
//       <ThemeSelector setTheme={setTheme} />
//       <ProfileCard theme={theme} />
//     </div>
//   );
// };

// export default Profile;
import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import ThemeSelector from '../components/ThemeSelector';
import styles from '../styles/Profile.module.css';

const Profile = () => {
  const [theme, setTheme] = useState('default');

  return (
    <div className={styles.profilePage}>
      <ThemeSelector setTheme={setTheme} />
      <ProfileCard theme={theme} />
    </div>
  );
};

export default Profile;
