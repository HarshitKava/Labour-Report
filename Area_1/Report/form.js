var n =  new Date();
var y = n.getFullYear();
var m = n.getMonth() + 1;
var d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

function checkpass(){ 
    location.replace("../Area_1.html");
};
document.querySelector(".bkbtn").addEventListener("click",checkpass);