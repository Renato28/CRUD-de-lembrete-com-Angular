import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lembrete } from 'src/app/lembrete';
import { LembreteService } from 'src/app/services/lembrete.service';
import { ErrorMsgComponent } from 'src/app/shared/error-msg/error-msg.component';

@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent {
    public lembrete: Lembrete = <Lembrete>{};

  constructor(private lembreteService: LembreteService, private activateRoute: ActivatedRoute, private router: Router, public errorMsgComponent: ErrorMsgComponent) {
    this.getlembrete(this.activateRoute.snapshot.params.id);
  }

  getlembrete(id: number) {
    this.lembreteService.getLembrete(id)
      .subscribe((lembrete: Lembrete) => {
        this.lembrete = lembrete;
      }, () => { this.errorMsgComponent.setError('Falha ao buscar lembrete');});
  }

  atualizarLembrete(lembrete: Lembrete) {
    this.lembreteService.atualizarLembrete(lembrete)
      .subscribe(
        () => { this.router.navigateByUrl('/');},
        () => { this.errorMsgComponent.setError('Falha ao atualizar lembrete');});
  }
}
