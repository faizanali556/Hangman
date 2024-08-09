import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HangmanFigure from './components/HangManFigure';
import Word from './components/Word';
import Keyboard from './components/Keyboard';
import Result from './components/Result';





function App() {



  const wordsWithCategories = [
    { word: 'lion', category: 'Animal' },
    { word: 'tiger', category: 'Animal' },
    { word: 'elephant', category: 'Animal' },
    { word: 'biryani', category: 'Food' },
    { word: 'pasta', category: 'Food' },
    { word: 'burger', category: 'Food' },
    { word: 'javascript', category: 'Technology' },
    { word: 'react', category: 'Technology' },
    { word: 'database', category: 'Technology' },
    { word: 'mountain', category: 'Geography' },
    { word: 'river', category: 'Geography' },
    { word: 'desert', category: 'Geography' },
  ];
  

  function getRandomWordWithCategory() {
    const randomIndex = Math.floor(Math.random() * wordsWithCategories.length);
    return wordsWithCategories[randomIndex];
  }

 


  const [gameData, setGameData] = useState(getRandomWordWithCategory()); 
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing');
  var [winScore, setWinScore] = useState(0);

  const maxWrongGuesses = 6;

  // console.log("correct guess : ", correctGuesses.length);
  // console.log("correct guess : ", gameData);
  // console.log("wrong guess : ", wrongGuesses);
  // console.log("first : ", [...new Set(gameData.word)]);
  // console.log("second : ", correctGuesses.length , [...new Set(gameData.word)].length);
  // console.log("third : " , wrongGuesses.length >= maxWrongGuesses)

  useEffect(() => {
    if (correctGuesses.length === [...new Set(gameData.word)].length) {
      setGameStatus('won');
      setWinScore(winScore+1);
      console.log(winScore);
    } else if (wrongGuesses.length >= maxWrongGuesses) {
      setGameStatus('lost');
    }
  }, [correctGuesses, wrongGuesses]);

  // console.log(winScore);

  return (
    <div className="bg-cyan-900 min-h-screen flex flex-col justify-center items-center text-white">
      <Header category={gameData.category} />
      <HangmanFigure wrongGuesses={wrongGuesses.length} />
      <Word word={gameData.word} correctGuesses={correctGuesses} />
      <Keyboard 
        onGuess={handleGuess} 
        disabled={gameStatus !== 'playing'} 
        correctGuesses={correctGuesses}
        wrongGuesses={wrongGuesses}
        score={winScore}
      />
      <Result 
        gameStatus={gameStatus} 
        onReset={resetGame} 
        onNextRound={NextRound} 
        word={gameData.word} 
      />
    
    </div>
  );


  function handleGuess(letter) {
    if (gameData.word.includes(letter)) {
      setCorrectGuesses([...correctGuesses, letter]);
      // console.log(letter , [...correctGuesses, letter]);
    } else {
      setWrongGuesses([...wrongGuesses, letter]);
    }
  }

  function resetGame() {
    setGameData(getRandomWordWithCategory()); 
    setCorrectGuesses([]);
    setWrongGuesses([]);
    setGameStatus('playing');
    setWinScore("0")
  }

  function NextRound() {
    setGameData(getRandomWordWithCategory()); 
    setCorrectGuesses([]);
    setWrongGuesses([]);
    setGameStatus('playing');
  }

}

export default App;
