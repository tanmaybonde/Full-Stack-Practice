// Program 1
// function anagram(str1,str2){
//     if(str1.split("").sort().join()==str2.split("").sort().join()){
//         console.log("this is anagram")
//     }
//     else{
//         console.log("not anagram")
//     }
// }

// anagram("Tanmay","anmasy");

// Apporach 2
function sort(str){
    var array=str.split("");
    array=array.sort();
    var sortedString=array.join();
    return sortedString;
}


function checkAnagram(str1,str2){
    if(sort(str1)==sort(str2)){
        return true;
    }
    else{
        return false;
    }
}

var ans=checkAnagram("Hard","draH");
console.log(ans);