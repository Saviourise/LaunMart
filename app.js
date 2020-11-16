window.onload = () => {
    //document.querySelector("i").style.display = "none"
    n = 0
  /*  while(n<=8) {
        n += 1
        if (n == 6) {
            document.querySelector("#loader").style.visibility = "hidden"
            break;
        }
        
    }*/
    setTimeout(() => {
        
            document.querySelector("#loader").style.display = "none"
            
           /* var btn = document.querySelector("button")
            btn.style.display = "block"*/
            window.location.href ="login.html";
    },12000)
    
    
   /* btn.addEventListener("click", (e) => {
        e.preventDefault()
    })*/
    
}
