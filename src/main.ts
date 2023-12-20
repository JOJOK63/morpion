import './style.scss'
import {Player} from './Player';
import {Game} from './Game';
import { Grid } from './Grid';
import * as square from './Square'

let player1:Player;
let player2:Player;
let game: Game;

let informationsNewPlayers = document.querySelector('.informations-new-players') as HTMLElement ;
let inputPlayer1Name = document.getElementById('p1') as HTMLInputElement;
let inputPlayer2Name = document.getElementById('p2') as HTMLInputElement;
let informationsPlayer1 = document.querySelector('.ip1');
let informationsPlayer2 = document.querySelector('.ip2');

inputPlayer2Name?.addEventListener("keyup",(e)=>{
    if(e.key === "Enter"){
        player1 = new Player(1, inputPlayer1Name.value,"X",0);
        player2 = new Player(2, inputPlayer2Name.value,"O",0);
       if(informationsNewPlayers){
        informationsNewPlayers.style.display = 'none'; // Pour masquer l'élément
       }
       if(informationsPlayer1 && informationsPlayer2){
        informationsPlayer1.innerHTML = player1.name + " : " + player1.score;
        informationsPlayer2.innerHTML = player2.name + " : " + player2.score;
       }

       game = new Game(player1,player2);
    
        game.party(player1,player2);
    }
})








