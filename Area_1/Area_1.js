var n =  new Date();
var y = n.getFullYear();
var m = n.getMonth() + 1;
var d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

function goBack(){ 
    location.replace("../index.html");
};
document.querySelector(".bkbtn").addEventListener("click",goBack);

function checkpass(){ 
    location.replace("Report/form.html");
};
document.querySelector(".addbtn").addEventListener("click",checkpass);