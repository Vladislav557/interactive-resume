import React, { useState, useEffect } from 'react';

import styles from './ThemeSwitch.module.scss';

const ThemeSwitch = () => {
  const [isDark, setDark] = useState(false);

  const themeText = isDark ? 'Light Theme' : 'Dark Theme';

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div
      className={styles.ThemeSwitch}
      onClick={() => setDark(!isDark)}
    >
      <span>{themeText}</span>
    </div>
  )
};


export default ThemeSwitch;
