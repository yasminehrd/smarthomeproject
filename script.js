// Variables pour les boutons
var led1OnButton = document.getElementById('led1-on');
var led1OffButton = document.getElementById('led1-off');
var led2OnButton = document.getElementById('led2-on');
var led2OffButton = document.getElementById('led2-off');

var rideauouvertButton = document.getElementById('rideau-ouvert');
var rideaufermeButton = document.getElementById('rideau-ferme');

// Ajoutez l'adresse IP de votre ESP8266 ici
var ipAddress = '192.168.1.2';

// Gestionnaires d'événements pour les boutons
led1OnButton.addEventListener('click', function() {
  sendCommand('/allumer1');
});

led1OffButton.addEventListener('click', function() {
  sendCommand('/eteindre1');
});

led2OnButton.addEventListener('click', function() {
  sendCommand('/allumer2');
});

led2OffButton.addEventListener('click', function() {
  sendCommand('/eteindre2');
}); 

rideauouvertButton.addEventListener('click', function() {
    sendCommand('/ouvrir');
  });
  
  rideaufermeButton.addEventListener('click', function() {
    sendCommand('/fermer');
  });
  


