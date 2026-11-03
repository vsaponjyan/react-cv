import React from 'react';
import translations from './translations';

const Header = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="header">
      <h1>{t.name}</h1>
    </div>
  );
};

export default Header;