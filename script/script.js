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