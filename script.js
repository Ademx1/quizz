'use strict';


function generatePassword() {
    var length = parseInt(document.getElementById("passwordLength").value);
    var charset = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()/:;<=>?@}{ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var password = "";
    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }                                           
    document.getElementById("password").value = password;
    
   
  }