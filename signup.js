// SignUpBtn, SignUpEmail, SignUpUsername, CreatePasswordEle, ConfirmPasswordEle, 

const SignUpBtn = document.getElementById("SignUpBtn");
const SignUpUsernameEle = document.getElementById("SignUpUsername");
const SignUpEmailEle = document.getElementById("SignUpEmail");
const CreatePasswordEle = document.getElementById("CreatePassword");
const ConfirmPasswordEle = document.getElementById("ConfirmPassword");

// localStorage.clear();

function valid() {
    if(SignUpUsernameEle.value == "" || SignUpEmailEle.value == "" || CreatePasswordEle.value == "" || ConfirmPasswordEle.value == "") {
        alert("Enter each deatil properly");
        return false;
    }
    else if(CreatePasswordEle.value != ConfirmPasswordEle.value) {
        alert("Passwords did not match");
        return false;
    }
    return true;
}

SignUpBtn.onclick = function() {
    if(!valid()) {
        return;
    }
    let DataBase = getDatabase();
    DataBase[SignUpEmailEle.value] = {};
    DataBase[SignUpEmailEle.value]["email"] = SignUpEmailEle.value;
    DataBase[SignUpEmailEle.value]["username"] = SignUpUsernameEle.value;
    DataBase[SignUpEmailEle.value]["password"] = CreatePasswordEle.value;
    setDatabase(DataBase);
    console.log(getDatabase());
    localStorage.setItem("currentuseremail", JSON.stringify(DataBase[SignUpEmailEle.value]["email"]));
    console.log(localStorage);
    window.location.href = "main.html";
}

console.log("signup.html :\n\n");
console.log("Database : \n", getDatabase());
