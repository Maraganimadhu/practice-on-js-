// let para=document.getElementsByTagName("p")[0]
// let user_color=prompt("enetr a color to apply on text")
// let con=confirm("are you sure?")
// para.style.fontSize="150px"
// para.style.color=con?confirm:"black"
// para.style.border="5px solid black"
// para.style.textDecoration="underline"
let hero=["ntr","nani","prabhas","mahesh"]
let heroines=["samantha","sai pallavi","anushuka","shradd"]

let list_both=document.createElement("ul")
hero.forEach((v,i,a)=>{
    let list_iteam=document.createElement("li")
    list_iteam.innerText=`${v}\t -${heroines[i]}`
    list_both.append(list_iteam)
})
document.body.append(list_both)
//or 
// let list_both=document.createElement("ol")
// for (let i=0;i<hero.length;i++){
//     let list_iteam=document.createElement("li")
//     list_iteam.innerText=`${hero[i]}\t-${heroines[i]}`
//     list_both.append(list_iteam)
// }