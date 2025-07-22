import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'urban-trip-c3214',
        appId: '1:942307308286:web:34e4f27361756a56872baf',
        storageBucket: 'urban-trip-c3214.firebasestorage.app',
        apiKey: 'AIzaSyAdoNhaNR6lR8EwPM5C60cR_am7E-ISAgc',
        authDomain: 'urban-trip-c3214.firebaseapp.com',
        messagingSenderId: '942307308286',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
