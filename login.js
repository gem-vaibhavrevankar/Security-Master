const username = document.getElementById("username");
const signuppassword = document.getElementById("signupPassword");
const firstname = document.getElementById("firstname");
const secondname = document.getElementById("secondname");
const ec = document.getElementById("ec");
const dc = document.getElementById("dc");
const designation = document.getElementById("designation");
const doj = document.getElementById("doj");
const loginusername = document.getElementById("loginusername");
const loginpassword = document.getElementById("loginpassword");


const DATA = {
    FIRST_NAME: firstname,
    SECOND_NAME: secondname,
    EMAIL: username,
    JOINING_DATE: doj,
    DESIGNATION: designation,
    EC_CHAIR: ec,
    DC_CHAIR: dc
}

const sinupform = document.getElementById("signupForm")
sinupform.addEventListener('submit', (e) => {
e.defaultPrevented(e);
const api = "https://securitymasterdataspie.onrender.com/users";
fetch(api,{
    method : "POST",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(DATA)

}).then((res) => res.json()).then((data) => {
    console.log("data added successfully");
    // sinupform.reset();
})
})

