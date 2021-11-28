// index.tsx (containers/RandomWalkerPage)
import React from 'react';
import GameOfLife from '../../components/GameOfLife';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function GameOfLifePage({ play, reset }){
  return (
    <div>
      <GameOfLife play={play} reset={reset}/>
    </div>
  );
};

export default GameOfLifePage;