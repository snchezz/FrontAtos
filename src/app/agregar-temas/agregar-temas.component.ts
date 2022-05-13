import { Component, OnInit } from '@angular/core';
import { TemasService } from 'src/app/services/temas.service';
import * as M from 'materialize-css'
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-agregar-temas',
  templateUrl: './agregar-temas.component.html',
  styleUrls: ['./agregar-temas.component.css']
})

export class AgregarTemasComponent implements OnInit {
  temas = {

    titulo: '',
    descripcion: '',
    fechaInicio: new Date,
    fechaFin: new Date,
    iniciativa: ''

  };

  submitted = false;

  constructor(private temasService: TemasService) { }

  ngOnInit(): void {


    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems);
    });



  }

  guardarTemas(): void {
    const data = {

      titulo: this.temas.titulo,
      descripcion: this.temas.descripcion,
      fechaInicio: this.temas.fechaInicio,
      fechaFin: this.temas.fechaFin,
      iniciativa: this.temas.iniciativa

    };

    this.temasService.create(data).subscribe({

      next: (res) => {
        console.log(res);
        this.submitted = true;
      },

      error: (e) => console.error(e)

    });
  }

  nuevoTemas(): void {
    this.submitted = false;
    this.temas = {

      titulo: '',
      descripcion: '',
      fechaInicio: new Date,
      fechaFin: new Date,
      iniciativa: ''
    };
  }


}
