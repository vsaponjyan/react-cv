import React from 'react';

const ContactCard = ({ type, value, label }) => {
  let link = value;
  if (type === 'email') link = `mailto:${value}`;
  if (type === 'phone') link = `tel:${value}`;

  return (
    <div className="contact-card">
      {type === 'link' ? (
        <a href={value} target="_blank" rel="noopener noreferrer">{label || value}</a>
      ) : (
        <a href={link}>{value}</a>
      )}
    </div>
  );
};

export default ContactCard;
