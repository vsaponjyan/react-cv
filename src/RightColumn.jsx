import React from 'react';
import SectionTitle from './SectionTitle';

const workExperience = {
  company: 'Armed Forces of Armenia',
  period: '2006 – 2024',
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
  leadership: [
    'Team leadership',
    'Operational planning',
    'Responsibility for complex systems',
  ],
  analytical: [
    'Problem analysis',
    'Structured problem solving',
    'System analysis',
    'Logical reasoning',
  ],
};

const RightColumn = () => {
  return (
    <div className="right-column">
      <SectionTitle title="Work Experience" />
      <h4>
        {workExperience.company} | {workExperience.period}
      </h4>
      <p>
        <b>{workExperience.role}</b>
      </p>
      <ul>
        {workExperience.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <SectionTitle title="Technical Experience" />
      <ul>
        {technicalExperience.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <SectionTitle title="Core Skills" />

      <h4>Leadership & Management</h4>
      <ul>
        {coreSkills.leadership.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h4>Analytical Thinking</h4>
      <ul>
        {coreSkills.analytical.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RightColumn;
