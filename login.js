// log in button
document.getElementById('login-button').addEventListener('click', function(){
    // email
    const userEmail = document.getElementById('user-email');
    const useremail = userEmail.value;
    // password
    const userPassword = document.getElementById('user-password');
    const userpasword = userPassword.value;
    // check email and password
    if(useremail == 'sontan@baap.com' && userpasword == 'secret'){
        window.location.href= 'banking.html';
    } 
});

