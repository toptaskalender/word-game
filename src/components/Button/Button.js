import React from 'react';

function Button({ className, onClick, children }) {
  const _className = className
    ? `button restart ${className}`
    : `button restart`;

  function handleClick(event) {
    onClick(event);
  }

  return (
    <button className={_className} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
