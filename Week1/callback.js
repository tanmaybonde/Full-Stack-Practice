// function med1(){
//     console.log("med 1 recieved....")
// }
// function med2() { console.log("med2 is recieved...") }
// function med3() { console.log("med3 is recieved...") }

// setTimeout(med1,1000);
// setTimeout(med2,2000);
// setTimeout(med3,3000);


// for this reson promises are their
setTimeout(function med1(){
    console.log("med 1 recieved....")
    setTimeout(function med2() { 
        console.log("med2 is recieved...") 
        setTimeout(function med3() { 
            console.log("med3 is recieved...") 
        }
        ,3000);
    },2000);
},1000);
