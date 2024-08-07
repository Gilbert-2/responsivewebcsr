const menus = document.getElementById("menus")
const Headers = document.getElementById("hello")
const help= document.querySelector("#help")
 function dota(){
  alert("How much do you want to donate?")
 }
 function show(){
    if(menus.style.display == "none"){
        menus.style.display ="block"
    }
    else{
        menus.style.display ="none"
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