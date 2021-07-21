import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receta } from 'src/app/domain/recetas';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  contacto: Receta = new Receta();

  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private contactoService :RecetasService) { 
      route.queryParamMap.subscribe(params =>{
        console.log(params)
        
      this.contacto = new Receta();
      
      if(this.router.getCurrentNavigation().extras.queryParams){
        this.contacto = this.router.getCurrentNavigation().extras.queryParams.contacto;
        console.log(this.contacto);
      }


      })

    }
  
  ngOnInit() {
  }

  guardar(){
    console.log(this.contacto);
    this.contactoService.guardar(this.contacto);
    this.router.navigate(['contactos/listado'])
  }

}
