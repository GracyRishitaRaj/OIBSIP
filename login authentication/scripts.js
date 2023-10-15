const users = [
    { username: "acc1@gmail.com", password: "acc1" },
    { username: "acc2@gmail.com", password: "acc2" },
    // Add more users as needed
  ];
  
  function login(event) {
    event.preventDefault();
    
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    const inputUsername = usernameInput.value;
    const inputPassword = passwordInput.value;
  
    const userFound = users.some(user => user.username === inputUsername && user.password === inputPassword);
  
    if (userFound) {
      window.location.href = "secured page.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }
  
  const loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', login);
  