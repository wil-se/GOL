import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import RandomWalkerPage from '../../features/random-walker/pages/RandomWalkerPage';
import GameOfLifePage from 'app/features/game-of-life/pages/GameOfLifePage';
import Button from 'react-bootstrap/Button';


export function HomePage() {

  const [state, setstate] = useState({play:false})
  const [reset, setreset] = useState({reset:0})
  

  const changeState = () => {  
    setstate({play:!state.play,}); 
   }; 

  const changeReset = () => {  
   setreset({reset:++reset.reset});
  }; 

  return (
    <>
      <Helmet>
        <title>GAME OF LIFE</title>
        <meta name="description" content="GAME OF LIFE" />
      </Helmet>
      <h2>Game of Life</h2>
      <Button onClick={changeState} style={{"margin": "0px 0px 10px 0px"}} variant="dark">Play/Pause</Button>{' '}
      <Button onClick={changeReset} style={{"margin": "0px 0px 10px 0px"}} variant="dark">Reset</Button>{' '}
      <GameOfLifePage play={state.play} reset={reset.reset}/>
      {/* bonus */}
      {/* <RandomWalkerPage /> */}
    </>
  );
}

