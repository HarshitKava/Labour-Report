var n =  new Date();
var y = n.getFullYear();
var m = n.getMonth() + 1;
var d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

function confirmPass() {
    var pass=document.getElementById('Pass');
    var x=document.getElementById('ConPass');
    if(pass.value==x.value){
        document.getElementById("errormsg").style.color="green";
        document.getElementById("errormsg").innerHTML="Passwords are same.";
    }
    else if (pass.value=="" || x.value==""){
        document.getElementById("errormsg").style.color="orange";
        document.getElementById("errormsg").innerHTML="Password not entered";
    }
    else{
        document.getElementById("errormsg").style.color="red";
        document.getElementById("errormsg").innerHTML="Passwords are not same.";
    }
}
function goBack(){ 
    location.replace("../admin.html");
};
document.querySelector(".bkbtn").addEventListener("click",goBack);
function subData(){ 
    location.replace("../admin.html");
};
document.querySelector(".submitbtn").addEventListener("click",subData);