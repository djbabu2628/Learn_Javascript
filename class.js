class Fortuner {

    constructor(brand, mileage){
        console.log("Creating New Object");
        this.brand = brand;
        this.mileage = mileage;
    }

    start() {
        console.log("Start");
    }

    stop() {
        console.log("Stop");
    }
}   


let car = new Fortuner("Toyota", 20);
console.log(car);
let lexus = new Fortuner("Lexus", 12);
console.log(lexus);
