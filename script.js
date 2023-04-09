password = document.getElementById("password").innerHTML
confirmPassword = document.getElementById("confirm_password").innerHTML


function passwordCheck() {
    if (document.getElementById("password").value == document.getElementById("confirm_password").value) {
        document.getElementById("password").style.borderColor = "green";
        document.getElementById("confirm_password").style.borderColor = "green";
    }
}

passwordCheck()

function formReset() {
    document.getElementsByTagName("form").reset()
}