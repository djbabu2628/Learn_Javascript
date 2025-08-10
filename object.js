const student = {
    fullName: "Vivek Chavhan",
    marks: 99.99,
    printMarks: function (){
        console.log("marks =", this.marks);
    },
};

const employee = {
    calcTax(){
        console.log("Tax rate is 10%");
    }
}

const karanArjun = {
    salary: 50000,
};

karanArjun.__proto__= employee