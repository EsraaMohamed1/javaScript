var nameee=document.getElementById("usernm");
var passwordd=document.getElementById("pas");
var maill=document.getElementById("maily");
var mobb=document.getElementById("mob");
var massagee1=document.getElementById("p1")
var massagee2=document.getElementById("p2")
var massagee3=document.getElementById("p3")
var massagee4=document.getElementById("p4")
var flagname=false;
var flagmail=false;
var flagpass=false;
var flagmob=false;
// var inputuser=nameee.value;

var regularr = /^[a-zA-Z ]{4,15}$/;
var regularrmob = /^[0-9]{11}$/;
var regularmail=/^([a-zA-Z0-9_]{3,15})@([a-zA-Z0-9]{2,10})\.([a-z]{2,7})$/
function subdata(e){

     e.preventDefault();

if(nameee.value.match(regularr) ){
    massagee1.style.display='none';
  //  console.log(nameee.value)
  flagname=true;
}
   


else{
    massagee1.style.display= 'block';
}

if(maill.value.match(regularmail) ){
    massagee2.style.display='none';
    console.log(nameee.value)
  flagmail=true;
}
   

else{
    massagee2.style.display= 'block';
}



if(passwordd.value.length>8 ){
    massagee3.style.display='none';
    console.log(nameee.value)
  flagpass=true;
}
   

else{
    massagee3.style.display= 'block';
}
if(mobb.value.match(regularrmob) ){
    massagee4.style.display='none';
    console.log(nameee.value)
  flagmob=true;
}
   

else{
    massagee4.style.display= 'block';
}


if(flagname==true&&flagmail==true&&flagpass==true&&flagmob==true){
    nameee.value="";
    passwordd.value="";
    mobb.value="";
    maill.value="";
}

}
function resetdata(){
    nameee.value="";
    passwordd.value="";
    mobb.value="";
    maill.value="";

massagee1.style.display= 'none';
massagee2.style.display= 'none';
massagee3.style.display= 'none';
massagee4.style.display= 'none';
}








function checkprevious(el){
    var prev=el.previousElementSibling;
      
 if( prev && prev.offsetHeight>0){
    prev.style.height='0px';}
}


function slideDown(el){
    

  var nextt=el.nextElementSibling;
 
   
 if(nextt.offsetHeight>0){
     
    nextt.style.height='0px';}
    
    else{
        checkprevious(el);
        nextt.style.height=`${nextt.scrollHeight}px`
}
}
 
