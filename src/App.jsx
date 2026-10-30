import React, { useState } from 'react';
import './styles.css';
import Header from './Header';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import html2pdf from 'html2pdf.js';

function App() {
  const [lang, setLang] = useState('en');

  const exportPDF = () => {
    const element = document.getElementById('cv');
    html2pdf()
      .set({
        margin: 0.5,
        filename: 'Vladimir_Saponjyan_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
      })
      .from(element)
      .save();
  };

  return (
    <div>
      <div className="top-bar">
        <button onClick={exportPDF} className="export-btn">
          Export to PDF
        </button>
        <button
          onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
          className="lang-toggle-btn"
        >
          {lang === 'en' ? '🇦🇲 Armenian' : '🇬🇧 English'}
        </button>
      </div>

      <div id="cv" className="cv-container">
        <Header lang={lang} />
        <div className="cv-columns">
          <LeftColumn lang={lang} />
          <RightColumn lang={lang} />
        </div>
      </div>
    </div>
  );
}

export default App;
