import React from 'react';

import { range } from '../../utils';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : `cell`;

  return <span className={className}>{letter}</span>;
}

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((cellIndex) => {
        const info = guess?.[cellIndex];

        return (
          <Cell key={cellIndex} letter={info?.letter} status={info?.status} />
        );
      })}
    </p>
  );
}

export default Guess;
