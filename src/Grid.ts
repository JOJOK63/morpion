import { Player } from "./Player";

export class Grid{

    setSymbol(square : HTMLDivElement,player : Player){
        square.innerHTML = player.letter;
    }

}

