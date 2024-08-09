import React from "react";

function Display({ life, randomWord, letter, correctGuess }) {
  return (
    <div className="flex justify-center text-center items-center mb-24 relative">
      {life === 0 ? (
        // When life is 0, show the word only once
        <div>
          <span className="text-5xl flex justify-center absolute   mb-[50px] top-0  text-red-500 w-[40px]">
            {randomWord.word}
          </span>
        </div>
      ) : (
        // When life is not 0, show the letters or "-"
        <div className="absolute top-0  flex justify-center">
          {letter.split("").map((letter, index) => (
            <span key={index} className="text-5xl  text-red-500 w-[40px]">
              {correctGuess.includes(letter) ? letter : "-"}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Display;
