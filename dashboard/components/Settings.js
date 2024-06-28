// components/Settings.js
import React, { useState } from 'react';
import styles from '../styles/Settings.module.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
  });

  const handleToggle = (e) => {
    const { name } = e.target;
    setSettings({ ...settings, [name]: !settings[name] });
  };

  return (
    <div className={styles.settingsContainer}>
      <h1>Settings</h1>
      <div className={styles.settingItem}>
        <label>
          <input
            type="checkbox"
            name="notifications"
            checked={settings.notifications}
            onChange={handleToggle}
          />
          Enable Notifications
        </label>
      </div>
      <div className={styles.settingItem}>
        <label>
          <input
            type="checkbox"
            name="darkMode"
            checked={settings.darkMode}
            onChange={handleToggle}
          />
          Enable Dark Mode
        </label>
      </div>
    </div>
  );
};

export default Settings;
