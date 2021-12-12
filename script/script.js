





































































































































































































/*const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
    window.onload = function(){
        setTimeout(function(){
            popup.style.display ="block"   

         //adding time delay to the pop-up
        }, 2000)
}

    close.addEventlistener('click',() => {
        popup.style.display ="none";
})
*/



(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

