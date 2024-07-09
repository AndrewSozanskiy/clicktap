import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {NgStyle} from "@angular/common";
import {GameComponent} from "./components/game/game.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {AuthService} from "./services/auth.service";
import {runCommand} from "@angular/cli/src/command-builder/command-runner";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgStyle,
    GameComponent,
    MatToolbarModule,
    RouterLink,
    MatIcon,
    MatIconButton,
    MatButton,
    MatAnchor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);
  router = inject(Router);
  protected readonly runCommand = runCommand;

  public ngOnInit(): void {
    this.authService.user$.subscribe((user: { email: string; displayName: string; }) => {
      if (user) {
        this.authService.currentUserSignal.set({
          email: user.email,
          username: user.displayName
        })
        console.log(user)
      } else {
        this.authService.currentUserSignal.set(null)
      }
    })
  }

  public logout() {
    this.authService.logout()
  }
}
