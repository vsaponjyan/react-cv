import React from 'react';
import Header from './Header';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import './styles.css';
import html2pdf from 'html2pdf.js';
function App() {
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
      <button onClick={exportPDF} className="export-btn">Export to PDF</button>
      <div id="cv" className="cv-container">
        <Header />
        <div className="cv-columns">
          <LeftColumn />
          <RightColumn />
        </div>
        <div className="footer-note">
          CV generated with ❤️ using React & HTML/CSS
        </div>
      </div>
    </div>
  );
}

export default App;
