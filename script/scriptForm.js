//form validation function
var modal = document.getElementById("myModal");
var buttonClose = document.getElementById("buttonClose");


window.addEventListener('load', () => {

// Grab all the forms
var forms = document.getElementsByClassName('needs-validation');

  
    // Iterate over each one
    for (let form of forms) {
    
      // Add a 'submit' event listener on each one
      form.addEventListener('submit', (evt) => {
      
        // check if the form input elements have the 'required' attribute  
        if (!form.checkValidity()) {
          evt.preventDefault();
          evt.stopPropagation();
          } else {
          // Since form is now valid, prevent default behavior
          evt.preventDefault();
		  var name = document.getElementById("firstName").value;
		  var email = document.getElementById("emailInput").value;
          modal.style.display = "block";
		  document.getElementById("modalOuput").innerHTML = "Thank you"+" "+name+", "+"for signing up for a Demo class."+" "+"I will contact you at"+" "+email+" "+"to arrange your Demo class.";
		 
        }
        
        form.classList.add('was-validated');
        
      });
      
    }
    
  });
  
//Code to close the Modal box that displays after form submit and relaod page to clear form (by clicking on x)
buttonClose.onclick = function(){
modal.style.display = "none";
 window.location.reload();
}


