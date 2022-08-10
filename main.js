
function checkpass(){ 
    
    var user = document.getElementById('userid');
    var pass = document.getElementById('pass');
    
    if(user.value=="Se" && pass.value=="me"){
        location.replace("Area_1/Area_1.html");
    }
    else if(user.value=="Admin" && pass.value=="me"){
        location.replace("Admin/admin.html");
    }
    else{
        window.alert("Password incorrect.");
    }
};
document.querySelector(".login").addEventListener("click",checkpass);