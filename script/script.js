//form validation function
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


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
span.onclick = function(){
modal.style.display = "none";
 window.location.reload();
}

//text-expand
$(document).ready(function(){
    var showChar = 390;
    var ellipsestext = "...";
    var moretext = "Show more >";
    var lesstext = "Show less";
    
    $('.text-expand').each(function(){
        var content = $(this).html();
    
        if(content.length > showChar){
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
                $(this).html(html);
        }
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")){
            $(this).removeClass("less");
            $(this).html(moretext);
        } 
        else{
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

//AOS library init
AOS.init();

//slide down & up panels
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
      $("#panel-2").slideDown("slow");
      $("#panel-3").slideDown("slow");
      $("#panel-4").slideDown("slow");
    });
});
  
$(document).ready(function(){
    $("#panel-4").click(function(){
      $("#panel").slideUp("slow");
      $("#panel-2").slideUp("slow");
      $("#panel-3").slideUp("slow");
      $("#panel-4").slideUp("slow");
    });
});


