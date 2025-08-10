class Parent {
    hello (){
        console.log("hello from Parent\n\n");
    }
};

class Child extends Parent{
}

let obj = new Child();
obj.hello();

class Person {
    eat() {
        console.log("Eating Something");
    }

    sleep() {
        console.log("Sleeping in bedroom");
    }
};

class Engineer extends Person {
    work() {
        console.log("Solve Problems, build Something");
    }
}

let vivek = new Engineer();
console.log(vivek.eat());
console.log(vivek.sleep());
console.log(vivek.work());