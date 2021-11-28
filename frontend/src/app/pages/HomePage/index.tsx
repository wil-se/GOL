import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import RandomWalkerPage from '../../features/random-walker/pages/RandomWalkerPage';
import GameOfLifePage from 'app/features/game-of-life/pages/GameOfLifePage';
import Button from 'react-bootstrap/Button';
import { Row, Col, Form } from 'react-bootstrap';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';


export function HomePage() {

  const [state, setstate] = useState({play:false, playstring:"Play"})
  const [reset, setreset] = useState({reset:0})
  const [slidervalue, setslidervalue] = useState({slidervalue:30}); 
  const [seed, setseed] = useState({seed:0})
  
  const changeState = () => {  
    if(state.play) {
      setstate({play:!state.play, playstring: "Play"});
    } else {
      setstate({play:!state.play, playstring: "Pause"});
    }
   }; 

  const changeReset = () => {  
   setreset({reset:++reset.reset});
  };

  const changeSeed = () => {  
    setseed({seed:++seed.seed});
   };
 
  const changeSlider = (event) => {
    setslidervalue({slidervalue: Number(event.target.value)});
  }
 
  return (
    <>
      <Helmet>
        <title>GAME OF LIFE</title>
        <meta name="description" content="GAME OF LIFE" />
      </Helmet>
      <h2>Game of Life</h2>
      <p>right click to spawn a cell</p>
      <Button onClick={changeState} style={{"margin": "0px 0px 10px 0px"}} variant="dark">{state.playstring}</Button>{' '}
      <Button onClick={changeReset} style={{"margin": "0px 0px 10px 0px"}} variant="dark">Reset</Button>{' '}
      <Button onClick={changeSeed} style={{"margin": "0px 0px 10px 0px"}} variant="dark">Seed</Button>{' '}
      <Row>
        <Col xs={2}>
          <RangeSlider min={1} max={60} step={1} value={slidervalue.slidervalue} onChange={ changeSlider } variant={"dark"}/>
        </Col>
      </Row>
      <GameOfLifePage play={state.play} reset={reset.reset} framerate={slidervalue.slidervalue} seed={seed.seed}/>
      {/* bonus */}
      {/* <RandomWalkerPage /> */}
    </>
  );
}

