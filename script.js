'use strict';


function generatePassword() {
    var length = parseInt(document.getElementById("passwordLength").value);
    if(length==0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter valid length!',
          })
         return;
    }
    
    var charset = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()/:;<=>?@}{ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var password = "";
    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }                                           
    document.getElementById("password").value = password;
    
   
  }