var n =  new Date();
var y = n.getFullYear();
var m = n.getMonth() + 1;
var d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;


function goBack(){ 
    location.replace("../admin.html");
};
document.querySelector(".bkbtn").addEventListener("click",goBack);
function subData(){ 
    location.replace("../admin.html");
};
document.querySelector(".submitbtn").addEventListener("click",subData);