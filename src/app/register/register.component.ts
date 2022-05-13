import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
  username: null,
  email: null,
  password: null,
  apellidos: null,
  location: null,
 teacher: null,
 nameGroupTeams: null,
 groupProyect: null,
 center: null,
 finFCT: null,
 dni: null,
 fechaNacimiento: null,
 fechaFCT: null,
 tipo: null,
 po: null,
 positionId: null,
 rr: null,
 becas: null,
 phone: null,
 ss: null,
 orgUnit: null,
 convenio: null,
 das: null,
 contacto: null,
 ceco: null,
 sociedad: null,
 emailAtos: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
  const {  username, email, apellidos, becas, ceco, contacto, das,emailAtos, center, dni, convenio, fechaFCT, fechaNacimiento, finFCT, groupProyect, location, nameGroupTeams, orgUnit, phone, po, positionId, rr, sociedad, ss, teacher, tipo, password } = this.form;
  this.authService.register( username, email, apellidos, becas, ceco, contacto, das,emailAtos, center, dni, convenio, fechaFCT, fechaNacimiento, finFCT, groupProyect, location, nameGroupTeams, orgUnit, phone, po, positionId, rr, sociedad, ss, teacher, tipo, password ).subscribe(
  data => {
  console.log(data);
  this.isSuccessful = true;
  this.isSignUpFailed = false;
  },
  err => {
  this.errorMessage = err.error.message;
  this.isSignUpFailed = true;
  }
  );
  }
  }
