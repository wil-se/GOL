// index.tsx (containers/RandomWalkerPage)
import React from 'react';
import GameOfLife from '../../components/GameOfLife';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function GameOfLifePage({ play, reset, framerate, seed }){
  return (
    <div>
      <GameOfLife play={play} reset={reset} framerate={framerate} seed={seed}/>
    </div>
  );
};

export default GameOfLifePage;