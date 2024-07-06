// import { Injectable } from '@angular/core';
// import {BehaviorSubject, timer} from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class GameService {
//   public cells: string[] = Array(100).fill('');
//   public interval: number = 1000; // Default interval in milliseconds
//   public selectedCell: number | null = null;
//   public playerScore: number = 0;
//   public computerScore: number = 0;
//   public gameOver: boolean = false;
//   public result: string = '';
//
//   private gameInterval: any;
//
//   startGame(interval: number) {
//     this.resetGame();
//     this.nextTurn();
//   }
//
//   resetGame() {
//     this.cells = Array(100).fill('');
//     this.playerScore = 0;
//     this.computerScore = 0;
//     this.gameOver = false;
//     this.selectedCell = null;
//   }
//
//   private nextTurn() {
//     this.selectedCell = Math.floor(Math.random() * 100);
//   }
//
//   onCellClick(index: number) {
//     if (index === this.selectedCell.getValue()) {
//       const cells = this.cells.getValue().slice();
//       cells[index] = 'green';
//       this.cells.next(cells);
//       this.playerScore.next(this.playerScore.getValue() + 1);
//       this.selectedCell.next(null);
//       this.nextTurn();
//     }
//   }
//
//   private endGame() {
//     this.gameOver.next(true);
//     this.result.next(this.playerScore.getValue() > this.computerScore.getValue() ? 'Гравець виграв!' : 'Комп\'ютер виграв!');
//   }
// }
