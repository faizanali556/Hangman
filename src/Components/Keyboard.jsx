import React from "react";

const Keyboard = ({
  handleGuess,
  disabled,
  guessedLetters,
  correctGuess,
  wrongGuess,
}) => {
  const firstRow = "qwertyuiop".split("");
  const secondRow = "asdfghjkl".split("");
  const thirdRow = "zxcvbnm".split("");

  const handleInput = (letter) => {
    handleGuess(letter);
  };
  const renderButton = (letter) => (
    <button
      onClick={() => handleInput(letter)}
      key={letter}
      disabled={
        disabled || correctGuess.includes(letter) || wrongGuess.includes(letter)
      }
      className={` m-1 p-2 ${
        disabled || wrongGuess.includes(letter)
          ? "bg-slate-900 text-white"
          : "bg-pink-200"
      } ${
        correctGuess.includes(letter)
          ? "bg-green-500 text-white"
          : "bg-pink-200"
      } w-[30px] xsm:w-[20px] md:w-12 h-10 rounded-md hover:bg-gray-400 focus:outline-none`}
    >
      {letter}
    </button>
  );

  return (
    <>
      <div className="flex flex-col items-center mb-8 overflow-hidden m-auto w-full  md:w-3/4 ">
        <div className="flex justify-center ">{firstRow.map(renderButton)}</div>
        <div className="flex justify-center">{secondRow.map(renderButton)}</div>
        <div className="flex justify-center">{thirdRow.map(renderButton)}</div>
      </div>

      <div></div>
    </>
  );
};

export default Keyboard;
