import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Temas } from 'src/app/modelos/temas.model';
import { TemasService } from 'src/app/services/temas.service';

@Component({
  selector: 'app-lista-temas',
  templateUrl: './lista-temas.component.html',
  styleUrls: ['./lista-temas.component.css']
})

export class ListaTemasComponent implements OnInit {
  temas?: Temas[];
  temasActual: Temas = {};
  indiceActual = -1;
  titulo = '';
  descripcion = '';
  fechaInicio = new Date;
  fechaFin = new Date;
  iniciativa = '';

  constructor(private temasService: TemasService, private router: Router) { }

  ngOnInit(): void {
    this.recuperarTemas();
  }

  recuperarTemas(): void {
    this.temasService.getAll().subscribe({

      next: (data) => {

        this.temas = data;
        console.log(data);
      },

      error: (e) => console.error(e)

    });
  }

  refrescarLista(): void {
    this.recuperarTemas();
    this.temasActual = {};
    this.indiceActual = -1;
  }

  setTemaslActivo(temas: Temas, indice: number): void {
    this.temasActual = temas;
    this.indiceActual = indice;
  }

  eliminarTodosTemas(): void {
    this.temasService.deleteAll().subscribe({

      next: (res) => {
        console.log(res);
        this.refrescarLista();
      },

      error: (e) => console.error(e)
    });
  }

  eliminarTemas(): void {
    this.temasService.delete(this.temasActual.id).subscribe({

      next: (res) => {
        console.log(res);
        this.refrescarLista();
      },

      error: (e) => console.error(e)
    });
  }

  buscarTitulo(): void {
    this.temasActual = {};
    this.indiceActual = -1;
    this.temasService.findByTitulo(this.titulo).subscribe({

      next: (data) => {
        this.temas = data;
        console.log(data);
      },

      error: (e) => console.error(e)

    });
  }

  buscarDescripcion(): void {
    this.temasActual = {};
    this.indiceActual = -1;
    this.temasService.findByDescripcion(this.descripcion).subscribe({

      next: (data) => {
        this.temas = data;
        console.log(data);
      },

      error: (e) => console.error(e)

    });
  }

  buscarFechaInicio(): void {
    this.temasActual = {};
    this.indiceActual = -1;
    this.temasService.findByFechaInicio(this.fechaInicio).subscribe({

      next: (data) => {
        this.temas = data;
        console.log(data);
      },

      error: (e) => console.error(e)

    });
  }

  buscarFechaFin(): void {
    this.temasActual = {};
    this.indiceActual = -1;
    this.temasService.findByFechaFin(this.fechaFin).subscribe({

      next: (data) => {
        this.temas = data;
        console.log(data);
      },

      error: (e) => console.error(e)

    });
  }

  buscarIniciativa(): void {
    this.temasActual = {};
    this.indiceActual = -1;
    this.temasService.findByIniciativa(this.iniciativa).subscribe({

      next: (data) => {
        this.temas = data;
        console.log(data);
      },

      error: (e) => console.error(e)

    });
  }

}
