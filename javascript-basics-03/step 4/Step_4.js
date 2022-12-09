var pass = document.getElementById("password");
var confg = document.getElementById("confirmation");
document.querySelector("[name='button']").onclick = function(){
    if (pass.value != confg.value){
        document.getElementById("password").style.border = "1px solid red";
        document.getElementById("confirmation").style.border = "1px solid red";
    }
}