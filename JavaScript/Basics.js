
// using map function
// const arr=[10,20,30,40,50]

// function tranform(i){
//     return i * 3;
// }
// const ans=arr.map(tranform)
// console.log(ans)


// back all the even no from array
// Solution 1
// const arr3=[1,2,3,4,5,6]
// const ans2=[];
// for(let i=0;i<arr3.length;i++){
//     if(arr3[i]%2==0){
//         ans2.push(arr3[i])
//     }
// }
// console.log("hello")
// console.log(ans2)

// Solution2

const arr=[1,2,3,4,5]

function isEven(i){
        if(i%2==0){
            return true;
        }
        else{
            return false;
        }
    }

const ans=arr.filter(isEven)
console.log(ans)

// Let's break it down:

// arr is an array containing the numbers [1, 2, 3, 4, 5].
// The isEven function takes a number i as input and returns true if i is even, and false otherwise.
// The filter() method iterates over each element in the arr array.
// For each element x in arr, it calls the isEven function with x as an argument.
// If isEven(x) returns true, meaning x is even, the element x is included in the new array (ans).
// If isEven(x) returns false, meaning x is odd, the element x is excluded from the new array (ans).
// The resulting array ans contains only the even numbers from the original array arr.
// Finally, console.log(ans) prints the ans array to the console.