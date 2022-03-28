
var fields = {};
// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}/*
document.addEventListener("DOMContentLoaded", function() {
    fields.fname = document.getElementById('fname');
    fields.email = document.getElementById('email');
    fields.subject = document.getElementById('subject');
    fields.comment = document.getElementById('comment');
    
   })
   function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }
   function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }
   function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }

   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.fname, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.subject, isNotEmpty);
    valid &= fieldValidation(fields.comment, isNotEmpty);
    
   
    return valid;
   }

   class User {
    constructor(fname, email, subject, comment) {
    this.fname = fname;
    this.subject = subject;
    this.email = email;
    this.comment = comment;
    
    }
   }

   function sendContact(){
       
    if(isValid()){

        usr = new User(fname.value, email.value, subject.value, comment.value);

        alert({usr.fname} `thank you for your message.`)
    }else{
        alert("There was an error")
    }
   }*/