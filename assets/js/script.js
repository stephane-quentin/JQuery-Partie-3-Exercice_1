$(function(){
  var count = 0; // Initialisation de la variable count à 0
  $('button').click(function(){
    count++; // A chaque clic, le compteur augmente de 1
    $('input').val('Compteur ' + count // On affiche le compteur dans l'input
  });
});
