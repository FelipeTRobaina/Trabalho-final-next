'use client';

import { useState, useEffect } from 'react';
import Profile from '../components/Profile';
import Switch from '../components/Switch';
import Links from '../components/Links';
import SocialLinks from '../components/SocialLinks';

function Paginainicial() {
  // A lógica volta para cá
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  return (
    <div className="menucentral">
      <Profile />
      <Switch toggleTheme={toggleTheme} isLightMode={isLightMode} />
      <Links />
      <SocialLinks />
    </div>
  );
}

export default Paginainicial;