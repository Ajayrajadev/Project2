const menu=document.querySelector('.menu')
const menuList=document.querySelector('.nav_options')
const cross=document.querySelector('.cross')

function shownav(){
    menuList.style.display="block"
    menu.style.display="none"
    cross.style.display="block"
}
function closenav(){
    menuList.style.display="none"
    menu.style.display="block"
    cross.style.display="none"
}






document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let errors = false;
    
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    if (!name) {
        document.getElementById("nameError").textContent = "Name is required";
        errors = true;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        errors = true;
    }
    if (!phone || !/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number";
        errors = true;
    }
    
    if (!errors) {
        document.getElementById("successMessage").textContent = "Form submitted successfully!";
    }
});


