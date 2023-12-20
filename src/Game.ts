import { Grid } from './Grid';
import {Player} from './Player';

export class Game{
    private _turn: number = 0;
 
    private _player1: Player;
 
    private _player2: Player;
    
    private _finish : boolean = false;

    constructor( player1 : Player, player2 : Player){
        this._turn;
        this._player1 = player1;
        this._player2 = player2;
    }

    party(player1: Player,player2 : Player){
    let squares=  document.querySelectorAll<HTMLDivElement>(".square");
    let grid = new Grid;

    squares.forEach((square,index) => {
        square.addEventListener("click",()=>{
            if (square.innerText.trim() == '') {
                let playerTurn = this.turnLogic(player1, player2);
                if(playerTurn ){
                    grid.setSymbol(square, playerTurn)
                }
            } else {
                alert("case déja occupée")
            }
            let table = [grid.getGridValues(square)];

            grid.checkWinner(table)
            /**
             * ! a verifier 
             */
            console.log(grid.checkWinner(table));
        })
    });
    }

    turnLogic(player1 : Player,player2 : Player){
        this._turn++;
        console.log(this._turn);
        if(this._turn %2 == 1){
            console.log("Coup de " + player1.name);
            return player1;
        }else if(this._turn %2 == 0){
            console.log("Coup de " + player2.name);
            return player2;
        }
    }


    public get turn(): number {
        return this._turn;
    }
    public set turn(value: number) {
        this._turn = value;
    }
    public get player1(): Player {
        return this._player1;
    }
    public set player1(value: Player) {
        this._player1 = value;
    }
    public get player2(): Player {
        return this._player2;
    }
    public set player2(value: Player) {
        this._player2 = value;
    }


}