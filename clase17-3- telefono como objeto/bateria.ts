export default class Bateria{
    private capacity:number;
    private make:string;
    private model:string;

    constructor(capacity:number, make:string,model:string){
        this.capacity=capacity;
        this.make=make;
        this.model=model;
    }

    getInfo():Bateria{
        return this;
    }

}