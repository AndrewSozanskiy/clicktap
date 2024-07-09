import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideFirebaseApp} from "@angular/fire/app";
import {initializeApp} from "firebase/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {getAuth, provideAuth} from "@angular/fire/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoFFT-CxYSpBJyIT20Q95GUnZKq8gMGqE",
  authDomain: "click-tap-ee431.firebaseapp.com",
  projectId: "click-tap-ee431",
  storageBucket: "click-tap-ee431.appspot.com",
  messagingSenderId: "801433725320",
  appId: "1:801433725320:web:5887f5accca5eb2e43723d"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ]
};
