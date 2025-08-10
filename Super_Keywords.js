class Person {
    constructor(name) {
        console.log("Start From Person");
        this.speice = "homo sapiens-sapiens";
        this.name = name;
    }
    eat() {
        console.log("Eating Something");
    }
};

class Engineer extends Person {
    constructor(branch,name) {
        console.log("Start From Eng");
        super(name);
        this.branch = branch;
        console.log("End at Eng")
    }
    work() {
        console.log("Solve Problems, build Something");
    }
}

let vivek = new Engineer("Software Engineer","Vivek Chavhan");
