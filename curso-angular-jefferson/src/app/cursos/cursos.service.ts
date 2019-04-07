import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {


  static criouNovoCurso = new EventEmitter<string>();
  
  constructor(private logService: LogService) { 
    console.log('CursosServico');
  }

  getCursos() {
    this.logService.consoleLog('Obtendo lista de curso');
  }
}
