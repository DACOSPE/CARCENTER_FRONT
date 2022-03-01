import { Component, OnInit } from '@angular/core';
import { Mecanico } from './mecanico';
import { MecanicoService } from './mecanico.service';


@Component({
  selector: 'app-mecanicos',
  templateUrl: './mecanicos.component.html'
  
})
export class MecanicosComponent implements OnInit {
  Mecanicos:Mecanico[]=[];
  constructor(private mecanicoService:MecanicoService) { }

  ngOnInit(): void {
    this.mecanicoService.getMecanicos().subscribe(
      mecanicos=>{ this.Mecanicos=mecanicos});
  }

}
