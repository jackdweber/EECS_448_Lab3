// Function to validate password.
var validate_password = function(){
    var pass1 = document.getElementById('pass1').value
    var pass2 = document.getElementById('pass2').value

    if(pass1.length < 8){
        alert('Passsword must be 8 characters long.')
        return
    }

    if(pass1 !== pass2){
        alert('Passwords must be the same.')
        return
    }

    alert('Congrats the passwords are equal!')
}