//From event listners
document.getElementById('username').addEventListener('blur', validateUserName);
document.getElementById('zip').addEventListener('blur', validateZipCode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhoneNumber);

//Event listner functions

//Name Function
function validateUserName()
{
    const name = document.getElementById('username');
    const re = /^[a-zA-Z]{2,12}$/;

    if (!re.test(name.value)) 
    {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

//Zipcode Function
function validateZipCode()
{
    const zip = document.getElementById('zip');
    const re = /^[0-9]{5}$/;

    if (!re.test(zip.value)) 
    {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

//Email Function
function validateEmail()
{
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zAZ]{2,6})$/;

    if (!re.test(email.value)) 
    {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

//Phone number Function
function validatePhoneNumber()
{
    const phone = document.getElementById('phone');
    // [+][Area-Code][Phone Number] 
    const re = /^\(?\+?\(?\d{1,3}\)?[-. ]?\d{2,3}[-. ]?\d{4,8}$/;

    if (!re.test(phone.value)) 
    {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}
