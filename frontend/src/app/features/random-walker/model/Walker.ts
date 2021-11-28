import { randomIntFromInterval } from '../../../utils/js-utils';
import p5Types from 'p5';

interface IWalker {
  step();
  display(p5: p5Types);
}

export class Walker implements IWalker {
  x: number; // x-location
  y: number; // y-location

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public step() {
    const choice: number = randomIntFromInterval(1, 4);

    if (choice === 1) {
      this.x++;
    } else if (choice === 2) {
      this.x--;
    } else if (choice === 3) {
      this.y++;
    } else {
      this.y--;
    }
  }

  public display(p5: p5Types) {
    // to display as a dot
    p5.stroke(0);
    p5.point(this.x, this.y);
  }
}