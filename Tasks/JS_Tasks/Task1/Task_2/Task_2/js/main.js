/////////////function/////////////////////
function convertDollar(){
     var dollar = document.getElementById("dollar").value;
     var result = document.getElementById("result")
     
     result.innerHTML=dollar *50;

     // or
     // document.getElementById("result").innerHTML=dollar *50;

     return false;
}