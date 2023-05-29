import Bateria from "./bateria";
import SimCard from "./simCard";

export  class Celular {
    private make:string;
    private model:string;
    private simcard:SimCard[];
    private bateria:Bateria;

    constructor(make:string,model:string,bateria:Bateria){
        this.make=make;
        this.model=model;
        this.bateria=bateria;
        this.simcard=[];//no se pone en el constructor porque la estoy agregando no usando compocision.
    }
    getinfo():Celular{
        return this;
    }
    setSimCard(SIM:SimCard){
        this.simcard.push(SIM);
    }

}