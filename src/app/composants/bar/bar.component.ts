import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  ageValue: number = 0;
  items: Array<any>;

  constructor(
    public firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.firebaseService.getBars()
    .subscribe(result => {
      this.items = result
    })
  }
}

export interface Bar {
    nom: string;
    compteur: number;
}

  