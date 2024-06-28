


// import React, { useState } from 'react';
// import ThemeSelector from '../components/ThemeSelector';
// import ProfileCard from '../components/ProfileCard';
// import styles from '../styles/Themes.module.css';

// const Themes = () => {
//   const [theme, setTheme] = useState('Default');

//   return (
//     <div className={styles.themesPage}>
//       <ThemeSelector setTheme={setTheme} />
//       <ProfileCard theme={theme} />
//     </div>
//   );
// };

// export default Themes;
// import React, { useState } from 'react';
// import ThemeSelector from '../components/ThemeSelector';
// import ProfileCard from '../components/ProfileCard';
// import styles from '../styles/Themes.module.css';

// const Themes = () => {
//   const [theme, setTheme] = useState('default');

//   return (
//     <div className={styles.themesPage}>
//       <ThemeSelector setTheme={setTheme} />
//       <ProfileCard theme={theme} />
//     </div>
//   );
// };

// export default Themes;
// import React, { useState } from 'react';
// import ThemeSelector from '../components/ThemeSelector';
// import ProfileCard from '../components/ProfileCard';
// import styles from '../styles/Themes.module.css';

// const Themes = () => {
//   const [theme, setTheme] = useState('default');

//   return (
//     <div className={styles.themesPage}>
//       <ThemeSelector setTheme={setTheme} />
//       <ProfileCard theme={theme} />
//     </div>
//   );
// };

// export default Themes;
import React, { useState } from 'react';
import ThemeSelector from '../components/ThemeSelector';
import ProfileCard from '../components/ProfileCard';
import styles from '../styles/Themes.module.css';

const Themes = () => {
  const [theme, setTheme] = useState('default');

  return (
    <div className={styles.themesPage}>
      <div className={styles.header}>
        <h2>Themes</h2>
        <div className={styles.user}>
          <span>Kushagra Singh</span>
          <div className={styles.profilePic}></div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.themeSelectorWrapper}>
          <div className={styles.themeSelectorHeader}>
            <span>Apply a skin to your profile</span>
            <div className={styles.buttons}>
              <button className={styles.customButton}>+ Custom</button>
              <button className={styles.saveButton}>Save</button>
            </div>
          </div>
          <ThemeSelector setTheme={setTheme} />
        </div>
        <ProfileCard theme={theme} />
      </div>
    </div>
  );
};

export default Themes;
