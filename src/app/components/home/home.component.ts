import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ngOnInit(){ // caricamento del componente
    fetch('./assets/db.json')
    .then((res)=>res.json())
    .then((dati)=>{
      console.log(dati)
    })
    .catch((err)=>{console.log(err)})
  }
}
