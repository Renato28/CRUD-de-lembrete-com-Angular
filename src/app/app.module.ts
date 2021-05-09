import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';
import { CriarLembreteComponent } from './paginas/criar-lembrete/criar-lembrete.component';
import { EditarLembreteComponent } from './paginas/editar-lembrete/editar-lembrete.component';
import { FormLembreteComponent } from './shared/form-lembrete/form-lembrete.component';
import { ErrorMsgComponent } from './shared/error-msg/error-msg.component';
import { LembreteService } from './services/lembrete.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaLembreteComponent,
    CriarLembreteComponent,
    EditarLembreteComponent,
    FormLembreteComponent,
    ErrorMsgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LembreteService, ErrorMsgComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
