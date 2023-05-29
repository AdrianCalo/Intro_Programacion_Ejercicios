import SimCard from "./simCard";
import { Celular } from "./cellphone";
import Bateria from "./bateria";

//creo objettos
const newBatery= new Bateria(5000,'samsumg','rb3')
const cel= new Celular('motorola','e22',newBatery)
const tarjeta= new SimCard('movistar',228166666)


console.log(cel.getinfo());
cel.setSimCard(tarjeta);
console.log(cel.getinfo());
