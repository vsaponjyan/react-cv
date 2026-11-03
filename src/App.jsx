import React, { useState } from 'react';
import './styles.css';
import Header from './Header';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import html2pdf from 'html2pdf.js';

function App() {
  const [lang, setLang] = useState('en');

  
  const exportPDF = async () => {
    const element = document.getElementById('cv');
  
    await document.fonts.ready;
  
    const margin = 0.5;
    const pageW = 8.5;
    const minPageH = 11;
    const innerWpx = (pageW - margin * 2) * 96; 
  
    
    const prevWidth = element.style.width;
    const prevMaxWidth = element.style.maxWidth;
    element.style.width = `${innerWpx}px`;
    element.style.maxWidth = 'none';
    const heightPx = element.scrollHeight;
    element.style.width = prevWidth;
    element.style.maxWidth = prevMaxWidth;
  
    const contentH = heightPx / 96; 
    
    const pageH = Math.max(minPageH, contentH + margin * 2 + 0.4);
  
    html2pdf()
      .set({
        margin,
        filename:
          lang === 'am'
            ? 'Vladimir_Saponjyan_CV_AM.pdf'
            : 'Vladimir_Saponjyan_CV_EN.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: [pageW, pageH], orientation: 'portrait' },
        pagebreak: { mode: ['css'] },
        enableLinks: true,
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