const firebaseConfig = {
    apiKey: "AIzaSyC4YJadVggp_gYFT6dwESQHEZ73UU9m-0Y",
    authDomain: "placementsgt1.firebaseapp.com",
    projectId: "placementsgt1",
    storageBucket: "placementsgt1.appspot.com",
    messagingSenderId: "1064363443917",
    appId: "1:1064363443917:web:beb28189f5eea6f6a18b84",
    measurementId: "G-M66N24Q36E",
    databaseURL : "https://placementsgt1-default-rtdb.firebaseio.com"
  };
  
  firebase.initializeApp(firebaseConfig);
  let database = firebase.database();
  let storage = firebase.storage();
  document.querySelector('.registration-from').addEventListener("submit", async (e) => {
    e.preventDefault();
  
    // Get user input values
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pword').value;
    let batch = document.getElementById('Batch').value;
    let course = document.getElementById('Course').value;
    let specialization = document.getElementById('Specialization').value;
    let rollNo = document.getElementById('Roll-no').value;
    let hackerRank = document.getElementById('HackerRank').value;
    let leetCode = document.getElementById('LeetCode').value;
    let codeChef = document.getElementById('CodeChef').value;
    let codeforces = document.getElementById('Codeforces').value;
    let linkedin = document.getElementById('Linkedin').value;
    let github = document.getElementById('Github').value;
    let resumeFile = document.getElementById('Resume').files[0];
  
    try {
      // Create user with email and password authentication
      await firebase.auth().createUserWithEmailAndPassword(email, password);
  
      // Store user details in the database under the specified structure
      let userData = {
        [rollNo]: {
          username: username,
          email: email,
          profile: {
            hackerRank: hackerRank,
            leetCode: leetCode,
            codeChef: codeChef,
            codeforces: codeforces,
            linkedin: linkedin,
            github: github
          }
        }
      };
  
      await database.ref('batches/' + batch + '/' + course + '/' + specialization).update(userData);
  
      // Upload resume to Firebase Storage
      let resumeRef = storage.ref('resumes/' + batch + '/' + course + '/' + specialization + '/' + rollNo + '/' + resumeFile.name);
      await resumeRef.put(resumeFile);
  
      console.log('Resume uploaded successfully');
  
      // Show success message or redirect user
      alert('Registration successful!');
      window.location.href = "registration-success.html"; // Redirect to success page
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred while registering. Please try again.');
    }
  });
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');
const step4 = document.getElementById('step-4');

const prevbtn = document.getElementById('prevbtn');
const nextbtn = document.getElementById('nextbtn');
const submitbtn = document.getElementById('submitbtn');

const showStep = (step) => {
    [step1, step2, step3].forEach((s) => {
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
    }
});

submitbtn.addEventListener('click', () => {
 
});
