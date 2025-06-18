
let val1=document.getElementById("num1")
let val2=document.getElementById("num2")
let btn=document.getElementById("btn")
let result=0
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let result=Number(val1.value)+Number(val2.value)
    console.log(result)
    div.append(result)
})
let div=document.createElement("div")
// div.style.border="2px solid green"
div.style.width="50px"
div.style.height="50px"
document.body.append(div)