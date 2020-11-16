
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
          }) 
          
          
          
          
          btn2.addEventListener("click", (e) => {
              e.preventDefault()
              window.location.replace("signup.html");
          }) 
          
          btn1.addEventListener("click", (e) => {
              e.preventDefault()
              overlay.style.display = "block"
              load.style.display = "block"
          })
          
          btn1.disabled = true
          logTimer()
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
