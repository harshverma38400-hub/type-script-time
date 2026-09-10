
//UTILITY TYPE

//1Partial


// interface user {

//     name:string,
//     age:number,
    
// }

// let data1 :Partial<user> = {

//     name:"harsh"
// }
// console.log(data);


// 2Pick




// interface User {

//     name:string,
//     age:number,
//     id:number
    
// }

// type Userdata = Pick<User,"name" | "age">

// let data :Userdata = {

//     name:"harsh",
//     age:20
// }
// console.log(data);



// 3Readonly



interface user {

    name:string,
    
    
}

let data1 :Readonly<user> = {

    name:"harsh"
}


console.log(data1);
