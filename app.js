function press(){
   var age=prompt("Write down your age in number!!");
   if(age>0){
   var tot=(age*365);
   document.getElementById("val").innerHTML=tot+" Days";}
}
function reset(){
    location.reload();
    return false;
}