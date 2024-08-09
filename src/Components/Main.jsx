import React, { useState, useEffect } from "react";
import Keyboard from "./Keyboard";
import Display from "./Display";
import Header from "./Header";
import Footer from "./Footer";
function Main() {
  const items = [
    { word: "lion", category: "Animal" },
    { word: "tiger", category: "Animal" },
    { word: "elephant", category: "Animal" },
    { word: "biryani", category: "Food" },
    { word: "pasta", category: "Food" },
    { word: "burger", category: "Food" },
    { word: "javascript", category: "Technology" },
    { word: "react", category: "Technology" },
    { word: "database", category: "Technology" },
    { word: "mountain", category: "Geography" },
    { word: "river", category: "Geography" },
    { word: "desert", category: "Geography" },
  ];
  let updatedGuesses;
  const [gameStatus, setGameStatus] = useState("playing");
  const [life, setlife] = useState(6);
  let win = false;
  const [correctGuess, setCorrectGuess] = useState([]);
  const [wrongGuess, setWrongGuess] = useState([]);
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };

  const Reset = () => {
    setWrongGuess([]);
    setCorrectGuess([]);
    setlife(6);
  };
  const [randomWord, setRandomWord] = useState(getRandomWord());

  //////////////useEffect ///////////////////////

  useEffect(() => {
    if (life === 0 || correctGuess.join("") === randomWord.word) {
      setTimeout(() => {
        setRandomWord(getRandomWord());

        Reset();
      }, 1000);
    }
  }, [life, correctGuess, randomWord.word]);

  //   handleGuess function

  const handleGuess = (letter) => {
    if (randomWord.word.includes(letter)) {
      updatedGuesses = randomWord.word.split("").map((char, index) => {
        return char === letter ? letter : correctGuess[index];
      });

      if (updatedGuesses.join("") === randomWord.word) {
        win = true;
      }

      setCorrectGuess(updatedGuesses);
      console.log(randomWord.word);
      console.log(updatedGuesses);
    } else {
      setWrongGuess([...wrongGuess, letter]);
      console.log(letter, [...wrongGuess, letter]);
      setlife(Math.max(0, life - 1));
    }
  };

  return (
    <div className="text-center mt-40">
      <Header category={randomWord.category} />
      <Display
        life={life}
        letter={randomWord.word}
        correctGuess={correctGuess}
        randomWord={randomWord}
      />
      <div
        className={`text-5xl ${
          correctGuess.join("") === randomWord.word ? "" : "hidden"
        }  text-black text-center absolute  md:pl-[550px] pl-[200px] flex justify-center top-20 m-auto`}
      >
        Winner
      </div>
      <span
        className={`absolute  pl-[200px]  md:pl-[0] top-20 m-auto flex justify-center ${
          life === 0 ? "" : "hidden"
        } text-red-700 mb-8  lg:left-[600px] text-4xl`}
      >
        You Lose!
      </span>
      <Keyboard
        disabled={gameStatus !== "playing"}
        handleGuess={handleGuess}
        correctGuess={correctGuess}
        wrongGuess={wrongGuess}
      />
      <Footer />

      <span className="text-3xl m-auto sm:text-center text-fuchsia-500 md:pl-[500px] ">
        Your Life :{life}
      </span>
    </div>
  );
}

export default Main;
