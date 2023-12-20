import { Player } from "./Player";

export class Grid{

    setSymbol(square : HTMLDivElement,player : Player){
        square.innerHTML = player.letter;
    }


    /**
     * 
     * @param square 
     * @returns 
     * 
     * ! A VERIFIER
     */
     getGridValues(square : HTMLDivElement) {
       let gride = [];
        for (let i = 1; i <= 9; i++) {
            let square = document.querySelector('.div' + i);
            if(square){
                gride.push(square.innerHTML);
            }
        }
    
        // Grid sera un tableau 1D contenant les valeurs des divs
        return gride;
    }


     checkWinner(grid: string[][]): string | null {
        if (this.checkHorizontalWin(grid)) {
            return grid[0][0];  // Retourne le symbole du gagnant
        }
    
        if (this.checkVerticalWin(grid)) {
            return grid[0][0];  // Retourne le symbole du gagnant
        }
    
        if (this.checkDiagonalWin(grid)) {
            return grid[1][1];  // Retourne le symbole du gagnant
        }
    
        return null;  // Aucun gagnant
    }
    
    
     checkHorizontalWin(grid: string[][]): boolean {
        for (let row = 0; row < 3; row++) {
            if (grid[row][0] !== '' && grid[row][0] === grid[row][1] && grid[row][1] === grid[row][2]) {
                return true;  // Gagné horizontalement
            }
        }
        return false;
    }
    

     checkVerticalWin(grid: string[][]): boolean {
        for (let col = 0; col < 3; col++) {
            if (grid[0][col] !== '' && grid[0][col] === grid[1][col] && grid[1][col] === grid[2][col]) {
                return true;  // Gagné verticalement
            }
        }
        return false;
    }
    
     checkDiagonalWin(grid: string[][]): boolean {
        // Diagonale de gauche à droite
        if (grid[0][0] !== '' && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
            return true;  // Gagné en diagonale
        }
    
        // Diagonale de droite à gauche
        if (grid[0][2] !== '' && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
            return true;  // Gagné en diagonale
        }
    
        return false;
    }
    

}

