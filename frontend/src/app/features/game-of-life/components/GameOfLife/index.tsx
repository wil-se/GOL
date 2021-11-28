import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';
import { Universe } from '../../model/Universe';

let universe;
let r = 0;

function GameOfLife({ play, reset }) {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef,
    );
    p5.background(255);
    p5.frameRate(8);
    // initialize the Walker object position at center of the window
    universe = new Universe(50, 20, 40);
    universe.randomSeed();
  };
  const draw = (p5: p5Types) => {
    if (play) universe.step(p5);
    if (r != reset) {
      r = reset;
      universe.reset();
    }
    universe.display(p5);
  };
  return <Sketch setup={setup} draw={draw} />;
}

export default GameOfLife;
