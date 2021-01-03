import React, {useState} from 'react';

const Accordion = ({items}) => {
  const [activeIndexes, setActiveIndexes] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndexes(index);
  }

  const renderedItems = items.map((item, index) => {
    return (
        <React.Fragment key={index}>
          <div className={`title ${index === activeIndexes ? 'active' : ''}`} onClick={() => onTitleClick(index)}>
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <div className={`content ${index === activeIndexes ? 'active' : ''}`}>
            <p>{item.content}</p>
          </div>
        </React.Fragment>
    );
  });
  return (
      <div className="ui styled accordion">
        {renderedItems}
      </div>
  );
};

export default Accordion;