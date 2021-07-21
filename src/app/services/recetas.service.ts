//import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Receta } from '../domain/recetas';

//@Injectable({
 // providedIn: 'root'
//})
export class RecetasService {

  constructor(private asf : AngularFirestore) {

   }

  guardar (receta : Receta){
    const refReceta = this.asf.collection('receta');
    if (receta.id==null){
      receta.id = this.asf.createId();
      receta.enabled = true;
    }
    refReceta.doc(receta.id).
    set(Object.assign({},receta));
  }
  

  getList(): Observable <any[]>{
    return this.asf.collection('receta', 
            ref => ref.where('enable', '==', true)).valueChanges();
  }
}
