// components/ThemeSelector.js
// import styles from '../styles/ThemeSelector.module.css';

// const ThemeSelector = () => (
//   <div className={styles.themeSelector}>
//     {/* Implement the color selection logic here */}
//   </div>
// );

// export default ThemeSelector;
// import React, { useState } from 'react';
// import styles from '../styles/ThemeSelector.module.css';

// const ThemeSelector = ({ colors }) => {
//   const [selectedColor, setSelectedColor] = useState(null);

//   return (
//     <div className={styles.themeSelector}>
//       {colors.map((color, index) => (
//         <div
//           key={index}
//           style={{ background: color }}
//           className={selectedColor === color ? 'active' : ''}
//           onClick={() => setSelectedColor(color)}
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default ThemeSelector;
// components/ThemeSelector.js
// import React, { useState } from 'react';
// import styles from '../styles/ThemeSelector.module.css';

// const ThemeSelector = () => {
//   const [theme, setTheme] = useState('light');

//   const handleThemeChange = (e) => {
//     setTheme(e.target.value);
//     document.documentElement.setAttribute('data-theme', e.target.value);
//   };

//   return (
//     <div className={styles.themeSelector}>
//       <label htmlFor="theme">Choose a theme:</label>
//       <select id="theme" value={theme} onChange={handleThemeChange}>
//         <option value="light">Light</option>
//         <option value="dark">Dark</option>
//         <option value="colorful">Colorful</option>
//       </select>
//     </div>
//   );
// };

// export default ThemeSelector;

import React, { useState } from 'react';
import styles from '../styles/ThemeSelector.module.css';

const themes = [
  { name: 'default', color: '#ffffff' },
  { name: 'light', color: '#f0f0f0' },
  { name: 'dark', color: '#333333' },
  { name: 'blue', color: '#add8e6' },
  // Add more themes as needed
];

const ThemeSelector = ({ setTheme }) => {
  const [selectedTheme, setSelectedTheme] = useState('default');

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    setTheme(theme);
  };

  return (
    <div className={styles.themeSelector}>
      <h3>Apply a skin to your profile</h3>
      <div className={styles.themes}>
        {themes.map((theme) => (
          <div
            key={theme.name}
            className={`${styles.theme} ${selectedTheme === theme.name ? styles.selected : ''}`}
            style={{ backgroundColor: theme.color }}
            onClick={() => handleThemeChange(theme.name)}
          >
            {theme.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;

