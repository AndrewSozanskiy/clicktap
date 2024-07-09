import {Routes} from '@angular/router';
import {GameComponent} from "./components/game/game.component";
import {LogicComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LogicComponent,
  },
  {
    path: '',
    component: GameComponent,
  },
];
