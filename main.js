function checkpass(){ 
    
    var user = document.getElementById('userid');
    var pass = document.getElementById('pass');
    
    if(user.value=="atul" && pass.value=="me"){
        console.log("yes");
        location.replace("Area_1/Area_1.html");
    }
    else{
        window.alert("Password incorrect.");
    }
};
document.querySelector(".login").addEventListener("click",checkpass);