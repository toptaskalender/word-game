import React, { useState } from 'react';

import { GAME_STATUSES, NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Keyboard from '../Keyboard';
import LostBanner from '../LostBanner';
import WonBanner from '../WonBanner';

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState(GAME_STATUSES.RUNNING);

  const hasWon = gameStatus === GAME_STATUSES.WON;
  const hasLost = gameStatus === GAME_STATUSES.LOST;
  const isRunning = !hasWon && !hasLost;

  /* HELPERS */
  function _resetGueses() {
    setGuesses([]);
  }

  function _resetGameStatus() {
    setGameStatus(GAME_STATUSES.RUNNING);
  }

  function _initializeNewAnswer() {
    const answer = sample(WORDS);

    setAnswer(answer);
  }

  function _restartGame() {
    _resetGueses();
    _resetGameStatus();

    _initializeNewAnswer();
  }

  const validatedGuesses = guesses.map((guess) =>
    checkGuess(guess.value, answer),
  );

  /* HANDLERS */
  function handleRestartGameClick() {
    _restartGame();
  }

  function handleAddNewGuess(value) {
    const nextGuesses = [
      ...guesses,
      {
        id: crypto.randomUUID(),
        value,
      },
    ];

    if (value === answer) {
      setGameStatus(GAME_STATUSES.WON);
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(GAME_STATUSES.LOST);
    }

    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResults validatedGuesses={validatedGuesses} />
      <GuessInput isRunning={isRunning} onAddNewGuess={handleAddNewGuess} />
      <Keyboard validatedGuesses={validatedGuesses} />
      {hasWon && (
        <WonBanner
          guessCount={guesses.length}
          onRestartGameClick={handleRestartGameClick}
        />
      )}
      {hasLost && (
        <LostBanner
          answer={answer}
          onRestartGameClick={handleRestartGameClick}
        />
      )}
    </>
  );
}

export default Game;
