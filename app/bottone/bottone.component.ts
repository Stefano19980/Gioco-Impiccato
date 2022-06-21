import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bottone',
  templateUrl: './bottone.component.html',
  styleUrls: ['./bottone.component.css']
})
export class BottoneComponent implements OnInit {

  @Input() valoreBottone: string = '';

  @Output() onValoreEmesso: EventEmitter<string> = new EventEmitter<string>();

  disattiva: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  tastiera(): void {
    this.disattiva = true;
    this.onValoreEmesso.emit(this.valoreBottone)
  }


}
