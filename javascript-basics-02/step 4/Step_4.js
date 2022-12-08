var name1 = document.getElementById("name");
var surname = document.getElementById("surname");
var city = document.getElementById("city");
document.querySelector("button").addEventListener("click", function (){
    let resetbtn = confirm('do you want to continue?')
    if(resetbtn == true) {
        name1.value = '';
        surname.value = '';
        city.value = '';
        return true
    }
})
