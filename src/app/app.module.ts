import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BarComponent } from './composants/bar/bar.component';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [ 
      AppComponent, 
      HelloComponent, 
      BarComponent ],    
  providers: [ FirebaseService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
