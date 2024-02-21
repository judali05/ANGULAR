import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  //TALLER 1
  contador = 0;

  incrementar() {
    if(this.contador < 10){
        this.contador++;
      }else{
        alert("no se puede siguir sumando")
      }
    }

  decrementar() {
    if(this.contador > 0){
      this.contador--;
    }else{
      alert("no se puede siguir restando")
    }
      
    }


  //TALLER 2
  num1=0;
  num2=0;

  enviar(){
    this.num1;
    this.num2;
    alert("Los datos son: " + this.num1 + " y el " + this.num2)

    
  }

  
}
