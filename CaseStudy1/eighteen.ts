/*

class B{
    constructor (private a : A) {}
    public greetings() : void{
        console.log("greetings");
        this.a.greet();
    }
}
class A{
    public greet() : void {
        console.log("greet");
    }
}
let a = new A();
let b = new B(a);
let c = new B(a);
b.greetings();

*/

interface PaymentGateway {
    processPayment(amount : number) : Promise<boolean> ;
}
class BankTransferGateway implements PaymentGateway {
    async processPayment(amount: number){ // once the return type is defined in the interface, there is no need to write the return type again
        console.log(`Bank Transfer payment of $${amount} is being processed`);
        if(amount <= 0) return false;
        if(amount > 100000) return false;
        return true;
    }
}
// this processor class will help me process the payment
class PaymentProcessor {
    constructor(private gateway : PaymentGateway) {}
    async pay(amount : number){
        const success = await this.gateway.processPayment(amount);
        if(success){
            console.log(`Payment of $${amount} is successfully transferred.`);
        } 
        else{
            console.log(`Payment failed`);
        }
    }
}

let bt = new BankTransferGateway();
let pp = new PaymentProcessor(bt);
async function payment(){ // by default the return type of async function is Promise<void>
    await pp.pay(5000);
    await pp.pay(-1);
    await pp.pay(100000000);
}
payment();
// for normal functions the return type is void in default

/*
    Output

    Bank Transfer 
    success
    Bank Tran   
    failed
    Bank Tran
fail

*/


/*


If the calls were like this
pp.pay(5000);
pp.pay(-1);
pp.pay(2350585715835);

bank transfer
bank transfer
bank transfer
succes
failed
failed


*/