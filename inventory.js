//Inventory Transfer System:
//
//Design a system for transferring inventory items between different locations or warehouses.
//Create classes for InventoryItem, Location, and Transfer.
//Implement methods for transferring items from one location to another, updating inventory records, and tracking transfer history.
// eu quero transferir itens from granja to barracao. and barracao to the car. 

class location{
    number;
    
    category;
    qntL = 0

    _item;
    set item (novoValor){
        if (novoValor instanceof item){
            this._item = novoValor;
        }
    }


    constructor(number,category, item){
        this.number=number;
        this.category=category;
        this._item = item;  

    }
    chegada(valor){
        if(valor <= 0 ) return;
        this.qntL += valor;
        return valor;
    }

    saida (valor){
        if(valor > this.qntL) return
        this.qntL -= valor;

        return valor;

    }

    transferencia(quantos, local){
        const qntRetirada = this.saida(quantos);
        local.chegada(qntRetirada);

    }

    ovosqnt() {
        if (this.item === dezena) {
            console.log('A quantidade em ovos é: ' + this.qntL * 10);
        }
    }  

}

class item{
    nome;
    qnt;
    price;
}


const papel = new item();
papel.nome = "papelSufite";
papel.price = 100;
papel.qnt = null;


const dezena = new item();
dezena.nome = "ovoDezena";
dezena.price = 8;
dezena.qnt = 200;

const duzia = new item();
duzia.nome = "ovoDuzia";
duzia.price = 14;
duzia.qnt = 300;

const bandeja = new item();
bandeja.nome = "ovoBand";
bandeja.price = 35;
bandeja.qnt = 100;



const barracao = new location (2, "entrada", dezena);

barracao.chegada(1000);
barracao.ovosqnt();



const granja = new location (3, "adm", papel);
const carro = new location (4,"delivery", dezena);



barracao.transferencia(200,carro)
carro.transferencia(20,granja)


console.log("barracao", barracao);

