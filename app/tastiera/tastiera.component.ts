import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BottoneComponent } from '../bottone/bottone.component';
import { GiocoService } from '../gioco.service';

@Component({
  selector: 'app-tastiera',
  templateUrl: './tastiera.component.html',
  styleUrls: ['./tastiera.component.css']
})
export class TastieraComponent implements OnInit {

  

  constructor(public gservice: GiocoService) { }

  ngOnInit(): void {
    let randomNumber = Math.floor(Math.random() * this.gservice.parole.length);
    this.gservice.parola = this.gservice.parole[randomNumber];
    this.gservice.parolaNascosta = '_ '.repeat(this.gservice.parola.length);
  }

  getControllo(lettera: any) {

    this.gservice.controllo(lettera);
    
   
  }

  getTopArray() {
    return this.gservice.topArray;
  }

  getMidArray() {
    return this.gservice.midArray;
  }

  getBotArray() {
    return this.gservice.botArray;
  }


  }




