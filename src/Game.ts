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
                    let winner = this.checkWinner();
                    if(winner != null){
                       let winnerDiv = document.querySelector('.divWinner')
                       winnerDiv?.classList.add("winner");
                       let winnerDivP = document.querySelector('.divWinner div');
                       if(winnerDivP){
                        winnerDivP.innerHTML = `le gagnant est ${winner.name}`;

                       }
                    }
                }
            } else {
                alert("case déja occupée")
            }
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


    // Dans votre classe Game

checkWinner(): Player | null {
    let squares = document.querySelectorAll<HTMLDivElement>(".square");

    // Vérification des lignes
    for (let i = 0; i < 9; i += 3) {
        if (this.checkRow(squares[i], squares[i + 1], squares[i + 2])) {
            return this.getPlayerBySymbol(squares[i].innerText);
        }
    }

    // Vérification des colonnes
    for (let i = 0; i < 3; i++) {
        if (this.checkRow(squares[i], squares[i + 3], squares[i + 6])) {
            return this.getPlayerBySymbol(squares[i].innerText);
        }
    }

    // Vérification des diagonales
    if (this.checkRow(squares[0], squares[4], squares[8])) {
        return this.getPlayerBySymbol(squares[0].innerText);
    }
    if (this.checkRow(squares[2], squares[4], squares[6])) {
        return this.getPlayerBySymbol(squares[2].innerText);
    }

    return null;
}

checkRow(cell1: HTMLDivElement, cell2: HTMLDivElement, cell3: HTMLDivElement): boolean {
    return cell1.innerText.trim() !== '' &&
        cell1.innerText === cell2.innerText &&
        cell1.innerText === cell3.innerText;
}

getPlayerBySymbol(symbol: string): Player | null {
    if (symbol === this._player1.letter) {
        return this._player1;
    } else if (symbol === this._player2.letter) {
        return this._player2;
    }
    return null;
}

}