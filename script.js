const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener("submit", (e) => {
    let messages = []
    if (username.value === '' || username.value == null) {
        messages.push('Input a username')
    }
    if (password.value.length <= 6){
        messages.push ('password too short')
    }

    if (password.value.length > 20){
        messages.push ('password can not exceed 20 characters')
    }

    if (messages.length > 0) {
        e.preventDefault ()
        errorElement.innerText = messages.join(' ,')
    }
});
