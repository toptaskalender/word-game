import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess';

function GuessResults({ validatedGuesses }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {rows.map((rowIndex) => {
        const guess = validatedGuesses[rowIndex];

        return <Guess key={rowIndex} guess={guess} />;
      })}
    </div>
  );
}

export default GuessResults;
