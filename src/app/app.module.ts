import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BarComponent } from './composants/bar/bar.component';

const config = {
  apiKey: "AIzaSyAkFHmRh3Eo00XLHr_XYL0QbZreREyeaO4",
  authDomain: "hellfest-ramassage-gobelets.firebaseapp.com",
  databaseURL: "https://hellfest-ramassage-gobelets.firebaseio.com",
  projectId: "hellfest-ramassage-gobelets",
  storageBucket: "hellfest-ramassage-gobelets.appspot.com",
  messagingSenderId: "239872955453",
  appId: "1:239872955453:web:d4d1b6d2732a9de6278654",
  measurementId: "G-7GHQ7V9QXF"
  };

@NgModule({
  imports:      [
   BrowserModule,
   FormsModule,
   AngularFireModule,
   AngularFireDatabase,
   FirebaseListObservable,
   AngularFireModule.initializeApp(config),
   AngularFireDatabaseModule
    ],
  declarations: [ AppComponent, HelloComponent, BarComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
