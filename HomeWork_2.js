//Task 1.	For a given number calculate the sum of its digits.

let a =306
let sum = 0
while(a){
    sum+= a % 10;
    a=Math.floor(a / 10);
}
console.log(sum)

//Task 2.	Given three sides of a triangle. Check whether the triangle is valid or not. Print “yes” if it is valid and “no" otherwise...

let a = 2
let b = 3
let c = 5

if(a>=b+c || b>=a+c || c>=a+b) {
    alert("no")
}else{
    alert("yes")
}

//Task 3.     Given a number print its digits count.

let n = 123
let count = 0
while(n>0){
    n=Math.floor(n/10)
    count++
    
}
console.log(count)

//Task 4. Count numbers of digit 9 in a number.

let number = 95996699; 
let count = 0;
let digit
while (number > 0) {
    digit = number % 10;
    if (digit === 9) {
        count++;
    }
    number = Math.floor(number/ 10);
}
console.log(count);
 

//Task   5 Given a positive number. Print it in reverse order.

let num = 1253;
let reverse = 0;
let lastDigit;

while(num > 0){
	lastDigit = num % 10;
  reverse = reverse*10 + lastDigit;
  num = Math.floor(num/10);
}

console.log(reverse);

