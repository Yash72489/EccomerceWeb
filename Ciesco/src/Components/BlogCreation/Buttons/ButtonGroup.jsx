import React from 'react'



export const ButtonGroup = ({ button, isSelected, setSelected }) => {
  return (
    <>
      <div className="btn-content">
        {button.map((btn, index) => (
          <button
            className={isSelected == index ? "Selected-btn" : "button"}
            onClick={() => setSelected(index) }
         key={index} >
        {btn.icon}   {btn.person}
          </button>
        ))}
      </div>
    </>
  );
};

