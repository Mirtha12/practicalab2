import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicalab2';
  autor = "Mirtha Sarango - Darwin Nagua - Julio Campoverde";
  public mostrar_autor =true;
  public mostrar_lista = true;
  public lista_de_usuarios = ['Ana','Martha','Ricardo','Mateo','Juan']
  public texto_boton = "Ocultar_lista"

  change(): void {
    this.mostrar_lista = !this.mostrar_lista;
    if(this.mostrar_lista ===false){
      this.texto_boton = "Mostrar lista";
    }else {
      this.texto_boton = 'Ocultar lista';
    }
  }

  buscar() {
    let coincidencias = false;
    for(let i=0;i<this.lista_de_usuarios.length;i++){
      if (this.lista_de_usuarios[i]== this.autor){
        coincidencias=true;
      }
    }
    if(coincidencias== true){
      alert('Si hay coincidencias en la busqueda')
    }else{
    alert('No hay coincidencias en la busqueda')
    }
  }
}

