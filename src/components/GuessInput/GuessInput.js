import React, { useState } from 'react';

function GuessInput({ isRunning, onAddNewGuess }) {
  const [guess, setGuess] = useState('');

  /* HELPERS */
  function _resetGuess() {
    setGuess('');
  }

  /* HANDLERS */
  function handleSubmit(event) {
    event.preventDefault();

    _resetGuess();

    onAddNewGuess(guess);
  }

  function handleGuessChange(event) {
    const guess = event.target.value;

    const upperCaseGuess = guess.toUpperCase();

    setGuess(upperCaseGuess);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        required
        pattern="[a-zA-Z]{5}"
        disabled={!isRunning}
        title="Please write exactly 5 letters 🤍"
        onChange={handleGuessChange}
      />
    </form>
  );
}

export default GuessInput;
