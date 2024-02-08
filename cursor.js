const curso=document.querySelector(".cursor");
let timeout;   

document.addEventListener("mousemove",e=>{
    // console.log(e.pageX)
    // console.log(e.pageY)
    let x=e.pageX;
    let y=e.pageY;
    curso.style.top=y+"px";
    curso.style.left=x+"px";
    curso.style.display="block"

    function mouseStop(){
        curso.style.display="none"
    }
    clearTimeout(timeout)
    timeout=setTimeout(mouseStop,1000)
})
document.addEventListener("mouseout",e=>{
    curso.style.display="none"
})

