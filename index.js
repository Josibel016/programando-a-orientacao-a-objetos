import {Cliente} from "./Cliente.js"
import {ContaCorrent} from "./ContaCorrente.js"


const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 12345678);



const contaCorrenteRicardo = new ContaCorrent(1001, cliente1);
contaCorrenteRicardo.deposito(500);


const conta2 = new ContaCorrent(102, cliente2);

conta2.deposito(30);
conta2.sacar(10); 
conta2.tranferir(1,contaCorrenteRicardo);




console.log(ContaCorrent.numeroDeContas)
