import React, { useState } from 'react';
import FAQData from './faqs.json';
import './AccordionCompound.css';

const AccordionCompound = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-inner">
      {FAQData.map((item, index) => (
        <div key={item.id} className={`question ${activeIndex === index ? 'active' : ''}`}>
          <button
            className={`accordion ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.header}
          </button>
          <div className={`panel ${activeIndex === index ? 'active' : ''}`}>
            <p>{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionCompound;
