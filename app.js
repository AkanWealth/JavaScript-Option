let allUsers = JSON.parse(localStorage.getItem("users"));
if (allUsers == null) {
    allUsers = [];
}​​
function findUserByUserName() {
    isUserExist = allUsers.find(checkUsername)
    if (isUserExist == undefined) {
        alert("Record not found")
    } else {
        location.href = "dashboard.html"
        location.assign("dashboard.html")​
            // alert("Congrats!" +  JSON.stringify(isUserExist))
    }​
}​
function checkUsername(object) {
    return object.username == document.getElementById("userName").value
}​​
function AddNewUser() {
    password = document.getElementById("password").value
    cpassword = document.getElementById("cpassword").value

    if (password == cpassword) {​
        // user object
        profilePics = document.getElementById("pics").value
        newUser = {
                "fullName": document.getElementById("fullName").value,
                "email": document.getElementById("email").value,
                "phone": document.getElementById("phone").value,
                "pics": profilePics.split("\\")[2],
                "username": document.getElementById("UserName").value,
                "password": document.getElementById("password").value​
            }​
            // ############## Explanation for profile picture split #############//
            // #alert("before split" +newUser.pics)
            // #c:\fakepath\1.jpeg
            // # alert(newUser.pics.split("\\")[2])
            ​
            // add new user to localstorage

        // update users array with the new user
        allUsers.push(newUser)
            // add to local storage
        localStorage.setItem("users", JSON.stringify(allUsers))​

    } else {
        alert("Password mismatch")
    }

    ​
}