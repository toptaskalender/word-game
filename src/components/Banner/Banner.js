import React from 'react';

import Button from '../Button';

function Banner({ status, buttonOptions, children }) {
  const _className = status === 'happy' ? 'happy' : 'sad';

  return (
    <div className={`banner ${_className}`}>
      {children}
      {buttonOptions && (
        <Button onClick={buttonOptions.onClick}>{buttonOptions.text}</Button>
      )}
    </div>
  );
}

export default Banner;
