import {Component, OnDestroy} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {GameResult} from "../modal/game-result.component";
import {interval, Subscription} from "rxjs";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    NgForOf,
    NgIf,
    MatFormField,
    MatInput,
    MatButton,
    MatLabel,
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnDestroy {
  public blocks: string[] = Array(100).fill('default');
  public playerScore: number = 0;
  public computerScore: number = 0;
  public timeLimit: number = 2000;
  public activeCellIndex: number | null = null;
  public timerSubscription: Subscription | null = null;

  constructor(public dialog: MatDialog) {
  }

  public startGame(): void {
    this.resetGame();
    this.nextRound();
  }

  public resetGame(): void {
    this.blocks = Array(100).fill('default');
    this.playerScore = 0;
    this.computerScore = 0;
    this.activeCellIndex = null;
    this.timerSubscription = null;
  }

  public nextRound(): void {
    if (this.playerScore >= 10 || this.computerScore >= 10) {
      this.unsubscribeTimerSubscription();
      this.showResult();
      return;
    }

    if (this.activeCellIndex !== null && this.blocks[this.activeCellIndex] === 'active') {
      this.blocks[this.activeCellIndex] = 'wrong';
      this.computerScore++;
    }

    this.activeCellIndex = Math.floor(Math.random() * 100);
    this.blocks[this.activeCellIndex] = 'active';

    this.unsubscribeTimerSubscription()

    this.timerSubscription = interval(this.timeLimit).subscribe(() => {
      this.nextRound();
    });
  }

  public clickCell(index: number): void {
    if (index === this.activeCellIndex) {
      this.blocks[index] = 'correct';
      this.playerScore++;
      this.nextRound();
    }
  }

  public showResult(): void {
    const dialogRef: MatDialogRef<GameResult, any> = this.dialog.open(GameResult, {
      data: {
        playerScore: this.playerScore,
        computerScore: this.computerScore
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.resetGame();
    });
  }

  public ngOnDestroy(): void {
    this.unsubscribeTimerSubscription()
  }

  private unsubscribeTimerSubscription(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}


