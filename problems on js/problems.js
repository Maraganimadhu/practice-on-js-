// 1. Find the Second Largest Number
//    Write a program to find the second largest number in an array using a single loop. Do not use built-in sort.

// let arr=[1,2,3,4,5,6,2,3,9,8,3,2,1]
// let lst2=[]
// for (let i=0;i<arr.length;i++){
//     if (lst2.includes(arr[i])){

//     }
//     else{
//         lst2.push(arr[i])
//     }
// }
// let max1=0
// let max2=0
// for (let i=0;i<lst2.length;i++){
//     for (let j=0;j<i+1;j++){
//         if(lst2[i]<lst2[j]){
//             let temp =lst2[i]
//             lst2[i]=lst2[j]
//             lst2[j]=temp

//     }
//     }
// }
// // console.log(lst2[lst2.length-2])   8 or
// lst2.pop()
// console.log(lst2.slice(-1))  [8]


// 2. Sum of Even Digits
//    Given a number, calculate the sum of its even digits using a loop (e.g., input: 2346, output: 2+4+6 = 12).
// let num=+prompt("enter a number ") //number 1423 
// let sum=0
// while(num!=0){
//     let res=num%10;
//     if (res%2==0){
//     sum+=res
//     }
//     num=Math.floor(num/10)
// }
// console.log(sum)      6

// 3. Check for Prime Number
//    Write a function that returns true if the input number is prime, else false. Avoid built-in methods.

// function is_prime(num){
//     let result=true
//     for (let i=2;i<num;i++){
//         if(num%2==0){
//             result=false
//             break
//         }
//     }
// return result
// }
// console.log(is_prime(+prompt("enter a number to check is prime or not"))) //29 true

// 4.Reverse a Number
//   Using a loop  reverse the digits of a number.
//   Example: "1234" → "4321"

// let num=1423
// let reverese_number=0
// while(num!=0){
//     let res=num%10
//     reverese_number=reverese_number*10+res
//     num=Math.floor(num/10)
// }
// console.log(reverese_number)  3241

// 5.Fibonacci Series
//   Generate the first n Fibonacci numbers using a for or while loop.
//   Example: 0, 1, 1, 2, 3, 5, 8...

// let a=0
// let b=1
// let c=a+b
// for (let i=0;i<10;i++){
// console.log(a)
// a=b
// b=c
// c=a+b
// }

// 6.Check Armstrong Number
//   A number is Armstrong if the sum of its digits raised to the power of number of digits equals the number.
//   Example: 153 = 1³ + 5³ + 3³ = 153

// let sum=0
// function is_armstrong(num){
//     let temp=num
//     while(num!=0){
//         let rem=num%10
//         sum=sum+rem*rem*rem
//         num=Math.floor(num/10)

    
//     }
//     if (temp===sum){
//         console.log("armstrong")
//     }
//     else{
//         console.log("not armstrong")
//     }

// }
// is_armstrong(153)       //armstrong



// 7.Find Factorial (Loop and Recursion)
//   Write two versions of a factorial function – one using a loop, and another using recursion.

//fuction
// let product=1
// function fact(num){
//     if(num>1){
//         product=num*fact(num-1)
//     }
//     return product
// }
// console.log(fact(5))  //120 

// debugger
// function fact(n){
//     if(n==1){
//         return 1
//     }
//     return n*fact(n-1)    
// }
// console.log(fact(5))
//loop
// let product=1
// for (let i=1;i<=5;i++){
// product=product*i
// }
// console.log(product)   //120

// 8.Count Vowels in a String
// // Write a function that returns the number of vowels (a, e, i, o, u) in a string (case-insensitive).
// function vowels_count(str){
//     let counter=0
//     vow_arr=['a','e','i','o','u']
//     str=str.toLowerCase()
//     // console.log(str)
//     for(let i=0;i<str.length;i++){
//         // for (let j=0;j<vow_arr.length;j++){
//         //     if (str[i]===vow_arr[j]){
//         //         counter=counter+1
//         //     }
//         //}
//         //or
//         if (vow_arr.includes(str[i])){
//             console.log(str[i])

//         }
    
//     }
//    // return counter;
// }
// console.log(vowels_count("madhu MARAGANI"))  // 6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

// 9.Find All Palindromes in an Array
//   Write a function that takes an array of strings and returns all elements that are palindromes.
// function is_palindromes(str_arr){
// for (let i=0;i<str_arr.length;i++){
//     if (str_arr[i]===str_arr[i].split("").reverse().join("")){
//         console.log(str_arr[i],"is palindrom")
//     }
//     else{
//          console.log(str_arr[i]," is not a palindrom")
//     }
// }
// }
// is_palindromes(["madam",'madhu','mam','dad'])

// a='madhu'
// console.log(a.split("").reverse().join(""))

// 10.Kaprekar Number
//    Write a function to check whether a number is a Kaprekar number or not.
//    A Kaprekar number is a number whose square can be split into two parts that add up to the original number.
//    Example: 45 → 45² = 2025 → 20 + 25 = 45 (Kaprekar number)



// 11.Find Intersection of Two Arrays
//    Create a function that returns the common elements between two arrays without using filter, includes, or Set.

// 12.Find Duplicates in an Array
//    Write a function that identifies and returns duplicate elements from an array of numbers.

// 13.Write a JavaScript function that takes a string as input and returns the character that appears the most times in the string. 
//    If multiple characters have the same highest frequency, return any one of them.
//    Input: "programming"
//    Output: "g" (since 'g' appears twice, which is the highest)
// debugger
function most_frequent_char(str){
    let obj={}
    let chr=""
    for (let i=0;i<str.length;i++){
        if(obj[str[i]]){
            obj[str[i]]++
        }
        else{
            obj[str[i]]=1
        }
    }
    // console.log(obj)
    let max=0
    for (let i in obj){
        if(max<obj[i]){
            max=obj[i]
            chr=i
        }
    }
    // console.log(chr ,max)
return (`${chr} ${max}`)
}
let str="madhu maragani"
console.log(most_frequent_char(str))


// 14.Is Anagram?
//    Write a function that checks whether two input strings are anagrams of each other.
//    Example: listen and silent

// 15.Write a JavaScript function to calculate the sum of the series:
//For n = 6, the sum is 1 - 2 + 3 - 4 + 5 - 6 = -3.
//Implement the function to return the sum for any given positive integer n 