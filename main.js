let formData = document.forms['data'];
let btnAdd = document.getElementById('btn__add__user');
let formResult = document.forms['result']

btnAdd.addEventListener('click', function() {
    let th = document.createElement('th');
    formData.login.value = th.innerHTML;
})

