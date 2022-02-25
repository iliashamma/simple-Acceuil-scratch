let compteur=1;
let total=5;
const imagee=document.querySelector(".diaporama")
function slide(x){
if(compteur==total && x==1){
    compteur=1
    imagee.style.backgroundImage = " url('./images/principale"+compteur+".jpg')"
}else if(compteur==1 && x==-1){
    compteur=total
    imagee.style.backgroundImage = " url('./images/principale"+compteur+".jpg')"
}
else{
    compteur=compteur+x
    imagee.style.backgroundImage = " url('./images/principale"+compteur+".jpg')"
}
    
}
function slideAuto(){
if(compteur==total){
    compteur=1
    imagee.style.backgroundImage = " url('./images/principale"+compteur+".jpg')"
}
else{
    compteur=compteur+1
    imagee.style.backgroundImage = " url('./images/principale"+compteur+".jpg')"
}
    
}
window.setInterval(slideAuto,3000)