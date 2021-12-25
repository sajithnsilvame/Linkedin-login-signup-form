var lblUsername = document.getElementById("lblUser");
var lblPassword = document.getElementById("lblPass");

var textUsername = document.getElementById("username");
var textPassword = document.getElementById("password");

var btnshow = document.getElementById("show");

// add smallness for text --------------------------------------


lblUsername.addEventListener("click", function(){
    lblUsername.classList.add("small");
});

lblPassword.addEventListener("click", function(){
    lblPassword.classList.add("small");
});

// add smallness for text box ----------------------------------


textUsername.addEventListener("click", function(){
    lblUsername.classList.add("small");
});

textPassword.addEventListener("click", function(){
    lblPassword.classList.add("small");
});

// remove smallness --------------------------------------------


textUsername.addEventListener("blur", function(){
      if (textUsername.value == '')
      {
        lblUsername.classList.remove("small");
      }
    
});
textPassword.addEventListener("blur", function(){
      if (textPassword.value == '')
      {
        lblPassword.classList.remove("small");
      }
    
}); 

// click event listener

btnshow.addEventListener("click", function(){
     if (textPassword.getAttribute("type") == "password")
     {
          textPassword.setAttribute("type", "text");
          btnshow.innerText = "hide";
     }
     else {
          textPassword.setAttribute("type", "password");
          btnshow.innerText = "show";
     }
});