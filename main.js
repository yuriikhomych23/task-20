let btnAdd = document.getElementById('btn__add__user')
let formData = document.forms['data'];
let formResult = document.forms['result']

btnAdd.addEventListener('click', function() {
    
    
})























//DATA VALIDATION
btnAdd.addEventListener('click', function() {
    let regExpLogin =  /^[a-z A-Z]{1,20}$/;
    if(regExpLogin.test(login.value)) {
        login.style.border = '1.5px solid rgb(13, 201, 22)';
        login.style.transition = '.3s'
    } else {
        login.style.border = '1.5px solid rgb(253, 18, 18)';
        login.style.transition = '.3s'
    };
    let regExpEmail =  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,}$/;
    if (regExpEmail.test(email.value)) {
        email.style.border = '1.5px solid rgb(13, 201, 22)';
        email.style.transition = '.3s'
    } else {
        email.style.border = '1.5px solid rgb(253, 18, 18)';
        email.style.transition = '.3s'
    };
    let regExpPass = /^[a-z A-Z 0-9]{8,15}$/;
    if(regExpPass.test(pass.value)) {
        pass.style.border = '1.5px solid rgb(13, 201, 22)';
        pass.style.transition = '.3s'
    } else {
        pass.style.border = '1.5px solid rgb(253, 18, 18)';
        pass.style.transition = '.3s'
    };
});



