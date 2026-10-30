import React from 'react';
import ContactCard from './ContactCard';
import SectionTitle from './SectionTitle';
import translations from './translations';

const LeftColumn = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="left-column">
      <SectionTitle title={t.sections.contact} />
      <ContactCard type="phone" value="+374 55 75 55 43" />
      <ContactCard type="address" value={t.contact.address} />
      <ContactCard type="email" value="vladimir.saponjyan@gmail.com" />
      <ContactCard type="link" value="https://www.vladimirsaponjyan.com/" label={t.contact.personalWebsite} />
      <ContactCard type="link" value="https://linkedin.com/in/vladimir-saponjyan" label="LinkedIn" />
      <ContactCard type="link" value="https://github.com/vsaponjyan" label="GitHub" />

      <SectionTitle title={t.sections.techStack} />
      <ul>{t.techStack.map((item, i) => <li key={i}>{item}</li>)}</ul>

      <SectionTitle title={t.sections.education} />
      <ul>
        {t.education.map((item, i) => (
          <li key={i}>
            <b>{item.period}:</b> {item.description}
          </li>
        ))}
      </ul>

      <SectionTitle title={t.sections.languages} />
      <ul>{t.languages.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </div>
  );
};

export default LeftColumn;
