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
    
}

//Phone number Function
function validatePhoneNumber()
{
    
}
