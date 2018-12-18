class Payment{
    constructor(){
        // Employing the singleton pattern to ensure only one instance of Payment
        if(!Payment.instance){
            Payment.instance = this;
            this.payment = {
                provider: "",
                amount: "",
                package: ""

            };
        }

        return Payment.instance;
    }


    setProvider(provider){
        this.payment.provider = provider;
    }

    getProvider(){
        return this.payment.provider
    }

    setAmount(amount){
        this.payment.amount = amount;
    }

    getAmount(){
        return this.payment.amount
    }

    setPackage(packageName){
        this.payment.package = packageName;
    }

    getPackage(){
        return this.payment.package;
    }

    getPayment(){
        return this.payment;
    }
}

const paymentInstance = new Payment();
Object.freeze(paymentInstance);

export default paymentInstance;