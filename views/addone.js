
function validateForm() {
    return checkPhone();
}
function checkPhone() {
    var phone = document.forms["add_contact"]["Phone"].value;
    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
        if(phone.value.match(phoneNum)) {
            return true;
        }
        else {
            document.getElementById("Phone").className = document.getElementById("Phone").className + " error";
            return false;
        }
    }
    function myFunction() 
    {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
    x.className += " responsive";
} else {
    x.className = "topnav";
}
}
