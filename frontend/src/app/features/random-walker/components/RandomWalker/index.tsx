import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';
import { Walker } from '../../model/Walker';

const RandomWalker: React.FC = () => {
  let walker;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef,
    );
    p5.background(255);
    // initialize the Walker object position at center of the window
    walker = new Walker(window.innerWidth / 2, window.innerHeight / 2);
  };

  const draw = (p5: p5Types) => {
    walker.step();
    walker.display(p5);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default RandomWalker;