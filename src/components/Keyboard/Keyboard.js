import React from 'react';

import { LETTER_STATUSES } from '../../constants';

const KEYBOARD_ROWS = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

function Keyboard({ validatedGuesses }) {
  const letterStatuses = validatedGuesses.reduce((acc, curr) => {
    const guessLetters = curr;

    guessLetters.forEach(({ letter, status }) => {
      const accStatus = acc[letter];

      if (accStatus) {
        const currPriority = LETTER_STATUSES.indexOf(status);
        const prevPriority = LETTER_STATUSES.indexOf(accStatus);

        if (currPriority > prevPriority) {
          acc[letter] = status;
        }
      } else {
        acc[letter] = status;
      }
    });

    return acc;
  }, {});

  return (
    <div className="keyboard">
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {[...row].map((letter) => {
            const status = letterStatuses[letter];
            const _className = status ? `key ${status}` : 'key';

            return (
              <span key={letter} className={_className}>
                {letter}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;

/* HELPERS */
