
window.onload = () => {
    
    
    
var signEmail =  document.getElementById("signEmail").value
var signPassword =  document.getElementById("signPassword").value
var signbtn2 =  document.querySelector("#signbtn2")
var signbtn1 =  document.querySelector("#signbtn1")
    
overlay = document.querySelector("#overlay")
load = document.querySelector("#load")
          
          
          
          signbtn2.addEventListener("click", (e) => {
              e.preventDefault()
              window.location.replace("login.html");
          }) 
          
          signbtn1.addEventListener("click", (e) => {
              e.preventDefault()
              overlay.style.display = "block"
              load.style.display = "block"
          })
          
          
          
          
          signbtn1.disabled = true
         
          logTimer()
}


function logTimer() {
    
          setInterval(() => {
var signEmail =  document.getElementById("signEmail").value
var signPassword =  document.getElementById("signPassword").value
              if(signEmail != "" && signPassword != "" && signEmail.length > 6 && signPassword.length >5) {
                  
                 signbtn1.disabled = false
              }
              else {
                  
                signbtn1.disabled = true
              }
          }, 100)
}
