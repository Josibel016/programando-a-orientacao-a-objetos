//Product Inventory Class:
//Create a Product class representing items in an inventory. 
//Include properties such as product name, price, quantity in stock, and category. Implement methods 
//for adding stock, selling items, and checking the availability of a product.

class product{
    name;
    price;
    qnt;
    category;
        sell(valor){
            if(this.qnt>=valor){
            this.qnt-=valor
            }
        }
        buy(valor){
            if(this.qnt<=10000)
            this.qnt+=valor
        }
        availability(valor){
            if(this.qnt>=valor){
                console.log("product available");
            }
        }


        check(){
            if(this.qnt>0){
                console.log("product is available");
    }else{
        console.log("sold out");
    }
}

}

const product1 = new product()
    product1.name = "embalagem";
    product1.price = 100;
    product1.qnt = 300;
    product1.category = "producao"
    product1.buy(30);
    product1.sell(320);
    product1.availability(3);
    product1.sell(10);
    product1.check();

const product2 = new product()
    product2.name = "papel";
    product2.price = 20;
    product2.qnt = 70;
    product2.category = "adm"

    console.log(product1)


    export class ContaCorrent {
        agencia;
        cliente;
        saldo;
    
      //  deposito(valor){
        //    if(valor>=1){
          //      this.saldo+=valor
        
    
        deposito(valor){
            if(valor <= 0 ) return ;   
                this.saldo +=valor
        
        }
    
        sacar (valor){
            if(this.saldo >=valor){
                this.saldo -=valor;
                return (valor)  
             }
    
        }
        
        tranferencia (valor,conta){
           const valorSacado = this.sacar(valor);
            conta.deposito(valorSacado);
        }
    }