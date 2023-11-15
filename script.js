// Cache the DOM
var buton= document.getElementById("button")
var nume=document.getElementById("Nume")
var prenume=document.getElementById("Prenume")
var img=document.getElementById("Img")
var body=document.getElementById("body")
//var an=document.getElementById("anNastere")
//const d=new Date();
//var year =date.getFullYear()
// Add eventListeners
buton.addEventListener("click",altaViata)
//an.addEventListener("mouseover", displayAge)

function altaViata()
{
nume.innerHTML="Functie:Astronaut"
prenume.innerHTML="Hobby:programator"
img.src="OIP.jpg"  
body.style.backgroundColor="orange"
body.style.Color="purple"
img.style.opacity="70%"
img.style.borderWidth="15px"
img.style.borderColor="green"
//buton.addEventListener("click",)
}
//function displayAge
{
//an.innerHTML=year-anNastere
}