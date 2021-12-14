//form validation function
var modal = document.getElementById("myModal");
buttonClose = document.getElementById("buttonClose");


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
          modal.style.display = "block";
		 
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