//console.log('hello everyone else','how are u?')
//thats greatlet
/*let aiman = 22;
let nusrat = aiman - 3;
let ranu = aiman + 28;
let haque = ranu + 15;
let Total_age = aiman + nusrat + haque + ranu;
console.log(aiman);
console.log(nusrat);
console.log(ranu);
console.log(haque);
console.log(Total_age);
*/
/* let noor = {
     name: 'aiman',
     age: '22',
     hobby: 'research',
 };
 console.log(noor)
 console.log(noor.age)
 */
//function practice
function house(num1,num2){
    const sum = num1 / num2
    return sum;
}
const result = house(30, 2);
console.log(result);

//templete literals
let message = `hi 
how are you`;
console.log(message);
//arithmetic operation
let x = 2975;
let y = 6;
let z = 2800;
let e = 7.5;
console.log(x ** y); 
//logical operator
let price = 100;
console.log(price < 200 && price == 100);
console.log(price < 50 || price == 100);
console.log(!(price < 500));
//equility operator

console.log(price === "100");
//swap two number
let nur = 30;
let = nusrat = 40;
let temp = nur;
nur = nusrat;
nusrat = temp;
console.log(nur,nusrat);
//if else
if(nur > 50){
    console.log("thats good");
}else if(nur = 40){
    console.log("thats extraodinary");
}else{
    console.log("thats not good");
} 
// ternary operator
let number = 15;
console.log(number % 2 === 0 ? 'even' : 'odd');
//fizzbuzz
if (number % 3 ===0 && number % 5 ===0){
    console.log("fizzbuzz");
}else if(number % 5 === 0){
    console.log("buzz");
}else if (number % 3 === 0){
    console.log("fizz");
}
else{console.log("nothing");}
//leapyear
let year = 2025;
if(year % 400 === 0){
    console.log("this is leap year");
}else if(year % 4 === 0 && year !== 0){
    console.log("this is leap year");
}else{
    console.log("this is not leap year");
}
//grading system
 let grade = 100;
 if(grade >= 80 && grade <=100){
     console.log("A+");
 }else if(grade < 0 && grade < 100){
    console.log("null");
 }else {
    console.log("fail");
}
//very good
const sonkha = 0;
switch(true){
    case sonkha > 0:
    console.log("this is positive");
    break;
    case sonkha === 0:
    console.log("this is zero");
    break;
    case sonkha < 0:
    console.log("this is negetive");
    break;
//great