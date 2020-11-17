
window.onload = () => {
    
    
    
    
var logEmail =  document.getElementById("logEmail").value
var logPassword =  document.getElementById("logPassword").value
var btn2 =  document.querySelector("#btn2")
var btn3 =  document.querySelector("#btn3")
var btn1 =  document.querySelector("#btn1")
overlay = document.querySelector("#overlay")
load = document.querySelector("#load")
          btn3.addEventListener("click", (e) => {
              e.preventDefault()
              overlay.style.display = "block"
              load.style.display = "block"
              home()
          }) 
          
          
          
          
          
          btn2.addEventListener("click", (e) => {
              e.preventDefault()
              window.location.href = "signup.html";
          }) 
          
          btn1.addEventListener("click", (e) => {
              e.preventDefault()
              overlay.style.display = "block"
              load.style.display = "block"
              login()
          })
          
          btn1.disabled = true
          logTimer()
}

function home() {
    setTimeout(() => {
        
              window.location.href = "home.html";
              overlay.style.display = "block"
              load.style.display = "block"
    }, 3000);
}

function logTimer() {
    
          setInterval(() => {

var logEmail =  document.getElementById("logEmail").value
var logPassword =  document.getElementById("logPassword").value
              if(logEmail != "" && logPassword != "" && logEmail.length > 6 && logPassword.length >5) {
                  
                 btn1.disabled = false
              }
              else {
                  
                btn1.disabled = true
              }
              
              
          }, 100)
}

function login() {
    
var logEmail =  document.getElementById("logEmail").value
var logPassword =  document.getElementById("logPassword").value
    firebase.auth().signInWithEmailAndPassword(logEmail, logPassword).then(() => {
           /* swal({
                text:"successfully",
                timer: 2000
            })*/
        window.location.href = "loghome.html";
              overlay.style.display = "none"
              load.style.display = "none"
        }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  
  swal({
      title: "An Error Occurred",
      text: errorMessage,
      icon: "error"
  })
  // ...
              overlay.style.display = "none"
              load.style.display = "none"
});
}
