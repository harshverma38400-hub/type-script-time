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
//************************************************************************************
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
//************************************************************************************
//extra asa hi try kiya hai
// class stud {
//     name:string
//     number:number
//    protected  constructor(number:number, name:string)
//     {
//         this.name=name;
//         this.number=number;
//     }
// }
// class stup extends  stud{
//       sunroof:boolen          // AApni taraf sa bhi de sakta hai
//     constructor(number:number,name:string ,sunroof:boolen){
//         super(number,name)
//           this.sunroof=sunroof
//     }
//     data() {
//         console.log(`hyy ${this.name} i am ${this.number}`);
//     }
// }
// let cod =new stup(123,"harsh")
// cod.data()
//***********************************************************************************
// hirarchical inheritance k party hai
// class person{
//     speak(){
//         console.log("whats going on");
//     }
// }
// class student extends person{}
// class teacher extends person{}
// const s= new student()
// const t =new teacher()
// s.speak()
// t.speak()
// ************************************************************************************
//multiple inheritance
// we cannot you mutiple inher in TS thats we use interface for it 
// interface person {
//     name:string,
//     age:number
// }
// interface login{
//     login():void
// }
// class student implements person ,login{
//     name: string
//     age: number
//     constructor(name:string,age:number)
//     {
//         this.name =name
//         this.age=age
//     }
//     login(): void {
//         console.log("hell"+ this.name );   
//     }
// }
// let s =new student("harsh",21)
// s.name="yuhu"
// s.age =22
// s.login()
//**************************************************************************************
// method overriding
// class person{
//     speak(){
//         console.log("whats going on");
//     }
// }
// class student extends person{
//     speak(){
//       console.log("hehe.....");
//     }
// }
// class teacher extends person{}
// const s= new student()
// const t =new teacher()
// s.speak()
// t.speak()
//************************************************************************************
// enum
// basically related/fixed values ka group banane ke liye enum use kar sakte ho.
// ak jese grp bnaya ga ki bss yahi a sakta hai
// enum STATUS{
//     pending ="pending",
//     sucess ="sucess",
//     error="error"
// }
// let apicall :STATUS =STATUS.pending
// console.log(apicall);
// enum LUL {         // enum ka aga to name likhta hai vo alwaya capital rha ga or withod string vala 0 sa start hota hai  jese isam hai 
//     sucess,
//     process,
//     hold
// }
// let call:LUL = LUL.hold
// console.log(call);
//*************************************************************************************
//generic
function greet(data) {
    return data;
}
console.log(greet(123));
console.log(greet("harsh"));
console.log(greet(false));
const dot = greet({
    name: "harsh",
    age: 123,
    address: "village",
    gender: "male"
});
console.log(dot);
function greet1(data) {
    return data;
}
let arr = greet1([20, 40, 90]);
console.log(arr);
