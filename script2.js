// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBrJYOEYHzYz5rSBeNgkPuQn5bMY89vuMY",
  authDomain: "smart-home-s-website.firebaseapp.com",
  projectId: "smart-home-s-website",
  storageBucket: "smart-home-s-website.appspot.com",
  messagingSenderId: "702691291772",
  appId: "1:702691291772:web:8396401aac8e7ada958ff9",
  measurementId: "G-T32HNWNPNS"
};

// Initialisez Firebase
firebase.initializeApp(firebaseConfig);

// Écouteur d'événement pour le formulaire de connexion
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Appel à la fonction de connexion
  login(username, password);
});

// Fonction de connexion
function login(username, password) {
  firebase.auth().signInWithEmailAndPassword(username, password)
    .then(function(userCredential) {
      // Connexion réussie
      var user = userCredential.user;
      console.log('Utilisateur connecté :', user.uid);
      window.location.href = "essai.html";

      // Effectuez ici les actions nécessaires après la connexion, comme la redirection vers une autre page
    })
    .catch(function(error) {
      // Erreur de connexion
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Erreur de connexion :', errorMessage);
      // Affichez un message d'erreur à l'utilisateur
      document.getElementById('login-error').textContent = 'Nom d\'utilisateur ou mot de passe incorrect';
    });
}


