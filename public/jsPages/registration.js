// const firebaseConfig = {
//     apiKey: "AIzaSyC4YJadVggp_gYFT6dwESQHEZ73UU9m-0Y",
//     authDomain: "placementsgt1.firebaseapp.com",
//     projectId: "placementsgt1",
//     storageBucket: "placementsgt1.appspot.com",
//     messagingSenderId: "1064363443917",
//     appId: "1:1064363443917:web:beb28189f5eea6f6a18b84",
//     measurementId: "G-M66N24Q36E",
//     databaseURL : "https://placementsgt1-default-rtdb.firebaseio.com"
//   };
  
//   firebase.initializeApp(firebaseConfig);

//   let database = firebase.database();
document.querySelector('.registration-from').addEventListener("submit",(e)=>{
e.preventDefault();
})
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');
const step4 = document.getElementById('step-4');

const prevbtn = document.getElementById('prevbtn');
const nextbtn = document.getElementById('nextbtn');
const submitbtn = document.getElementById('submitbtn');

const showStep = (step) => {
    [step1, step2, step3, step4].forEach((s) => {
        if (s === step) {
            s.style.display = 'block';
        } else {
            s.style.display = 'none';
        }
    });
};

showStep(step1);
prevbtn.disabled = true;
submitbtn.style.display = 'none';

nextbtn.addEventListener('click', () => {
    if (step1.style.display === 'block') {
        showStep(step2);
        prevbtn.disabled = false;
    } else if (step2.style.display === 'block') {
        showStep(step3);
        submitbtn.style.display = 'none'; 
        nextbtn.style.display = 'none'; 
        submitbtn.style.display = 'block';
    } else if (step3.style.display === 'block') {
        showStep(step4);
        nextbtn.style.display = 'none';
        submitbtn.style.display = 'block';
    }
});

prevbtn.addEventListener('click', () => {
    if (step2.style.display === 'block') {
        showStep(step1);
        prevbtn.disabled = true;
        submitbtn.style.display = 'none'; 
        nextbtn.disabled = false; 
    } else if (step3.style.display === 'block') {
        showStep(step2);
        nextbtn.style.display = 'block';
        submitbtn.style.display = 'none';
    } else if (step4.style.display === 'block') {
        showStep(step3);
        nextbtn.style.display = 'block';
        submitbtn.style.display = 'none';
    }
});

submitbtn.addEventListener('click', () => {
 
});
