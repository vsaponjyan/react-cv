import React from 'react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const workExperience = {
  company: 'Armed Forces of Armenia',
  period: '2006 – 2023',
  role: 'Artillery Battery Commander',
  responsibilities: [
    'Command and control of artillery units',
    'Strategic planning and operational coordination',
    'Map reading, topography, and terrain analysis',
    'Leadership and team management under pressure',
    'Decision-making in high-responsibility environments',
  ],
};

const technicalExperience = [
  'Python programming (training tasks & problem solving)',
  'Machine Learning concepts and algorithms',
  'React / JavaScript learning projects',
  'Algorithmic thinking and structured solutions',
];

const coreSkills = {
  leadership: ['Team leadership', 'Operational planning', 'Responsibility for complex systems'],
  analytical: ['Problem analysis', 'Structured problem solving', 'System analysis', 'Logical reasoning'],
};

const RightColumn = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <motion.div
      className="right-column"
      initial={{ opacity: 0, x: isMobile ? 0 : 150 }} // ավելի նկատելի slide
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <SectionTitle title="Work Experience" />
      <h4 style={{ color: "#a10000" }}>{workExperience.company} | {workExperience.period}</h4>
      <p><b>{workExperience.role}</b></p>
      <ul>
        {workExperience.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <SectionTitle title="Technical Experience" />
      <ul>{technicalExperience.map((item, i) => <li key={i}>{item}</li>)}</ul>

      <SectionTitle title="Core Skills" />
      <h4>Leadership & Management</h4>
      <ul>{coreSkills.leadership.map((item, i) => <li key={i}>{item}</li>)}</ul>

      <h4>Analytical Thinking</h4>
      <ul>{coreSkills.analytical.map((item, i) => <li key={i}>{item}</li>)}</ul>

      {/* Subtle floating circle */}
      <svg className="decor" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" fill="#a10000" opacity="0.08" />
      </svg>
    </motion.div>
  );
};

export default RightColumn;
