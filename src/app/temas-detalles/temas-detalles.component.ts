import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Temas } from 'src/app/modelos/temas.model';
import { TemasService } from 'src/app/services/temas.service';
@Component({
  selector: 'app-temas-detalles',
  templateUrl: './temas-detalles.component.html',
  styleUrls: ['./temas-detalles.component.css'
  ]
})
export class TemasDetallesComponent implements OnInit {
  @Input() viewMode = false;
  @Input() temasActual: Temas = {
    titulo: '',
    descripcion: '',
    fechaInicio: new Date,
    fechaFin: new Date,
    iniciativa: ''
  };

  message = ''

  constructor(private temasService: TemasService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
    }
  }
  getTutorial(id: string): void {
    this.temasService.get(id).subscribe({
      next: (data) => {
        this.temasActual = data;
        console.log(data);
      },

      error: (e) => console.error(e)

    });
  }
  

  actualizarTemas(): void {
    this.message = '';
    this.temasService.update
      (this.temasActual.id, this.temasActual).subscribe({

        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Este tema ha sido actualizado correctamente!';
        },

        error: (e) => console.error(e)
      });
  }

  eliminarTemas(): void {
    this.temasService.delete(this.temasActual.id).subscribe({

      next: (res) => {
        console.log(res);
        this.router.navigate(['/temas']);
      },
      error: (e) => console.error(e)

    });
  }
}
