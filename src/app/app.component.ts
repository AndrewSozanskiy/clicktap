import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgStyle} from "@angular/common";
import {GameComponent} from "./game/component/game.component";
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgStyle,
    GameComponent,
    MatToolbarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
