
window.onload = () => {
    
    
    
var signEmail =  document.getElementById("signEmail").value
var signPassword =  document.getElementById("signPassword").value
var signbtn2 =  document.querySelector("#signbtn2")
var signbtn1 =  document.querySelector("#signbtn1")
    
overlay = document.querySelector("#overlay")
load = document.querySelector("#load")
          
          
          
          signbtn2.addEventListener("click", (e) => {
              e.preventDefault()
              window.location.href = "login.html";
          }) 
          
          signbtn1.addEventListener("click", (e) => {
              e.preventDefault()
              overlay.style.display = "block"
              load.style.display = "block"
              signup()
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

function signup() {
var signEmail =  document.getElementById("signEmail").value
var signPassword =  document.getElementById("signPassword").value
    firebase.auth().createUserWithEmailAndPassword(signEmail, signPassword).then(() => {
            swal({
              title: "Done",
              text: "Account Successfully Created",
              icon: "success",
              timer: 2000
              });
              overlay.style.display = "none"
              load.style.display = "none"
              window.location.href = "login.html";
        }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          swal({
              title: "An Error Occured",
              text: "The password is too weak",
              icon: "error"
              });
        } else {
          swal({
              title:"An Error Occured",
              text:errorMessage,
              icon:"error"
              
          });
        }
        console.log(error);
        // [END_EXCLUDE]
              overlay.style.display = "none"
              load.style.display = "none"
      });
}
