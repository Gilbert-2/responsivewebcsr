const menus = document.getElementById("menus")
const Headers = document.getElementById("hello")
menus.style.right ="-110%"
function show(){
    if(menus.style.right == "-110%"){
        menus.style.right ="0"
    }
    else{
        menus.style.right ="-110%"
    }
}

window.addEventListener("scroll",function(){
    if(this.window.scrollY > 0){
        Headers.style.background="#9348D9"
    }
    else{
        Headers.style.background="transparent"
    }
})