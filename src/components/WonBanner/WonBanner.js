import React from 'react';

import Banner from '../Banner';

function WonBanner({ guessCount, onRestartGameClick }) {
  const text = guessCount === 1 ? `1 guess` : `${guessCount} guesses`;

  return (
    <Banner
      status="happy"
      buttonOptions={{
        text: 'Restart Game',
        onClick: (event) => {
          onRestartGameClick(event);
        },
      }}
    >
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{text}</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
