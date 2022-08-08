var n =  new Date();
var y = n.getFullYear();
var m = n.getMonth() + 1;
var d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

function checkpass(){ 
    location.replace("../index.html");
};
document.querySelector(".bkbtn").addEventListener("click",checkpass);