
import { gsap } from "gsap";



const root=getComputedStyle(document.documentElement);
const ham=document.querySelector('.ham');
const hamSpan=document.querySelectorAll('.ham >span');
const mnav=document.querySelector('.mnav');
const mnavLi=document.querySelectorAll('.mnav li');
const mnavIcons=document.querySelectorAll('.mnav .icons span');
const sections=document.querySelectorAll('section')

//console.log(mnavIcons);

let hamburgerAnimation=gsap.timeline({paused:true});

hamburgerAnimation.to(mnav,{
left:'0%'
});
hamburgerAnimation.from(mnavLi,{
x:-100,
opacity:0,
delay:0.1,
stagger:0.1},'a');

hamburgerAnimation.from(mnavIcons,{
y:100,
opacity:0,
delay:0.1,
stagger:0.1},'a');

ham.addEventListener('click',()=>{
mnav.classList.toggle('active');

if(mnav.classList.contains('active')){
hamburgerAnimation.restart();
}
else{hamburgerAnimation.reverse();}
})

function navDaycolorchange(){
hamSpan.forEach((hamLines)=>{hamLines.style.backgroundColor='var(--aqua)'})


document.querySelectorAll('nav ul li a').forEach((navul)=>{
    navul.style.color='var(--aqua)';
})
document.querySelectorAll('.icons .toggle i').forEach((icons)=>{
    icons.style.color='var(--aqua)';
})



document.querySelectorAll('.textlogo h2 , .textlogo h3').forEach((txtlogo)=>{
txtlogo.style.color='var(--aqua)'})

document.querySelectorAll('.logo svg path').forEach((logoSvg)=>{
    logoSvg.style.fill='var(--aqua)'
})
}

function navcolorchange1(){
hamSpan.forEach((hamLines)=>{
    hamLines.style.backgroundColor='var(--brown)'})

    document.querySelectorAll('nav ul li a').forEach((navul)=>{
        navul.style.color='var(--brown)';
    })
    document.querySelectorAll('.icons .toggle i').forEach((icons)=>{
        icons.style.color='var(--brown)';
    })


    document.querySelectorAll('.textlogo h2 , .textlogo h3').forEach((txtlogo)=>{
        txtlogo.style.color=' var(--brown)'})


        document.querySelectorAll('.logo svg path').forEach((logoSvg)=>{
            logoSvg.style.fill=' var(--brown)'
        })
}


//Toggle Day And Night
let togglee=document.querySelectorAll('.toggle')
let moonIcon=document.querySelectorAll('.moon')
let sunIcon=document.querySelectorAll('.sun')
let moonIcons=[moonIcon[0],moonIcon[1]]
let sunIcons=[sunIcon[0],sunIcon[1]]

let dayNightMode=gsap.timeline({paused:true})
dayNightMode.to(sunIcons,{
    top:'100%'})
dayNightMode.to(moonIcons,{
    top:'0%'})
dayNightMode.to('.bg',{
    background:"radial-gradient(circle, #2a0039, #5e004b)"})
dayNightMode.to('.mnav',{
    background:"radial-gradient(circle, #2a0039, #5e004b)"})
dayNightMode.to(':root',{
'--brown':'var(--aqua)'
})
dayNightMode.to('nav',{
scrollTrigger: {
trigger: sections[2],
start: "center bottom",
end: "bottom top",
onEnter: () => { 
navDaycolorchange()
},
onLeave: () => {      
togglee.forEach((toggleee)=>{
toggleee.classList.contains('nightMode') ? navDaycolorchange() : navcolorchange1() })


},
onEnterBack: () => {       
navDaycolorchange()
},
onLeaveBack: () => {    
togglee.forEach((toggleee)=>{
toggleee.classList.contains('nightMode') ? navDaycolorchange() : navcolorchange1() })
},
scrub: true, // Smooth linking to scroll
},
})

togglee.forEach((toggle)=>{
toggle.addEventListener('click',()=>{
togglee.forEach((ele)=>{
ele.classList.toggle('nightMode')
ele.classList.contains('nightMode') ? dayNightMode.restart(true,false) : dayNightMode.reverse()})
})})


const button = document.querySelectorAll('.button');
const button3 = document.querySelector('.button3');

button.forEach((e)=>{
e.addEventListener('mouseenter',()=>{
    gsap.to(button,{ y:-20,})})
e.addEventListener('mouseleave',()=>{
    gsap.to(button,{ y:0,})  })
})


button3.addEventListener('mouseenter',()=>{
    gsap.to(button3,{ y:-20,
       })})
button3.addEventListener('mouseleave',()=>{
    gsap.to(button3,{ y:0,})  })

