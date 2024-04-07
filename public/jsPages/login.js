const firebaseConfig = {
    apiKey: "AIzaSyC4YJadVggp_gYFT6dwESQHEZ73UU9m-0Y",
    authDomain: "placementsgt1.firebaseapp.com",
    projectId: "placementsgt1",
    storageBucket: "placementsgt1.appspot.com",
    messagingSenderId: "1064363443917",
    appId: "1:1064363443917:web:beb28189f5eea6f6a18b84",
    measurementId: "G-M66N24Q36E"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  let isLoggedin = localStorage.getItem("isLoggedin") === "true";

  const userProfile = document.querySelector('.User-detail');
  const loginRegisterBtn = document.querySelector('.User-Info');

  if(isLoggedin){
    loginRegisterBtn.style.display = 'none';
    userProfile.style.display = 'block';
  }else{
    loginRegisterBtn.style.display = 'block';
    userProfile.style.display = 'none';
  }

  document.querySelector('.login__form').addEventListener("submit", (e)=>{
    e.preventDefault();

    const loadingButton = document.querySelector(".Login_btn");

    const email = document.getElementById('email').value;
    const pass = document.getElementById('pword').value;

   
    loadingButton.innerHTML =
        '<i class="fa fa-spinner fa-spin"></i> Loading...';
      loadingButton.disabled = true;

    firebase
    .auth()
    .signInWithEmailAndPassword(email,pass)
    .then((userCredential) => {
        loginRegisterBtn.style.display = 'none';
        userProfile.style.display ='block';
        localStorage.setItem("isLoggedin", "true");
        alert("Login succesfully");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // showErrorFeedback();
        alert(error);
      })
    .finally(() => {
        loadingButton.innerHTML = "Login";
        loadingButton.disabled = false; 
      });
    
  })

  function signOut(){
    firebase
    .auth()
    .signOut()
    .then(()=>{
        localStorage.setItem("isLoggedin","false");
        window.location.href = 'index.html';
    })
    .catch((error)=>{
        alert(error);
    });
  }

