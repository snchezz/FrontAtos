import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Iniciativa } from '../modelos/iniciativa';
import { IniciativasService } from '../services/iniciativas.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-lista-iniciativa',
  templateUrl: './lista-iniciativa.component.html',
  styleUrls: ['./lista-iniciativa.component.css']
})
export class ListaIniciativaComponent implements OnInit {

  roles: string[] = [];

  iniciativas: Iniciativa[] | undefined;
  titulo = '';
  descripcion = '';
  inicio = '';
  fin = '';

  constructor(private userService: UserService, private tokenStorage: TokenStorageService,private iniciativaService : IniciativasService, private router: Router) { }

  ngOnInit(): void {
    this.iniciativaService.getIniciativasActivas().subscribe(
      (iniciativas)=> {
        this.iniciativas = iniciativas
      }
    );


    this.roles = this.tokenStorage.getUser().roles;
    if(this.roles.includes('ROLE_USER')){
      window.alert("¡¡Acceso denegado si no eres Gestor!!")
    
      this.router.navigate(["home"]).then(() => {
        window.location.reload();
      });
    
    
    }else if(this.roles.includes('ROLE_MODERATOR')){
      window.alert("¡¡Acceso denegado si no eres Gestor!!")
    
      this.router.navigate(["/", "mod"]).then(() => {
        window.location.reload();
      });
    }
  }

//Muestra todas las iniciativas de la BBDD
  getIniciativasAll(): void {
    this.iniciativaService.getIniciativasAll().subscribe(
      (iniciativas)=> {
        this.iniciativas = iniciativas
      }
    );
  }

  //Muestra todas las iniciativas activas de la BBDD
  getIniciativasActivas(): void {
    this.iniciativaService.getIniciativasActivas().subscribe(
      (iniciativas)=> {
        this.iniciativas = iniciativas
      }
    );
  }

  //Muestra todas las iniciativas inactivas de la BBDD
    getIniciativasInactivas(): void {
      this.iniciativaService.getIniciativasInactivas().subscribe(
        (iniciativas)=> {
          this.iniciativas = iniciativas
        }
      );
    }
/////////////////////////////////////////////
    getIniciativasByTitulo(): void {
      this.iniciativaService.getIniciativasByTitulo(this.titulo).subscribe(
        (iniciativas)=> {
          this.iniciativas = iniciativas
        }
      );
    }

    getIniciativasByDescripcion(): void {
      this.iniciativaService.getIniciativasByDescripcion(this.descripcion).subscribe(
        (iniciativas)=> {
          this.iniciativas = iniciativas
        }
      );
    }

    getIniciativasByFin(): void {
      this.iniciativaService.getIniciativasByFin(this.fin).subscribe(
        (iniciativas)=> {
          this.iniciativas = iniciativas
        }
      );
    }

    getIniciativasByInicio(): void {
      this.iniciativaService.getIniciativasByInicio(this.inicio).subscribe(
        (iniciativas)=> {
          this.iniciativas = iniciativas
        }
      );
    }

  //Cambia el valor del atributo activa de una iniciativa
  setActiva(iniciativa: Iniciativa): void{
    this.iniciativaService.setActiva(iniciativa).subscribe();
    window.location.reload();
  }

  delete(iniciativa: Iniciativa): void {   
        this.iniciativaService.delete(iniciativa.idIniciativa).subscribe();
        this.iniciativaService.getIniciativasAll().subscribe(
          (iniciativas)=> {
            this.iniciativas = iniciativas
          }
        );
    }

  //Borra o desactiva iniciativa dependiendo del booleano de la lista de temas
  deleteOrDeactivate(iniciativa: Iniciativa):void{
    let vac: boolean;
    this.iniciativaService.getTemasIniciativas(iniciativa.idIniciativa).subscribe(
      (boolean)=> {
        vac = boolean

  if(vac===false){
      this.iniciativaService.delete(iniciativa.idIniciativa).subscribe();
      Swal.fire('iniciativa borrada ', `La iniciativa ${iniciativa.titulo} ha sido borrada!`)
     }else{
      this.iniciativaService.setActiva(iniciativa).subscribe();
      Swal.fire('iniciativa desactivada ', `La iniciativa ${iniciativa.titulo} ha sido desactivada, ya que tiene temas asociados!`)
     }
     setTimeout(() => {
      window.location.reload();
    }, 4200); 

      }
    );
     //this.vacio = 
   
  }


/*  deleteOrDeactivate(iniciativa: Iniciativa):void{
     this.iniciativaService.getTemasIniciativas(iniciativa.idIniciativa).subscribe(
        (boolean)=>{
          this.vacio = boolean;
        }
     );
     if(this.vacio==true){
      this.iniciativaService.delete(iniciativa.idIniciativa).subscribe();
      Swal.fire('iniciativa borrada ', `La iniciativa ${iniciativa.titulo} ha sido borrada!`)
     }else{
      this.iniciativaService.setActiva(iniciativa).subscribe();
      Swal.fire('iniciativa desactivada ', `La iniciativa ${iniciativa.titulo} ha sido desactivada!`)
     }
     setTimeout(() => {
      window.location.reload();
    }, 1200); 
  }*/


        /*
    Swal.fire({
      title: '¿Estás seguro de que quieres eliminar esta iniciativa?',
      text: 'No podrás deshacer esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No'
    }
    )
    .then((result) => {
      if (result.value) {
        this.iniciativaService.delete(foto.idIniciativa).subscribe(
          response => {
            this.iniciativas = this.iniciativas.filter(in => in !== Iniciativa)

        Swal.fire(
          'Eliminada',
          'La iniciativa ha sido eliminada',
          'success'
        )})  
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'No has eliminado la iniciativa',
          'error'
        )
      }
    })*/

}
