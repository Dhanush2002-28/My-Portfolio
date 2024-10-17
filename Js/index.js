

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  offset: 0, 
  delay:0,  
  duration: 100, 
  easing: 'ease-in-out',
  once: true,    
  throttleDelay:  
});

let backToTopBtn = document.getElementById("backToTopBtn");


window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}


backToTopBtn.onclick = function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}





