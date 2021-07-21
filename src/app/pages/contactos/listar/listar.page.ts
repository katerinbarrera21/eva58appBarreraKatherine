import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Receta } from 'src/app/domain/recetas';
import { RecetasService } from 'src/app/services/recetas.service';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  recetaLista : any;

  constructor(private router : Router,
              private recetaService : RecetasService ) { }

  ngOnInit() {
    this.recetaLista = this.recetaService.getList();
  }

  update (receta : Receta){
    let params : NavigationExtras ={
      queryParams : {
        receta : receta
      }
    };
    this.router.navigate(['/contactos/create', params])
  }

 

}
