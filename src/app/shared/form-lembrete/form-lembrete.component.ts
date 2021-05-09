import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lembrete } from 'src/app/lembrete';

@Component({
  selector: 'app-form-lembrete',
  templateUrl: './form-lembrete.component.html',
  styleUrls: ['./form-lembrete.component.css']
})
export class FormLembreteComponent {
  @Input() lembrete: Lembrete = <Lembrete>{};
  @Output() outputLembrete: EventEmitter<Lembrete> = new EventEmitter();
  constructor() { }

  onSubmit() {
    this.outputLembrete.emit(this.lembrete);
  }
}
