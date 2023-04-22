import React from 'react';

import Banner from '../Banner';

function LostBanner({ answer, onRestartGameClick }) {
  return (
    <Banner
      status="sad"
      buttonOptions={{
        text: 'Restart Game',
        onClick: (event) => {
          onRestartGameClick(event);
        },
      }}
    >
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
