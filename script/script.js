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

//QUIZ

function Quiz(questions){
    this.score=0;
    this.questions=questions;
    this.questionIndex=0;
}
 
Quiz.prototype.getQuestionIndex=function(){
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess=function(answer){
    if(this.getQuestionIndex().isCorrectAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}
 
Quiz.prototype.isEnded=function(){
    return this.questionIndex===this.questions.length;
}
 
 
function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}
 
Question.prototype.isCorrectAnswer=function(choice) {
    return this.answer===choice;
}
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        //show question
        var element=document.getElementById("question");
        element.innerHTML=quiz.getQuestionIndex().text;
 
        //show options
        var choices=quiz.getQuestionIndex().choices;
        for(var i=0; i<choices.length;i++){
            var element=document.getElementById("choice"+i);
            element.innerHTML=choices[i];
            guess("btn"+i,choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id,guess){
    var button=document.getElementById(id);
    button.onclick=function(){
        quiz.guess(guess);
        populate();
    }
};
 
function showProgress(){
    var currentQuestionNumber=quiz.questionIndex+1;
    var element = document.getElementById("progress");
    element.innerHTML ="Question "+currentQuestionNumber+" of "+quiz.questions.length;
};
 
function showScores(){
    var gameOverHTML="<h1>Result</h1>";
    gameOverHTML+="<h2 id='score'>Your score: "+quiz.score+"</h2>";
    
    if(quiz.score>=15){
        gameOverHTML+="<h2 id='score'>Your level is Advanced!</h2>";
    }
    else if(quiz.score<15 && quiz.score>=6){
        gameOverHTML+="<h2 id='score'>Your level is Intermediate!</h2>";
    }
    else{
        gameOverHTML+="<h2 id='score'>Your level is Beginner!</h2>";
    }

    gameOverHTML+="<a id='score' href=../contact>Return</a>";

    var element=document.getElementById("quiz");
    element.innerHTML=gameOverHTML;
};
 
// create questions here
var questions=[
    new Question("What is the correct translation for <i>Telephone</i>?", ["De l'eau", "Un t??l??phone","Une bicyclette", "Un parapluie"], "Un t??l??phone"),
    new Question("How do you say <i>Good morning</i>?", ["Bonjour", "Au revoir", "Bon apr??s-midi", "Bonsoir"], "Bonjour"),
    new Question("How do you say <i>Good afternoon</i>?", ["Bonjour", "Au revoir", "Bon apr??s-midi", "Bonsoir"], "Bon apr??s-midi"),
    new Question("How do you say <i>Good evening</i>?", ["Des cl??s", "Au revoir", "Merci beaucoup", "Bonsoir"], "Bonsoir"),
    new Question("What is the correct translation for <i>Please</i>?", ["Bonjour", "D??sol??", "S'il vous pla??t", "Gauche"], "S'il vous pla??t"),
    new Question("How do you say <i>Thank You</>?", ["Droite", "D??sol??", "Merci", "Au revoir"], "Merci"),
    new Question("What is the correct translation for <i>Thank you very much</i>?", ["Excusez moi", "A votre sant??", "Je ne sais pas", "Merci beaucoup"], "Merci beaucoup"),
    new Question("How do you say <i>Sorry</i>?", ["Merci", "D??sol??", "Je ne sais pas", "S'il vous pla??t"], "D??sol??"),
    new Question("How do you say <i>Hello</i>?", ["Bonjour", "Merci", "S'il vous pla??t", "Je ne sais pas"], "Bonjour"),
    new Question("How do you say <i>Good-bye</i>?", ["Bonsoir", "Au revoir", "O?? est la plage", "Gauche"], "Au revoir"),
    new Question("What is the correct translation for <i>Gauche</i>?", ["Train", "Left", "Card", "Right"], "Left"),
    new Question("What is the correct translation for <i>Right</i>?", ["Droite", "Trois", "Un train", "Gauche"], "Droite"),
    new Question("How do you say <i>Water</i>?", ["Une assiette", "Du lait", "De l'eau", "Un bol"], "De l'eau"),
    new Question("What is the correct translation for <i>Du Lait</i>?", ["Coffee", "Plate", "Water", "Milk"], "Milk"),
    new Question("What is the correct translation for <i>Un Caf??</i>?", ["Milk", "Coffee", "Mug", "Water"], "Coffee"),
    new Question("What is the correct translation for <i>Hospital</i>?", ["Une aspirine", "Un h??pital", "De l'eau", "Une maison"], "Un h??pital"),
    new Question("How do you say <i>Taxi</i>?", ["Un Lit", "Un h??pital", "Un taxi", "Une voiture"], "Un taxi"),
    new Question("What is the correct translation for <i>Credi card</i>?", ["Un journal", "Un livre", "Une enveloppe", "Une carte de cr??dit"], "Une carte de cr??dit"),
    new Question("What is the correct translation for <i>Keys</i>?", ["Des cl??s", "Un Couteau", "Des tartines", "Un lit"], "Des cl??s"),
    new Question("What is the correct translation for <i>Bicycle</i>?", ["Un lit", "Une bicyclette", "Une assiette", "Une voiture"], "Une bicyclette")
];
 
//create quiz
var quiz=new Quiz(questions);
 
//display quiz
populate();




