var n =  new Date();
var y = n.getFullYear();
var m = n.getMonth() + 1;
var d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

function goBack(){ 
    location.replace("../index.html");
};
document.querySelector(".bkbtn").addEventListener("click",goBack);

function addSiteEng() {
    location.replace("SiteEng/SiteEng.html");
}
document.querySelector(".addSE").addEventListener("click",addSiteEng)