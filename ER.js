/*function date(){
var curr = new Date; 
var first = curr.getDate() - curr.getDay();
var firstday = new Date(curr.setDate(first)).toUTCString();
//document.write(firstday);
document.getElementById("date").innerHTML = firstday;
//alert(firstday);
//document.write(firstday);
//return firstday;
}*/

//var nowDate = new Date(); 
//var date = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate(); 

//document.write(date());

//var val = document.getElementById("date");
//val.innerHTML = date();

//var val = date();
//document.getElementById("date").innerHTML = val;
//document.write(val);

function date(){
var curr = new Date; 
var first = curr.getDate() - curr.getDay();
var firstday = new Date(curr.setDate(first));
//firstday =  firstday.getFullYear()+'/'+(firstday.getMonth()+1)+'/'+firstday.getDate(); 
firstday = firstday.getDate()+' / '+(firstday.getMonth()+1)+' / '+firstday.getFullYear();
document.getElementById("date").innerHTML = firstday;
}