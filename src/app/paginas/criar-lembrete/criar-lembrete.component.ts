import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Lembrete } from 'src/app/lembrete';
import { LembreteService } from 'src/app/services/lembrete.service';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';

@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css']
})
export class CriarLembreteComponent {

  constructor(private lembreteService: LembreteService, private router: Router, public errorMsgComponent: ErrorMsgComponent){}

  addLembrete(lembrete: Lembrete){
    this.lembreteService.addlembrete(lembrete)
      .subscribe(
        () => {this.router.navigateByUrl('/'); },
        () => {this.errorMsgComponent.setError('Falha ao adicionar lembrete'); });
        
    }
  }
  

