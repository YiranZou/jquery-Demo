/*script for jquery demo*/

$(document). ready(function(){

//     $("p").hide();

  $('.album a').simpleLightbox();


})
$(function(){ 

    $('a.button').click(function(){  

         $('embed').remove();  

         $('body').append('<embed src="button.wav" autostart="true" hidden="true" loop="false">'); 

    }); 

});