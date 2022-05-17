async function handleSignin() {

    const signupData = {
        email: document.getElementById("floatingInput").value,
        password: document.getElementById("floatingPassword").value
    }

    const response = await fetch('http://127.0.0.1:5001/signup', {
        method: 'POST',
        body: JSON.stringify(signupData)
    }
    )
    if (response.status == 200) {
        window.location.replace('http://127.0.0.1:5500/login.html')
    } else {
        alert(response.status)
    }


}
