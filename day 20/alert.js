let rem=setInterval(function(){
    alert("drink water")
    // confirm("you have drink?")
    console.log("ok")
},5000)
setTimeout(()=>{
clearInterval(rem)
},10000)
