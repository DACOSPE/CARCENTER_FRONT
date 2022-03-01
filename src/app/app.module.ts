import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MecanicoService } from './mecanicos/mecanico.service';
import { MecanicosComponent } from './mecanicos/mecanicos.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from'@angular/common/http';
import { FormComponent } from './mecanicos/form.component';
import { FormsModule } from '@angular/forms';


const routes: Routes=[
  {path:'',redirectTo:'mecanicos',pathMatch: 'full'},
  {path:'mecanicos',component:MecanicosComponent},
  {path:'mecanicos/form',component:FormComponent},
]

@NgModule({
  declarations: [
    MecanicosComponent,
    AppComponent,
    HeaderComponent,
    FormComponent
    
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MecanicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
