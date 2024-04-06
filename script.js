function ChangeHoverAndFocus(element) {
    
    const href = element.getAttribute("href");
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => 
        link.classList.remove("active"));
    
    navLinks.forEach(link =>{
        if(link.getAttribute("href") === href){
            link.classList.add("active");
        }
    });
    console.log(element.getAttribute("href"));

  }

