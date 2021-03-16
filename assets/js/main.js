$(document).ready(function(){
  // Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome,
  // cognome e età.

  var studente = {
    nome: 'Alessandro',
    cognome: 'Di Crescenzo',
    eta: 42,
  }

  // Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
  // questo per un solo studente
  for (var key in studente) {
    console.log(key, studente[key]);
  }

  // Creare un array di oggetti di studenti.
  var studente1 = {
    nome: 'Sergio',
    cognome: 'Di Crescenzo',
    eta: 35,
  }

  var studente2 = {
    nome: 'Anna',
    cognome: 'Baghini',
    eta: 68,
  }

  var classe = [
    studente,
    studente1,
    studente2,
  ]

  console.log(classe);
  // Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
  for (var i = 0; i < classe.length; i++) {
    console.log(classe[i].nome + ' ' + classe[i].cognome);
  }

  // questo per tutti gli studenti
  for (var i = 0; i < classe.length; i++) {
    for (var key in classe[i]) {
      console.log(key, classe[i][key]);
    }
  }




  // Dare la possibilità all’utente, attraverso form, di aggiungere un nuovo oggetto
  // studente inserendo nell’ordine: nome, cognome e età.
  $('div[name=button]').click(function (){

    var nome = $('[name=nome]').val();
    var cognome = $('[name=cognome]').val();
    var eta = parseInt($('[name=eta]').val());

    var studente3 = {
      nome: nome,
      cognome: cognome,
      eta: eta,
    };

    classe.push(studente3);

    $('[name=nome]').val('');
    $('[name=cognome]').val('');
    $('[name=eta]').val('');

    // tutti i dati degli studenti
    for (var i = 0; i < classe.length; i++) {
      for (var key in classe[i]) {
        console.log(key, classe[i][key]);
      }
    }

    // solo nomi e cognomi
    for (var i = 0; i < classe.length; i++) {
      console.log(classe[i].nome + ' ' + classe[i].cognome);
    }
  })


});
