var n =  new Date();
var y = n.getFullYear();
var m = n.getMonth() + 1;
var d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

function checkpass(){ 
    location.replace("../Area_1.html");
};
document.querySelector(".bkbtn").addEventListener("click",checkpass);


var mycars = ['Herr','Frau'];
var list = document.getElementById('Name');

mycars.forEach(function(item){
   var option = document.createElement('option');
   option.value = item;
   list.appendChild(option);
});


var n= document.getElementById('name');
n.addEventListener("input",()=>{
    if (n.value!=""){
        document.querySelector(".add").classList.toggle("visible");
    }
    console.log("hello")
});
