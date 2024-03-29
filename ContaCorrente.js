import {Cliente} from "./Cliente.js"


export class ContaCorrent {
   static numeroDeContas=0;
   agencia;
    _cliente;

    _saldo =0;


    set cliente (novoValor){
      if(novoValor instanceof Cliente){
      this._cliente = novoValor;}}


    get saldo(){
      return this._saldo
    }

    constructor(agencia, cliente){
      this.agencia= agencia;
      this._cliente = cliente;
      ContaCorrent.numeroDeContas += 1;
      
    }


 deposito(valor){
    if (valor <= 0 ) {
        return;
    }

    this._saldo += valor;
 }

 sacar(valor){
    if(valor > this._saldo) {
        return;
    }
    this._saldo -= valor;
    return valor;
 }

 tranferir (valor, conta){
    const valorSacado = this.sacar(valor)
    conta.deposito(valorSacado)


 }
}