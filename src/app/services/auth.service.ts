import {inject, Injectable, signal} from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  user,
} from '@angular/fire/auth';
import {UserInterface} from '../models/user.interface';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);
  currentUserSignal = signal<UserInterface | undefined | null>(undefined);
  user$ = user(this.firebaseAuth);

  public register(
    email: string,
    username: string,
    password: string,
  ): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password,
    ).then((response) =>
      updateProfile(response.user, {displayName: username}),
    );

    return from(promise);
  }

  public login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {
    });

    return from(promise);
  }

  public logout(): Observable<void> {
    return from(this.firebaseAuth.signOut());
  }
}
