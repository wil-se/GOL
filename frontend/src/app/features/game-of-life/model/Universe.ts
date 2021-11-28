import { Cell } from "./Cell";
import p5Types from 'p5';
import { randomIntFromInterval } from "app/utils/js-utils";
import { throws } from "assert";


export class Universe{
    field: Array<Array<Cell>>;
    rows: number;
    cols: number;
    cellSideLength: number;

    public constructor(rows: number, cols: number, cellSideLength: number){
        this.rows = rows;
        this.cols = cols;
        let temp = new Array<Array<Cell>>();
        for(var row = 0; row < rows; row++) {
            temp[row] = new Array<Cell>();
            for(var col = 0; col < cols; col++) {
                temp[row].push(new Cell(row*cellSideLength, col*cellSideLength));
            }
        }
        this.field = temp;
        this.cellSideLength = cellSideLength;
    }

    public printField(){
        var mappedField = Object.values(this.field).map(function(cell) {
            var cols = Object.values(cell).map(function(el) {
                return el.age;
            })
            return cols;
        })
        console.table(mappedField);
    }

    public randomSeed() {
        for(var row = 0; row < this.rows; row++) {
            for(var col = 0; col < this.cols; col++) {
                this.field[row][col].age = randomIntFromInterval(0, 1);
            }
        }
    }

    public reset() {
        let temp = new Array<Array<Cell>>();
        for(var row = 0; row < this.rows; row++) {
            temp[row] = new Array<Cell>();
            for(var col = 0; col < this.cols; col++) {
                temp[row].push(new Cell(row*this.cellSideLength, col*this.cellSideLength));
            }
        }
        this.field = temp;
    }

    public getAliveNeighbors(row: number, col: number){
        var count = 0;
        // get neighbors like if matrix lies on a toro
        for(let x=1; x>-2; x--){
            for(let y=1; y>-2; y--){
                let rrow = row+x;
                let ccol = col+y;
                if (!(x == 0 && y == 0)){
                    if(rrow < 0) rrow = this.rows - 1;
                    if(rrow >= this.rows) rrow = 0;
                    if(ccol < 0) ccol = this.cols - 1;
                    if(ccol >= this.cols) ccol = 0;
                    if(this.field[rrow][ccol].age > 0) count++;
                }
            }
        }
        return count;
    }

    public step(p5: p5Types) {
        var temp = new Array<Array<Cell>>();
        for(var row = 0; row < this.rows; row++) {
            temp[row] = new Array<Cell>();
            for(var col = 0; col < this.cols; col++) {
                var aliveNeighbors = this.getAliveNeighbors(row, col);
                var cell = new Cell(row*this.cellSideLength, col*this.cellSideLength)
                if(this.field[row][col].age == 0 && aliveNeighbors == 3){
                    cell.age = 1;
                    temp[row][col] = cell;
                }
                // sopravvivenza
                else if(this.field[row][col].age > 0 && (aliveNeighbors == 3 || aliveNeighbors == 2)){
                    cell.age = this.field[row][col].age+1;
                    temp[row][col] = cell;
                }
                // morte
                else{
                    temp[row][col] = new Cell(row*this.cellSideLength, col*this.cellSideLength);
                }
            }
        }
        this.field = temp;
    }

    public display(p5: p5Types) {  
        if(p5.mouseIsPressed) {
            var col = Math.floor(p5.mouseY / this.cellSideLength);
            var row = Math.floor(p5.mouseX / this.cellSideLength);
            if(col >= this.cols || col < 0 || row >= this.rows || row < 0) return;     
            if(this.field[row][col].age > 0) this.field[row][col].age = 0;
            if(this.field[row][col].age == 0) this.field[row][col].age = 1;
        }
        for(var row = 0; row < this.rows; row++) {
            for(var col = 0; col < this.cols; col++) {
                this.field[row][col].display(p5, this.cellSideLength);
            }
        }
    }
}