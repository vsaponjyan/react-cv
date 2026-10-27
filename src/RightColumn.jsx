import React from 'react';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const workExperience = [
  {
  role: 'AI Engineer',
  company: 'AI Research (Personal) · Self-employed',
  period: 'Nov 2025 – Present',
  location: 'Yerevan, Armenia',
  responsibilities: [
    {
      text: (
        <>
          Developed and deployed version 2 of{' '}
          <a
            href="https://armherbs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            armherbs.com
          </a>
          {' '}— an AI-powered herbal medicine search platform
          that helps users find herbs based on their medicinal uses.
        </>
      ),
      tech: 'Python, React, FastAPI, Vector Embeddings, RAG',
    },
    {
      text:
        'Developed an ML model to predict which registered users are likely to pay for a service, using user data and the Gemini API during the development process. Addressed severe class imbalance and improved performance by ~1% over the baseline.',
      tech: 'Python, XGBoost, Gemini API, SMOTE',
    },
  ],
},
  {
    role: 'Artillery Battery Commander',
    company: 'Armed Forces of Armenia · Full-time',
    period: 'Jul 2006 – Mar 2023',
    responsibilities: [
      { text: 'Responsible for planning and execution of training and operational tasks.' },
      { text: 'Over a period of 13 years, trained two generations of conscripts annually as artillery specialists and prepared them for reserve service.' },
      { text: 'Held leadership roles over units ranging from 23 to 256 personnel in various operational contexts.' },
      { text: 'Participated in combat operations during the 2020 Artsakh War, as well as armed engagements on 16 November 2021 and 13 September 2022.' },
      { text: 'Designed surface trench systems optimized for mountain warfare for mortar batteries, later used as a reference model within the Armenian Armed Forces.' },
    ],
  },
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
      {workExperience.map((job, i) => (
        <div className="job" key={i}>
          <h4 style={{ color: "#a10000" }}>{job.company} | {job.period}</h4>
          <p>
            <b>{job.role}</b>
            {job.location && <span className="job-location"> · {job.location}</span>}
          </p>
          <ul>
            {job.responsibilities.map((item, j) => (
              <li key={j}>
                {item.text}
                {item.tech && <div className="tech-stack">Tech stack: {item.tech}</div>}
              </li>
            ))}
          </ul>
        </div>
      ))}

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
