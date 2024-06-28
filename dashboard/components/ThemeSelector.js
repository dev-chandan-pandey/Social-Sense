
// import React, { useState } from 'react';
// import styles from '../styles/ThemeSelector.module.css';

// const themes = [
//   { name: 'Default', color: '#ffffff' },
//   { name: 'Light', color: '#f0f0f0' },
//   { name: 'Dark', color: '#333333' },
//   { name: 'Blue', color: '#add8e6' },
//   // Add more themes as needed
// ];

// const ThemeSelector = ({ setTheme }) => {
//   const [selectedTheme, setSelectedTheme] = useState('Default');

//   const handleThemeChange = (theme) => {
//     setSelectedTheme(theme);
//     setTheme(theme);
//   };

//   return (
//     <div className={styles.themeSelector}>
//       <h3>Apply a Skin to Your Profile</h3>
//       <div className={styles.themes}>
//         {themes.map((theme) => (
//           <div
//             key={theme.name}
//             className={`${styles.theme} ${selectedTheme === theme.name ? styles.selected : ''}`}
//             style={{ backgroundColor: theme.color }}
//             onClick={() => handleThemeChange(theme.name)}
//           >
//             {theme.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ThemeSelector;
// import React, { useState } from 'react';
// import styles from '../styles/ThemeSelector.module.css';

// const themes = [
//   { name: 'default', color: '#ffffff' },
//   { name: 'light', color: '#f0f0f0' },
//   { name: 'dark', color: '#333333' },
//   { name: 'blue', color: '#add8e6' },
//   // Add more themes as needed
// ];

// const ThemeSelector = ({ setTheme }) => {
//   const [selectedTheme, setSelectedTheme] = useState('default');

//   const handleThemeChange = (theme) => {
//     setSelectedTheme(theme);
//     setTheme(theme);
//   };

//   return (
//     <div className={styles.themeSelector}>
//       <h3>Apply a skin to your profile</h3>
//       <div className={styles.themes}>
//         {themes.map((theme) => (
//           <div
//             key={theme.name}
//             className={`${styles.theme} ${selectedTheme === theme.name ? styles.selected : ''}`}
//             style={{ backgroundColor: theme.color }}
//             onClick={() => handleThemeChange(theme.name)}
//           >
//             {theme.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ThemeSelector;
// import React, { useState } from 'react';
// import styles from '../styles/ThemeSelector.module.css';

// const themes = [
//   { name: 'default', color: '#ffffff' },
//   { name: 'light', color: '#f0f0f0' },
//   { name: 'dark', color: '#333333' },
//   { name: 'blue', color: '#add8e6' },
//   // Add more themes as needed
// ];

// const ThemeSelector = ({ setTheme }) => {
//   const [selectedTheme, setSelectedTheme] = useState('default');

//   const handleThemeChange = (theme) => {
//     setSelectedTheme(theme);
//     setTheme(theme);
//   };

//   return (
//     <div className={styles.themeSelector}>
//       <h3>Apply a skin to your profile</h3>
//       <div className={styles.themes}>
//         {themes.map((theme) => (
//           <div
//             key={theme.name}
//             className={`${styles.theme} ${selectedTheme === theme.name ? styles.selected : ''}`}
//             style={{ backgroundColor: theme.color }}
//             onClick={() => handleThemeChange(theme.name)}
//           >
//             {theme.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ThemeSelector;
import React, { useState } from 'react';
import styles from '../styles/ThemeSelector.module.css';

const solids = ['#000000', '#ffffff', '#c0c0c0', '#f4c2c2', '#b2b2b2', '#ffff99', '#9acd32', '#6495ed'];
const linearGradients = [
  'linear-gradient(to right, #ff7e5f, #feb47b)', 
  'linear-gradient(to right, #6a11cb, #2575fc)', 
  'linear-gradient(to right, #ff758c, #ff7eb3)', 
  'linear-gradient(to right, #43e97b, #38f9d7)'
];
const radialGradients = [
  'radial-gradient(circle, #ff758c, #ff7eb3)', 
  'radial-gradient(circle, #43e97b, #38f9d7)', 
  'radial-gradient(circle, #6a11cb, #2575fc)', 
  'radial-gradient(circle, #ff7e5f, #feb47b)'
];
const foregroundColors = ['#000000', '#ffffff'];

const ThemeSelector = ({ setTheme }) => {
  const [selectedTheme, setSelectedTheme] = useState('default');

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    setTheme(theme);
  };

  return (
    <div className={styles.themeSelector}>
      <h3>Apply a skin to your profile</h3>

      <div className={styles.themeSection}>
        <h4>Solids</h4>
        <div className={styles.themes}>
          {solids.map((color) => (
            <div
              key={color}
              className={`${styles.theme} ${selectedTheme === color ? styles.selected : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleThemeChange(color)}
            ></div>
          ))}
        </div>
      </div>

      <div className={styles.themeSection}>
        <h4>Linear Gradients</h4>
        <div className={styles.themes}>
          {linearGradients.map((gradient) => (
            <div
              key={gradient}
              className={`${styles.theme} ${selectedTheme === gradient ? styles.selected : ''}`}
              style={{ backgroundImage: gradient }}
              onClick={() => handleThemeChange(gradient)}
            ></div>
          ))}
        </div>
      </div>

      <div className={styles.themeSection}>
        <h4>Radial Gradients</h4>
        <div className={styles.themes}>
          {radialGradients.map((gradient) => (
            <div
              key={gradient}
              className={`${styles.theme} ${selectedTheme === gradient ? styles.selected : ''}`}
              style={{ backgroundImage: gradient }}
              onClick={() => handleThemeChange(gradient)}
            ></div>
          ))}
        </div>
      </div>

      <div className={styles.themeSection}>
        <h4>Foreground Color</h4>
        <div className={styles.themes}>
          {foregroundColors.map((color) => (
            <div
              key={color}
              className={`${styles.theme} ${selectedTheme === color ? styles.selected : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleThemeChange(color)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
