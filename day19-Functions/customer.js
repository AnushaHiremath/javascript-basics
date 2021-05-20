/*
Create a constructor function to specify data of customer in a bank.
*/

function Customer(accountnum,name,Balance){
    this.accountnum = accountnum
    this.Name = name
    this.Balance = Balance
    this.transaction=function(amount,code){
        if(code==0){
            this.Balance+=amount
            return this.Balance
        }else if(code==1){
            if(amount>this.Balance){
                
            }
        }
    },
    this.currentBalance = function(){
        if(this.code > this.Balance){
            return `The ${this.Balance} is insufficient for specified withdrawal`
        }
    }
}

const c1=new Customer(235555,'Anusha',4555.20)
console.log(c1.transaction())

