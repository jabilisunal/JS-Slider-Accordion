let  contentBx =document.querySelectorAll(".contentBox");

contentBx.forEach((elem)=>{
    elem.addEventListener("click",function(){
        elem.classList.toggle("active")
    })
})