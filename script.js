function vali(){
    x=document.getElementById("uemail").value;
    y=document.getElementById("upass").value;
    if(x==null || x==""){
        alert("Please enter the email...");
        return false;
    }
    else if(y==null||y.length<6){
        alert("Atleast Enter 6 charachter...");
        return false;
    }
}