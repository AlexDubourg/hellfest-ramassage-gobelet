import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';


import { AppComponent } from './app.component';
import { BarComponent } from './composants/bar/bar.component';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [ 
      AppComponent, 
      BarComponent ],    
  providers: [ FirebaseService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
