let btn=document.getElementById("btn")
let para=document.getElementsByTagName('p')[0]
let user1=document.getElementById("user1")
let user2=document.getElementById("user2")

para.addEventListener("mouseover",()=>{
    para.style.color="red"
    console.log("the curser on para was mouseover ")       
})
btn.addEventListener("click",(e)=>{
    e.target
    btn.style.color="green"
    console.log("the button was clicked ")       
})

user1.addEventListener("blur",()=>{
    user1.style.backgroundColor="blue"
    console.log("bluer")

})
// key events
document.addEventListener("keydown",(e)=>{
    e.preventDefault()
    console.log(e.key)
})