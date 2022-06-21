import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GiocoService } from '../gioco.service';


@Component({
  selector: 'app-gioco',
  templateUrl: './gioco.component.html',
  styleUrls: ['./gioco.component.css']
})




export class GiocoComponent implements OnInit {

  constructor(public gservice: GiocoService) {

  }

  ngOnInit(): void {
  
  }

 

  scegliImmagine() {
    return this.gservice.tentativi + '.png';
  }

ricominciaPartita() :void {
  location.reload();
}

getParola() {
  return this.gservice.parola;
}

getSconfitta() {
  return this.gservice.sconfitta;
}

getVittoria() {
  return this.gservice.vittoria;
}

getTentativi() {
  return this.gservice.tentativi;
}

getParolaNascosta() {
  return this.gservice.parolaNascosta;
}
  




}