
$(document).ready(function(){


    
    $('form').on('submit',function(event){
   		event.preventDefault();
        var aAjouter = $('#todo').val();
      $('input[name="checkListItem"]').val('');
      $('.list').prepend('<li class="item"> <button>X</button> <input class="checkbox" type="checkbox"> '+ aAjouter + '</li>'); //ajouter à la liste ce qu'on tape
   	
    compteur();
    }) ;

 

 $('.list').on('click','button', function() {  //supprimer la ligne
 	$(this).parent().remove();
  compteur();
 });



 $('.list').on('change', 'input:checkbox', function(){
    $(this).parent().toggleClass('barre');  
    compteur();     //fonction pour cocher et barrer
 });  



$('#all').click(function(){ //montrer tout
	$('.item').show();
	$('.barre').show();
});


$('#completed').click(function(){  //montrer ce qui est fait
	$('.item').hide();
	$('.barre').show();
});

$('#active').click(function() {  //Montrer ce qu'il reste à faire
	$('.item').show();
	$('.barre').hide();
});

$('#clearCompleted').click(function(){
	$('.barre').remove(); 
	$('.item').hide();				//supprimer ce qui est fait
});

$('#clearAll').click(function(){
  $('.barre').remove();
  $('.item').remove();

});


      
});


function compteur() {
  var compte = $('.item:not(.barre)').length;
  if (compte>1){
    $('#compte').text(compte + " " + "Eléments restants");
  }
  else {
    $('#compte').text(compte + " " + "Element restant");

  }

}

