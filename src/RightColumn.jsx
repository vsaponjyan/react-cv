import React from 'react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';
import translations from './translations';

const RightColumn = ({ lang }) => {
  const t = translations[lang];
  const isMobile = window.innerWidth < 768;

  return (
    <motion.div
      className="right-column"
      initial={{ opacity: 0, x: isMobile ? 0 : 150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <SectionTitle title={t.sections.workExperience} />
      {t.workExperience.map((job, i) => (
        <div className="job" key={i}>
          <h4 style={{ color: "#a10000" }}>{job.company} | {job.period}</h4>
          <p>
            <b>{job.role}</b>
            {job.location && <span className="job-location"> · {job.location}</span>}
          </p>
          <ul>
            {job.responsibilities.map((item, j) => (
              <li key={j}>
                {item.preLink != null ? (
                  <>
                    {item.preLink}
                    <a href="https://armherbs.com" target="_blank" rel="noopener noreferrer">
                      {item.linkText}
                    </a>
                    {item.postLink}
                  </>
                ) : (
                  item.text
                )}
                {item.tech && <div className="tech-stack">Tech stack: {item.tech}</div>}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <SectionTitle title={t.sections.coreSkills} />
      <h4>{t.sections.leadership}</h4>
      <ul>{t.coreSkills.leadership.map((item, i) => <li key={i}>{item}</li>)}</ul>

      <h4>{t.sections.analytical}</h4>
      <ul>{t.coreSkills.analytical.map((item, i) => <li key={i}>{item}</li>)}</ul>

      {/* Subtle floating circle */}
      <svg className="decor" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" fill="#a10000" opacity="0.08" />
      </svg>
    </motion.div>
  );
};

export default RightColumn;
