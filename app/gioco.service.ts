import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiocoService {

  tasto = true;
  parola: string = '';
  parolaNascosta: string = '';
  tentativi: number = 0;
  vittoria: boolean = false;
  sconfitta: boolean = false;
  
  
  parole: string[] = [
    'CASA',
    'NUVOLA',
    'LAMPADINA',
    'INVERNO',
    'MACCHINA'
   ];

  constructor() { }

  
  topArray: string[] = ['Q','W','E','R','T','Y','U','I','O','P']
  midArray: string[] = ['A','S','D','F','G','H','J','K','L']
  botArray: string[] = ['Z','X','C','V','B','N','M']


  valoreRilanciato(event:any):void {
    return event;
  }

  controllo(lettera:any){
    lettera=this.valoreRilanciato(lettera)
    if (this.parola.indexOf(lettera) === -1) {
      this.tentativi++;
    }
    const parolaNascostaArray = this.parolaNascosta.split(' ');
    for (let i = 0; i < this.parola.length; i++) {
      if (this.parola[i] === lettera) {
        parolaNascostaArray[i] = lettera;
      }
    }

    this.parolaNascosta = parolaNascostaArray.join(' ');
    this.finePartita();
    return;
}

finePartita() {
  const parolaArray = this.parolaNascosta.split(' ');
  const controlloParola = parolaArray.join('');
  if (controlloParola === this.parola){
    this.vittoria = true;
  } 
  if(this.tentativi==6) {
    this.sconfitta = true;
  }
}

ricominciaPartita() :void {
  location.reload();
}


}


