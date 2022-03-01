import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mecanico } from './mecanico';
import { MecanicoService } from './mecanico.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'    
 
})
export class FormComponent implements OnInit {

  public mecanico:Mecanico=new Mecanico()
  public titulo :string ="Crear Mecanico"

  constructor(private mecanicoservice:MecanicoService,private router:Router) { }

  ngOnInit(): void {
  }
  public create():void{
    console.log("Clicked")
    console.log(this.mecanico)
    this.mecanicoservice.create(this.mecanico).subscribe(
      reponse=> this.router.navigate(['/mecanicos'])
    )
  }

}
