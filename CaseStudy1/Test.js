// let abc:string="Aryan Dadhich";
// let age:number=20;
// console.log("Welcome "+abc);
// let fruit:string="Apple";
// class greeting{
//     greet():void{
//         console.log("Hello Everyone!");
//     }
var transactions = [
    { id: 1, type: "checkout" },
    { id: 2, type: "cancelled" },
    { id: 3, type: "return" },
    { id: 4, type: "priority" },
    { id: 5, type: "checkout" }
];
var totalprocessed = 0;
for (var i_1 = 0; i_1 < transactions.length; i_1++) {
    if (transactions[i_1].type === "checkout" || transactions[i_1].type === "return")
        totalprocessed++;
}
console.log(totalprocessed);
var i = 0;
while (true) {
    if (transactions[i].type == "priority")
        break;
    i++;
}
console.log(i);
var returnQueue = [{ id: 1, type: "checkout" }, { id: 2, type: "cancelled" }];
var newReturns = [{ id: 4, type: "priority" }, { id: 5, type: "checkout" }];
i = 0;
do {
    var item = newReturns[i];
    returnQueue.push(item);
    console.log("Added return:", item);
    i++;
} while (i < newReturns.length);
console.log("Updated Return Queue:", returnQueue);
//--------------------------------------------------Venkat------------------------------------------------
// var user={name: "vvs", mail: "@gmaisld", age: 10 };
// console.log(user.name);
// console.log(user.mail);
// console.log(user.age);
// console.log("Hello World");
// var Name: string = " Welcome Venkata Sarma";
// const Age: number = 22;
// const Message: string = " Hello every one!"
// console.log(Name);
// console.log(Age);
// console.log(Message);
// var Fruit : string = " Mango ";
// console.log(Fruit)
// function weatherReport(city: string , temp : number , isRaining : boolean): void {
//   console.log(`In ${city}, it is ${temp}°C. Is it raining? ${isRaining}`);
// }
// weatherReport("Hyderabad", 36 , true);
//single line
/* heloo
sdvsdf
asdasjdh
assdkasdd */
// class Person {
//   sayHello(): void {
//     console.log("hello!");
//   }
// }
// let store = new Person();
// store.sayHello();
// var city: string = "Hyderabad";
// console.log(city);
// import readline from "readline";
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question("Enter your city: ", (city: string) => {
//   console.log("City:", city);
//   rl.close();
// });
// const Name = process.argv[2];
// const Age = Number(process.argv[3]);
// console.log(`Name: ${Name}, Age: ${Age}`);
// const Name: string | null = prompt("Enter your name");
// const Age: number = Number(prompt("Enter your age"));
// console.log(Name, Age);
// var temperature : number = 22;
// console.log(temperature);
// var isRaining = true;
// console.log(typeof isRaining);
//Case-7
// enum Role  {Doctor, Nurse, Admin};
// interface Staff{
//     id : number;
//     name : string;
//     role : Role;
// }
// let arr : Staff[] = [
//     {id : 10, name : "Aman", role : Role.Doctor},
//     {id : 20, name : "Ashish", role : Role.Nurse},
//     {id : 30, name : "Ambani", role : Role.Admin},
// ];
// function print (arr : Staff[]): void{ 
//     console.log(arr);
//     console.log(arr[0]);
//     console.log(arr[0].name);
//     console.log(arr[arr.length-1].id);
// }
// print(arr);
//Case-9
// type CustomerID = string;
// type Customer = {
//   id: CustomerID;
//   name: string;
//   email?: string;
// };
// type OrderStatus = "pending" | "confirmed" | "shipped" | "delivered";
// type ProcessOrder = (
//   orderId: number,
//   callback: (status: OrderStatus) => void) => void;
// type Container<T> = {
//   value: T;
// };
// const customerContainer: Container<Customer> = {
//   value: {
//     id: "CUST-1001",
//     name: "Aman",
//     email: "aman@example.com"
//   }
// };
// // 7. Implementation of processOrder
// const processOrder: ProcessOrder = (orderId, callback) => {
//   console.log("Order ID:", orderId);
//   callback("confirmed");
// };
// // 8. Function call example
// processOrder(101, (status) => {
//   console.log("Order Status:", status);
// });
// // 9. Print wrapped customer data
// console.log("Customer Container:", customerContainer);
// console.log("Customer Name:", customerContainer.value.name);
//Case-10
// function checkSign(num: number): void{
//     if (num>0) {
//         console.log("Positive");
//     }
//     else{
//         console.log("Not positive");
//     }
// }
// function evenOrOdd(num: number): void{
//     if (num%2===0) console.log("Even");
//     else console.log("Odd");
// }
// function getGrade(score: number): string{
//     if (score >=90) console.log("A")
//     else if (score >=80) console.log("B")
//     else if (score >=70) console.log("C")
//     else if (score >=60) console.log("D")
//     else console.log("F")
// }
// function provideFeedback(grade: string): void{
// }
//----------------------------------------------Aman------------------------------------------ 
// var user = {name: "aman" , mail : "@gmail" , age : 10};
// console.log(user.name);
// console.log("Hello World");
// // First Case
// var Name : string = "Welcome Aman";
// const Age : number = 22;
// const Message : string = `Hello everyone I am ${Name}`;
// console.log(Message);
// console.log(Age);
// var Fruit : string = "Mango";
// console.log(Fruit);
// function printDouble(double: number): void {
//   console.log(double*2)
// }
// printDouble(5);
// class Person{
//     sayHello() : void {
//         console.log("Hello");
//     }
// }
// let Aman = new Person();
// Aman.sayHello();
// import * as readline from "readline";
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question("Enter your name: ", (name: string) => {
//   console.log(`Hello, ${name}`);
//   rl.close();
// });
// import * as readline from "readline";
// function question(query: string): Promise<string> {
// 	const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
// 	return new Promise((resolve) => rl.question(query, (ans) => { rl.close(); resolve(ans); }));
// }
// (async () => {
// 	const Name = await question("Enter your name: ");
// 	const age = Number(await question("Enter your age: "));
// 	console.log(Name, age);
// })();
// var temp  : number = 22;
// console.log(temp);
// function weatherReport(city : string , temp : number , isRaining : boolean) : void {
//     console.log(`In ${city}`);
// }
// weatherReport("A", 12, true);
// let score : number = 10;
// if (true){
//     let score : number = 30;
//     console.log(score);
// }
// console.log(score);
// score = 50;
// console.log(score);
// // const COUNTRY : string | null = "INDIA";
// // COUNTRY = "PAK";
// function recordAnswer(questionID : any, answer : any) : void {
//     let obj = {
//         questionID : questionID,
//         answer : answer
//     };
//     console.log(obj.questionID, " ", obj.answer);
// }
// recordAnswer(21, "Aman");
// recordAnswer(22, ["aman", "Ruchi","Abhrankan"]);
// recordAnswer(23, true);
// function processTransaction(amount : number , description : string , isCredit : boolean = true) : void {
//     if (amount < 0) throw new Error("Amount is Negative");
//     if (description === undefined) throw new Error("Description is empty");
//     else {
//         console.log(`The amount is ${amount} and Description is ${description}`);
//     }
// }
// // processTransaction(10, "Aman", true);
// processTransaction(10,  true);
// case 7
// enum Role {Doctor, Nurse, Admin};
// interface Staff{
//     id : number;
//     name : string;
//     role : Role;
// }
// let arr : Staff[] = [
//     {id : 10, name : "Aman", role : Role.Doctor},
//     {id : 20, name : "Ashish", role : Role.Nurse},
//     {id : 30, name : "Ambani", role : Role.Admin},
// ];
// function printRole (arr : Staff[]): void{ 
//     console.log(arr);
//     console.log(arr[0]);
//     console.log(arr[0].name);
//     // console.log(arr[-1].id);
//     console.log(arr[arr.length-1].id);
// }
// printRole(arr);
// case 8
// difference bw type and interface
// An interface is mainly used to define the shape of an object.
// A type alias can define any type, not just objects.
// type profile = {
//     username : string;
//     bio : string | null;
//     avatarUrl ?: string; // its optional variable
// }
// let profile1 : profile = {
//     username : "Aman",
//     bio : null,
// }
// let profile2 : profile = {
//     username : "Aman",
//     bio : "I am Intern",
// }
// let profile3 : profile = {
//     username : "Aman",
//     bio : "I never Give Up",
//     avatarUrl : "aman.jpeg"
// }
// function showProfile (pr : profile) : void{
//     console.log("The Username is : ", pr.username);
//     pr.bio == null ? console.log("The bio is NULL") : console.log("The bio is : ", pr.bio);
//     pr.avatarUrl == undefined ? console.log("Avatar is NULL") : console.log("The Avatar is ", pr.avatarUrl);
//     if (!pr.avatarUrl)console.log("Avatar is NULL");
//     else console.log("The Avatar is ", pr.avatarUrl);
// }
// showProfile(profile1);
// showProfile(profile2);
// showProfile(profile3);
// case 9
// type CustomerID = string;
// type Customer = {
//     id : CustomerID;
//     name : string;
//     email : string;
// };
// function processorder(orderid : number,(status : OrderStatus) => void): void{
// }
// type Ordercalback = (status : Ordercalback) =
// type processOrder(orderID.number, )
// case 10
// function checksign(num : number) : void {
//     if (num > 0) console.log("Positive");
//     else if (num==0) console.log("Zero");
//     else console.log("Negative");
// }
// function evenOrOdd(num : number) : void {
//     if (num%2==0) console.log("Even");
//     else console.log("odd");
// }
// function getGrade(score : number) : string {
//     if (score >= 90) return "A";
//     else if (score >= 80) return "B";
//     else if (score >= 70) return "C";
//     else if (score >= 60) return "D";
//     else return "F";
// }
// function provideFeedback(grade: string): void{
//     switch(grade){
//         case "A":
//             console.log("A");
//             break;
//         case "B":
//             console.log("B");
//             break;
//         case "C":
//             console.log("C");
//             break;
//         case "D":
//             console.log("D");
//             break;
//         case "F":
//             console.log("F");
//             break;
//         default:
//             console.log("Unexpected Input"); 
//     }
// }
// checksign(20);
// checksign(-20);
// evenOrOdd(2);
// provideFeedback(getGrade(56));
// case 11
//------------------------------Done!----------------------------------------
