class Fortuner {
    
    start() {
        console.log("Start");
    }

    stop() {
        console.log("Stop");
    }
}   


let car = new Fortuner();
console.log(car.start());
console.log(car.stop());
let lexus = new Fortuner();
console.log(car.start());
console.log(car.stop());