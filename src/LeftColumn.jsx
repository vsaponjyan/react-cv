import React from 'react';
import ContactCard from './ContactCard';
import SectionTitle from './SectionTitle';

const techStack = [
  'Python, JavaScript',
  'Machine Learning fundamentals',
  'Algorithms & Computer Architecture',
  'Linux & C Programming ',
  'Data Structures & OOP',
];

const education = [
  { period: '2024 – 2025', description: 'Picsart Academy — Computer Architecture, C, Python, Math, Machine Learning, Data Science' },
  { period: '2024', description: 'Armenian Code Academy — JavaScript Programming' },
  { period: '2006 – 2010', description: 'Vazgen Sargsyan Military Academy — Military Officer Education (Gold Medal)' },
  { period: '1996 – 2006', description: 'Secondary School No. 180 — Graduated with Honors' },
];

const languages = [
  'Armenian — Native',
  'Russian — Fluent',
  'English — Intermediate (B1)',
];

const LeftColumn = () => {
  return (
    <div className="left-column">
      <SectionTitle title="Contact" />
      <ContactCard type="phone" value="+374 55 75 55 43" />
      <ContactCard type="address" value="Yerevan / Armenia / 0022" />
      <ContactCard type="email" value="vladimir.saponjyan@gmail.com" />
      <ContactCard type="link" value="https://www.vladimirsaponjyan.com/" label="Personal website" />
      <ContactCard type="link" value="https://linkedin.com/in/vladimir-saponjyan" label="LinkedIn" />
      <ContactCard type="link" value="https://github.com/vsaponjyan" label="GitHub" />

      <SectionTitle title="Tech Stack" />
      <ul>{techStack.map((item, i) => <li key={i}>{item}</li>)}</ul>

      <SectionTitle title="Education" />
      <ul>
        {education.map((item, i) => (
          <li key={i}>
            <b>{item.period}:</b> {item.description}
          </li>
        ))}
      </ul>

      <SectionTitle title="Languages" />
      <ul>{languages.map((lang, i) => <li key={i}>{lang}</li>)}</ul>
    </div>
  );
};

export default LeftColumn;
