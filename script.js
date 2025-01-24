let store;
let username = "";
let userpassword = "";

function sign_in() {
  // Get values from input fields
  username = document.getElementById("user-name").value;
  userpassword = document.getElementById("user-password").value;

  // Convert inputs to lowercase and reassign them
  username = username.toLowerCase();
  userpassword = userpassword.toLowerCase();

  // Initialize store object
  store = {
    stored_name: username,
    stored_password: userpassword,
  };

  // Check for any bugs
  if (username === "" || userpassword === "") {
    alert("Please enter something!");
    return;
  } else if (userpassword.length > 16) {
    alert("Password cannot be more than 16 characters");
    return;
  } else if (userpassword.length < 8) {
    alert("Password must have at least 8 characters");
    return;
  }

  // Lexical scoping = nesting a function inside another function, function b inside function a, function b has access to function a
  // Encryption 
  function encryption() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    let new_Word = ""; // Initialize new_Word
    let new_Words = ""; // Initialize new_Words
    let new_Words3 = ""; // Initialize new_Words3

    // Encrypt the username
    for (let i = 0; i < username.length; i++) {
      let char = username[i];
      let charSearch = alphabet.indexOf(char);
      let newCharIndex = (charSearch + 2) % alphabet.length;
      new_Word += alphabet[newCharIndex];
    }

    // Encrypt the password
    for (let i = 0; i < userpassword.length; i++) {
      let char2 = userpassword[i];
      let charSearched = alphabet.indexOf(char2);
      let newCharIndex2 = (charSearched + 2) % alphabet.length;
      new_Words += alphabet[newCharIndex2];
    }

    // Encrypt the encrypted password (by shifting characters back by 3)
    for (let i = 0; i < new_Words.length; i++) {
      let char3 = new_Words[i];
      let charSearched = alphabet.indexOf(char3);
      let newCharIndex3 = (charSearched - 3 + alphabet.length) % alphabet.length; // Adjust for negative index
      new_Words3 += alphabet[newCharIndex3];
    }

    store.stored_name = new_Word;
    store.stored_password = new_Words3;

    console.log(`${store.stored_name}\n${store.stored_password}`);
  }
  encryption();

  if (encryption) {
    window.location.assign("flex.html");
  }
}



// console.log(sign_in());