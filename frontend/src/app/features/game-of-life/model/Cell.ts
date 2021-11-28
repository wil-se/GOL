import p5Types from 'p5';

export class Cell {
    age: number;
    x: number;
    y: number;
    
    constructor(x: number, y: number) {
        this.age = 0;
        this.x = x;
        this.y = y;
    }

    public display(p5: p5Types, size: number) {  ;
        if(this.age > 0){
            p5.fill(p5.color(0, 0, 0))
        } else {
            p5.fill(p5.color(225, 255, 225))
        }

        if(this.age > 0){
            p5.fill(p5.color(120, 180, 100+this.age))
        } else {
            p5.fill(p5.color(255, 255, 255))
        }

        p5.rect(this.x, this.y, size, size);
    }
}
    