// pages/themes.js
// pages/themes.js
// pages/themes.js
// import styles from '../styles/Themes.module.css';

// const Themes = () => (
//   <div className={styles.themesPage}>
//     <h1>Themes</h1>
//     <div className={styles.applySkin}>Apply a skin to your profile</div>
//     <div className={styles.colorSections}>
//       <div className={styles.solids}>
//         <h2>Solids</h2>
//         {/* Add solid color options here */}
//       </div>
//       <div className={styles.linearGradients}>
//         <h2>Linear Gradients</h2>
//         {/* Add linear gradient options here */}
//       </div>
//       <div className={styles.radialGradients}>
//         <h2>Radial Gradients</h2>
//         {/* Add radial gradient options here */}
//       </div>
//       <div className={styles.foregroundColor}>
//         <h2>Foreground Color</h2>
//         {/* Add foreground color options here */}
//       </div>
//     </div>
//     <div className={styles.profilePreview}>
//       <h2>Mason Parker</h2>
//       <p>Graphics & UI/UX Designer</p>
//       <p>Denver, United States</p>
//       <p>Biography text...</p>
//     </div>
//   </div>
// );

// export default Themes;


// import React from 'react';
// import ThemeSelector from '../components/ThemeSelector';
// import styles from '../styles/Themes.module.css';

// const themesData = {
//   solids: [
//     "#000000", "#888888", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff", "#ff0000"
//   ],
//   linearGradients: [
//     "linear-gradient(to right, #ff7e5f, #feb47b)", 
//     "linear-gradient(to right, #ff6a00, #ee0979)",
//     "linear-gradient(to right, #00b09b, #96c93d)", 
//     "linear-gradient(to right, #ff9a9e, #fad0c4)",
//     "linear-gradient(to right, #a1c4fd, #c2e9fb)",
//     "linear-gradient(to right, #667eea, #764ba2)"
//   ],
//   radialGradients: [
//     "radial-gradient(circle, #ff9a9e, #fad0c4)",
//     "radial-gradient(circle, #00b09b, #96c93d)",
//     "radial-gradient(circle, #a1c4fd, #c2e9fb)",
//     "radial-gradient(circle, #667eea, #764ba2)"
//   ]
// };

// const Themes = () => {
//   return (
//     <div className={styles.themesPage}>
//       <h1 className={styles.applySkin}>Apply a skin to your profile</h1>
//       <div className={styles.colorSections}>
//         <div>
//           <h2>Solids</h2>
//           <ThemeSelector colors={themesData.solids} />
//         </div>
//         <div>
//           <h2>Linear Gradients</h2>
//           <ThemeSelector colors={themesData.linearGradients} />
//         </div>
//         <div>
//           <h2>Radial Gradients</h2>
//           <ThemeSelector colors={themesData.radialGradients} />
//         </div>
//       </div>
//       <div className={styles.profilePreview}>
//         <h2>Mason Parker</h2>
//         <p>Graphics & UI/UX Designer</p>
//         <p>Denver, United States</p>
//         <p>I am a visionary Graphics and UI/UX Designer...</p>
//       </div>
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
      <ThemeSelector setTheme={setTheme} />
      <ProfileCard theme={theme} />
    </div>
  );
};

export default Themes;


