"use strict";
// CLASSES AND CONSTRUCTORS
class student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    login() {
        console.log("hell" + this.name + this.age);
    }
}
let s = new student("harsh", 21);
s.name = "yuhu";
s.age = 22;
s.login();
