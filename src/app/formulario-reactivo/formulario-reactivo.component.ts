import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  
  formulario: FormGroup;
  
  constructor( private fb: FormBuilder ) {
    this.formulario = this.fb.group({
      name: 'Pablo',
      email: 'pablo@hotmail.com'
    })
  }

  ngOnInit(): void {
  }
  
  onSubmit(datos: any) {
    console.log(datos.value)
  }

}
