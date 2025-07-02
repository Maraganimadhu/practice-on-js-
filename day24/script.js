handleRegister=()=>{
let uname=document.getElementById("uname").value
let mob=document.getElementById("mob").value
let password=document.getElementById("password").value
let confirm_password=document.getElementById("confirm_password").value
// console.log(username,document,password,confirm_password)
let user_details={
    name:uname,
    mobile:mob,
    password:password
}
// let user_list=window.localStorage.getItem("user")
// user_list.JSON.parse(user_list)
// user_list.push(user)
// to convert this obj into string format(json) then we use stringify()
user_details=JSON.stringify(user_details)
// console.log(typeof(user_details))
//setting data in local storage 
// to access local stroge we use windowstroage 
if (password===confirm_password){
window.localStorage.setItem("user1",user_details)
location.assign("http://127.0.0.1:5500/day24/login.html")
}
else{
    alert("pasword mis match")
    location.assign("http://127.0.0.1:5500/day24/index.html")
} 
}
// login user data compare with local storage 
let login=()=>{
    let username=document.getElementById("u_name").value
    let userpassword=document.getElementById("user_pswd").value
    // console.log(username,userpassword)
    let reg_user=window.localStorage.getItem("user1") //to get data from local storage 
    reg_user=JSON.parse(reg_user) //convert the string into object
    // console.log(reg_user)
    if (username===reg_user.name && reg_user.password===userpassword){
        console.log("login succuss")
        location.assign("http://127.0.0.1:5500/day24/home.html")
    }
    else{
        alert("invalide values")
        location.assign("http://127.0.0.1:5500/day24/login.html")
    }
}