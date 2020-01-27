import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  private nom: string;

  constructor() {
    this.nom = "War Zone";
   }

  ngOnInit() {
  }

}

export interface Bar {
    nom: string;
    compteur: Object[];
}