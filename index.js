const name = "ravi"
console.log(name) 

const surname = "pithadiya"
console.log(surname)

//1 even or odd

let number = 7;
if(number % 2 == 0){
    console.log("Even")
}else{
    console.log("odd")
}

//2 find maximum of two number

let number1 = 5;
let number2 = 9;
if(number1>number2){
    console.log("number 1 is greater")
}else{
    console.log("number 2 is greater")

}

//3 check leap year
let year = 2021;
if(year % 4 == 0){
    console.log(year+"year is leap")
}else{
    console.log(`${year}+"year is not leap"`)
}

//4 sum of natural number
let n = 10;
let sum = 0;
for(let i = 1; i<=n; i++){
    sum +=i;
}
console.log(`sum of first ${n} natural number is: ${sum}`)

//5 factorial of a number
let fa = 4;
let result = 1;
for(let i=1;i<=fa;i++){
    result *=i;
}
console.log(result)

//6 print multiplication table
let num = 5;
let rows = 10;
for(let i = 1; i <= rows; i++){
    console.log(num + "x" + i + "=" +(num*i))
}

//7 reverse a number
let n1=12345;
let result1=n1.toString().split('').reverse().join('');
console.log(result1);

//8 palindrome check (number)
let nnum = 121;
let reverse1 = nnum.toString().split('').reverse().join('');
if(nnum == reverse1){
    console.log(`${nnum}is palindrome`)
}else{
    console.log(`${nnum}not palindrome`)
}

//9 check prime number
let number3=11;
let prime = number3>1;
for(let i=2;i<number3;i++){
    if(number3 % i==0){
        prime=false;
        break;
    }
}
console.log(prime ? `${number3}prime` : `${number3}not prime`)

//10 count digit number
let num1=5023;
let count=num1.toString().length;
console.log("Digites", count)



