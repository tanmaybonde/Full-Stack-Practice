function printwholeline(n){
    var str="";
    for(var i=0;i<n;i++){
        str=str+"*";
    }
    console.log(str);
}

function printmidline(n){
    var str="";
    str=str+"*";
    for(var i=0;i<n-2;i++){
        str=str+" ";
    }
    str=str+"*";
    console.log(str);
}


function printfullpattern(n){
    printwholeline(n);
    for(var i=0;i<n;i++){
        printmidline(n);
    }
    printwholeline(n);
}
// printmidline(5);
// printwholeline(5);
printfullpattern(10);