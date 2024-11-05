const firebaseConfig = {
  apiKey: "AIzaSyC6QnpxBD2B-VlOayuWlQzI3WzyWY8lCSk",
  authDomain: "autentication-js.firebaseapp.com",
  projectId: "autentication-js",
  storageBucket: "autentication-js.firebasestorage.app",
  messagingSenderId: "1076773848924",
  appId: "1:1076773848924:web:28c2fa58f4804d28842399",
  measurementId: "G-7F4KZCVX6K"
};

function entry() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Seus dados foram cadastrados com sucesso");
      document.getElementById("email").value = '';
      document.getElementById("password").value = '';
    })
    .catch((error) => {
      alert("Falha ao cadastrar: " + error.message);
    });
}
