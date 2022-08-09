var n =  new Date();
var y = n.getFullYear();
var m = n.getMonth() + 1;
var d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

function goBack(){ 
    location.replace("../Area_1.html");
};
document.querySelector(".bkbtn").addEventListener("click",goBack);

function chooselabour(x){
    if (x=="type-1"){
        document.querySelector(".typeOfLabour").classList.add("invisible");
        var type1_labour = ['Mason','Carpenter'];
        var select = document.getElementById('labour');

        select.innerHTML="";
        var option = document.createElement("OPTION"),
            txt =document.createTextNode( 'None');
        option.appendChild(txt);
        select.insertBefore(option,select.lastChild);


        for (var i = 0; i < type1_labour.length; i++) {
            var option = document.createElement("OPTION"),
                txt =document.createTextNode( type1_labour[i]);
            option.appendChild(txt);
            select.insertBefore(option,select.lastChild);
        }
    }
    else if (x=="type-2"){
        document.querySelector(".typeOfLabour").classList.add("invisible");
        var type2_labour = ['Rigger','Painter'];
        var select = document.getElementById('labour');

        select.innerHTML="";
        var option = document.createElement("OPTION"),
            txt =document.createTextNode( 'None');
        option.appendChild(txt);
        select.insertBefore(option,select.lastChild);


        for (var i = 0; i < type2_labour.length; i++) {
            var option = document.createElement("OPTION"),
                txt =document.createTextNode( type2_labour[i]);
            option.appendChild(txt);
            select.insertBefore(option,select.lastChild);
        }
    
    }
    else{
        document.querySelector(".typeOfLabour").classList.add("invisible");
        var select = document.getElementById('labour');

        select.innerHTML="";
        var option = document.createElement("OPTION"),
            txt =document.createTextNode( 'None');
        option.appendChild(txt);
        select.insertBefore(option,select.lastChild);
    }
}

function categoryOfLabour(x){
    if (x=='None'){
        document.querySelector(".typeOfLabour").classList.add("invisible");
    }
    else{
        if (x=='Carpenter' ||x=='Mason'){
            document.querySelector(".typeOfLabour").classList.remove("invisible");
            document.getElementById("mainLabourLabel").innerHTML = "No. of "+x;

        }
        else if(x=='Rigger' ||x=='Painter')
        {
            document.querySelector(".typeOfLabour").classList.remove("invisible");
            document.getElementById("mainLabourLabel").innerHTML = "No. of "+x;
            document.querySelector(".helper").classList.add("invisible");
        }
    }
}