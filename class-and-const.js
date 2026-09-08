"use strict";
// CLASSES AND CONSTRUCTORS
// class student {
//     name: string;
//     age: number;
//     constructor(n:string,a:number){ //object create hote time initial data set karne wala special method.
//         this.name=n;
//         this.age=a;
//     }
//     intro() {
//         console.log(`hi i am ${this.name} and my age is ${this.age}`);
//     }
// }
// const v = new student("harsh",20);
// v.intro();
//inharitance
// bydefault public hi hota hai
// private
// class bank{
//     private password:number =123
// }
// let data = new bank()
// console.log( data.password);
// protected
// parent
// class bank{
//     protected bankaccountno:number =122455
// }
// // child 
// class Branch extends bank {
//     bankdata(){
//         console.log("here is acc no." + this.bankaccountno);
//     }
// }
// let data = new Branch()
// // console.log(data.bankaccountno) // cant access out side the parent and child class 
// data.bankdata()
//extra asa hi try kiya hai
class stud {
    name;
    number;
    constructor(number, name) {
        this.name = name;
        this.number = number;
    }
    data() {
        console.log(`hyy${this.name} i am ${this.number}`);
    }
}
class stup extends stud {
    constructor(number, name) {
        super(number, name);
    }
}
let cod = new stup(123, "harsh");
cod.data();
