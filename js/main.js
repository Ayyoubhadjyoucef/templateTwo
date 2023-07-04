//  start btn scroll to top 
let Btn = document.querySelector('.scroll-top');
window.onscroll = function (){
    if(this.scrollY >=1000){
        Btn.classList.add("show");
    }else{
        Btn.classList.remove("show");
    }
}
Btn.onclick = function (){
    window.scrollTo({
        top:0 ,
        behavior: "smooth"
    });
}
//  end btn scroll to top 
// start btn nav bar 
let menu = document.querySelector('.toggle-menu');
let links = document.querySelector('.links');

menu.onclick = function (){
    if(links.classList.contains('show-links')){
        links.classList.remove("show-links");
    }else{
        links.classList.add("show-links");
    }
    
}
// end btn nav bar 
// start skills progress 
let spans = document.querySelectorAll('.prog .pro');
let skills = document.getElementById('SKILLS');
window.addEventListener("scroll" , () =>{
    const secPos = skills.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if( secPos < screenPos ){
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }else{
        spans.forEach((span) => {
            span.style.width = '0%';
        });
    }
})
// end skills progress 
