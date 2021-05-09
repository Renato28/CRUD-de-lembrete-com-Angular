import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lembrete } from '../lembrete';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }

  getListaLembretes(): Observable<Lembrete[]> {
    const url = `${environment.lembreteApiUrl}/lembrete`;
    return this.http.get<Lembrete[]>(url);
  }

  getLembrete(id: number): Observable<Lembrete>{
    const url = `${environment.lembreteApiUrl}/lembrete/${id}`;
    return this.http.get<Lembrete>(url);
  }

  addlembrete(lembrete: Lembrete): Observable<Lembrete>{
    const url = `${environment.lembreteApiUrl}/lembrete/`;
    return this.http.post<Lembrete>(url, lembrete);
  }

  atualizarLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembreteApiUrl}/lembrete/${lembrete.id}`;
    return this.http.put<Lembrete>(url, lembrete);
  }

  deletaLembrete(id: number): Observable<Lembrete>{
    const url = `${environment.lembreteApiUrl}/lembrete/${id}`;
    return this.http.delete<Lembrete>(url);
  }
}
