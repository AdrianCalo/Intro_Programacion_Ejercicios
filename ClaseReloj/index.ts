const readlineSync = require('readline-sync');
class Reloj {
    material: string;
    tipo: string;
    estaEncendido: boolean;
    alarma: boolean;
    bateria: boolean;
  
    constructor(material: string, tipo: string) {
      this.material = material;
      this.tipo = tipo;
      this.estaEncendido = false;
      this.alarma = false;
      this.bateria = true;
    }
  
    prenderReloj(): void {
      if (this.estaEncendido === false) {
        this.estaEncendido = true;
        console.log('El reloj de pared ha sido encendido.');
      } else {
        console.log('El reloj de pared ya está encendido.');
      }
    }
  
    apagarReloj(): void {
      if (this.estaEncendido === true) {
        this.estaEncendido = false;
        console.log('El reloj de pared ha sido apagado.');
      } else {
        console.log('El reloj de pared ya está apagado.');
      }
    }

    cargar():void{
        if(this.bateria===true){
            //this.bateria= false
            console.log("la bateria se va gastando")
        }else{
            this.bateria=false
            console.log("la bateria no tiene carga")
        }
        }
  
    asignarMaterial(material: string): void {
      this.material = material;
      console.log(`El material del reloj es ${this.material}`);
    }
  
    asignarTipo(tipo: string): void {
      this.tipo = tipo;
      console.log(`El tipo de reloj es ${this.tipo}`);
    }
  }
  
  const relojPared = new Reloj('', '');
  
  console.log(relojPared.bateria);
  relojPared.cargar();    
  
  relojPared.prenderReloj();
  relojPared.apagarReloj();
  relojPared.asignarMaterial('metal');
  relojPared.asignarTipo('digital');
  