import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/Addons.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import * as dat from 'dat.gui';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const gui = new dat.GUI();
gui.hide()


const sections=document.querySelectorAll('section')
const scene=new THREE.Scene();
const loadingManager=new THREE.LoadingManager()
const textureLoader=new RGBELoader(loadingManager);
const modelLoader=new GLTFLoader();

//MobileView Flagg
let isMobile=false;
function mobileViweChecker() {
        if (window.innerWidth <=768) {
        isMobile=true;
        console.log('MobileViewIsOn');}
        else {isMobile=false;
        console.log('PcViewIsOn');}
}

    mobileViweChecker();


//HDRI
let environmentMap=textureLoader.load('models/gem_2.hdr',
(e)=>{
    console.log('loaded hdri')
    e.mapping=THREE.EquirectangularReflectionMapping},
(e)=>{console.log("progress hdri");},
(e)=>{console.log("error hdri");
})
scene.environment=environmentMap;
scene.environmentIntensity=2.5;
scene.environmentRotation.set(Math.PI,0,0)




//Customizing Icons
const modelSwapIcon = document.querySelector('.ring');
const bodyMaterialIcon = document.querySelector('.body');
const bigDiamondIcon = document.querySelector('.diamond');
const smallDiamondIcon = document.querySelector('.diamond1');
const materials = document.querySelector('.materials');
const bigDiamondIcons = document.querySelector('.bigdiamonds');
const smallDiamondIcons = document.querySelector('.smalldiamonds');
const customizingWrappers = gsap.utils.toArray('.customizationWrapper');
const ringss = document.querySelector('.rings');

bodyMaterialIcon.addEventListener('click', () => {
    materials.classList.toggle('active');
    bigDiamondIcons.classList.remove('active');
    smallDiamondIcons.classList.remove('active');
    ringss.classList.remove('active');

    if (materials.classList.contains('active')) {
        gsap.to(customizingWrappers, { border:'2px solid var(--brown)' });
    } else {
        gsap.to(customizingWrappers, { borderWidth: '0px', ease: 'power1.inOut' });
    }
});

bigDiamondIcon.addEventListener('click', () => {
    bigDiamondIcons.classList.toggle('active');
    smallDiamondIcons.classList.remove('active');
    materials.classList.remove('active');
    ringss.classList.remove('active');

    if (bigDiamondIcons.classList.contains('active')) {
        gsap.to(customizingWrappers, { border:'2px solid var(--brown)' });
    } else {
        gsap.to(customizingWrappers, { borderWidth: '0px', ease: 'power1.inOut' });
    }
});

smallDiamondIcon.addEventListener('click', () => {
    smallDiamondIcons.classList.toggle('active');
    bigDiamondIcons.classList.remove('active');
    materials.classList.remove('active');
    ringss.classList.remove('active');

    if (smallDiamondIcons.classList.contains('active')) {
        gsap.to(customizingWrappers, { border:'2px solid var(--brown)' });
    } else {
        gsap.to(customizingWrappers, { borderWidth: '0px', ease: 'power1.inOut' });
    }
});

const materialColor=document.querySelectorAll('.materials >img')
const diamondColor=document.querySelectorAll('.bigdiamonds >img')
const SdiamondColor=document.querySelectorAll('.smalldiamonds >img')

const diamondProperties={
    whitecolor:new THREE.Color(0xffffff), 
    rubycolor:new THREE.Color(0x7b0323), 
    aquacolor:new THREE.Color(0x0F52BA), 
    voiletcolor:new THREE.Color(0x8F00FF), 
    greencolor:new THREE.Color(0x00674f), 
    pinkcolor:new THREE.Color(0xf205b3), 
    roughness : 0.08,
    metalness : 0.35,
    ior: 2.4,
    reflectivity :1.1,
    opacity : 1,
    thickness : 3,
    transmission : 1,
    refractionRatio:100,
    transparent:false}
    



// const diamondbody={
//     color:new THREE.Color(0xe3b643),
//     color1:new THREE.Color(0xb27862),
//     color2:new THREE.Color(0xC0C0C0),
//     metalness : 0.95,
//     reflectivity : 2.5,
//     roughness : 0.15,
// }
const diamondbody={
    color:new THREE.Color(0xe2bf7f),
    color1:new THREE.Color(0xb27862),
    color2:new THREE.Color(0xC0C0C0),
    metalness : 1,
    reflectivity : 10,
    roughness : 0.05,
}



let pc_landing_page_Ring_Movement=[

//Section0    
    {rotationX:-5.9,
    rotationY:-6.4,
    rotationZ:-0.4,
    positionX:-3.6,
    positionY:0.5,
    positionZ:4},

//Section1
   {rotationX:-6,
    rotationY:-3,
    rotationZ:-0.5,
    positionX:3.2,
    positionY:0.5,
    positionZ:4},

//Section2    
    {rotationX:0.5,
    rotationY:0,
    rotationZ:0,
    positionX:0,
    positionY:1,
    positionZ:4},
   
//Section3
    {rotationX:-0.1,
     rotationY:2.7,
     rotationZ:0.5,
     positionX:-5.1,
     positionY:1,
     positionZ:3.3},

//Section4     
    {rotationX:0,
     rotationY:0,
     rotationZ:0,
     positionX:0,
     positionY:-2,
     positionZ:4},

//Section5
    {rotationX:0,
     rotationY:0,
     rotationZ:0,
     positionX:0,
     positionY:1,
     positionZ:0},
]

let pc_landing_page_Ring2_Movement=[
//Section0
   {rotationX:-4.8,
    rotationY:-5.9,
    rotationZ:-0.6,
    positionX:-2.9,
    positionY:0,
    positionZ:2.4},

//Section1   
    {rotationX:-4.9,
    rotationY:-3.8,
    rotationZ:-1,
    positionX:4,
    positionY:-0.3,
    positionZ:2.4},
   
//Section2
    {rotationX:-4.0,
     rotationY:3,
     rotationZ:0.5,
     positionX:-5.1,
     positionY:1,
     positionZ:2},

//Section3    
    {rotationX:-4.3,
     rotationY:6.8,
     rotationZ:4.7,
     positionX:-5.1,
     positionY:-0.3,
     positionZ:2.4},

//Section4
    {rotationX:1.1,
     rotationY:0.8,
     rotationZ:-0.4,
     positionX:0,
     positionY:-2,
     positionZ:2.9},

//Section5   
{rotationX:1,
    rotationY:0,
    rotationZ:0,
    positionX:0,
    positionY:0,
    positionZ:0}
]

let pc_landing_page_RoundedRing_Movement=[
//Section0
   {rotationX:0,
    rotationY:3,
    rotationZ:1,
    positionX:-3.5,
    positionY:0,
    positionZ:2.5},

//Section1   
    {rotationX:-1.1,
    rotationY:-0.7,
    rotationZ:5.9,
    positionX:4,
    positionY:0,
    positionZ:2.5},
   
//Section2
    {rotationX:0,
     rotationY:2.2,
     rotationZ:2.4,
     positionX:0,
     positionY:0,
     positionZ:1},

//Section3    
    {rotationX:0,
     rotationY:0,
     rotationZ:2.4,
     positionX:-5.8,
     positionY:0,
     positionZ:1.1},

//Section4
    {rotationX:4,
     rotationY:-4.7,
     rotationZ:0,
     positionX:0,
     positionY:-2.5,
     positionZ:4.5},

//Section5   
{rotationX:1,
    rotationY:0,
    rotationZ:0,
    positionX:0,
    positionY:0,
    positionZ:0}
]

let mobile_landing_page_Ring_Movement=[

//Section0
    {rotationX:0,
    rotationY:0,
    rotationZ:0,
    positionX:0,
    positionY:0.8,
    positionZ:2},

//Section1
   {rotationX:0.7,
    rotationY:-0.3,
    rotationZ:0.6,
    positionX:-0.8,
    positionY:0.6,
    positionZ:2},

//Section2
    {rotationX:0.2,
    rotationY:2,
    rotationZ:0.7,
    positionX:0.5,
    positionY:0,
    positionZ:2},
   
//Section3    
    {rotationX:-3,
     rotationY:-0.4,
     rotationZ:2.2,
     positionX:-0.9,
     positionY:1.3,
     positionZ:2},

//Section4    
    {rotationX:0.2,
     rotationY:5.6,
     rotationZ:-0.4,
     positionX:0,
     positionY:-1.4,
     positionZ:2},

//Section5
     {rotationX:0,
     rotationY:0,
     rotationZ:0,
     positionX:0,
     positionY:1.5,
     positionZ:0},
       
]

let mobile_landing_page_Ring2_Movement=[
//Section0
    {rotationX:1.6,
    rotationY:0.5,
    rotationZ:-0.5,
    positionX:0,
    positionY:0,
    positionZ:2},

//Section1
   {rotationX:1.8,
    rotationY:-0.6,
    rotationZ:0.9,
    positionX:0,
    positionY:0.5,
    positionZ:2},

//Section2
    {rotationX:1.5,
    rotationY:-0.1,
    rotationZ:0.5,
    positionX:0,
    positionY:0.1,
    positionZ:2},
   
//Section3    
    {rotationX:-1.7,
     rotationY:3.6,
     rotationZ:3.9,
     positionX:-0.5,
     positionY:1,
     positionZ:1.5},

//Section4    
    {rotationX:0.2,
     rotationY:5.6,
     rotationZ:-0.4,
     positionX:0,
     positionY:-1.4,
     positionZ:2},

//Section5   
{rotationX:1,
    rotationY:0,
    rotationZ:0,
    positionX:0,
    positionY:0,
    positionZ:0},     
]

let mobile_landing_page_RoundedRing_Movement=[
//Section0
    {rotationX:1.5,
    rotationY:-0.5,
    rotationZ:3.5,
    positionX:0,
    positionY:0,
    positionZ:2.2},

//Section1
   {rotationX:-2,
    rotationY:-1.2,
    rotationZ:3.3,
    positionX:0,
    positionY:0.5,
    positionZ:2},

//Section2
    {rotationX:-0.5,
    rotationY:-3.8,
    rotationZ:3.2,
    positionX:0,
    positionY:0.5,
    positionZ:2},
   
//Section3    
    {rotationX:0.7,
     rotationY:0.5,
     rotationZ:6.5,
     positionX:0,
     positionY:0.5,
     positionZ:2},

//Section4    
    {rotationX:-3.4,
     rotationY:0.5,
     rotationZ:6.5,
     positionX:0,
     positionY:-2.6,
     positionZ:2},

//Section5   
{rotationX:1,
    rotationY:0,
    rotationZ:0,
    positionX:0,
    positionY:0,
    positionZ:0},     
]
    

function initialProperties(){
return new Promise((resolve,reject)=>{
ring3.position.set(
isMobile ? mobile_landing_page_Ring_Movement[0].positionX : pc_landing_page_Ring_Movement[0].positionX,
isMobile ? mobile_landing_page_Ring_Movement[0].positionY : pc_landing_page_Ring_Movement[0].positionY,
isMobile ? mobile_landing_page_Ring_Movement[0].positionZ : pc_landing_page_Ring_Movement[0].positionZ,);

ring3.rotation.set(
isMobile ? mobile_landing_page_Ring_Movement[0].rotationX : pc_landing_page_Ring_Movement[0].rotationX,
isMobile ? mobile_landing_page_Ring_Movement[0].rotationY : pc_landing_page_Ring_Movement[0].rotationY,
isMobile ? mobile_landing_page_Ring_Movement[0].rotationZ : pc_landing_page_Ring_Movement[0].rotationZ,);

resolve('1')})
}

// Sec3
let sec3=document.querySelector('.sec3')
let lane=document.querySelectorAll('.lane')
let oddLane=[lane[0],lane[2],lane[4]]
let evenLane=[lane[1],lane[3],lane[5]]
let Sec3timeline=gsap.timeline()

let tl = gsap.timeline({})
let tlr=gsap.timeline({paused:true})


ScrollTrigger.create({
    trigger: sections[5], 
    start: "top center", 
    end: "bottom center", 
    onEnter: () => tlr.play(), 
    onLeave: () => tlr.pause(), 
    onEnterBack: () => tlr.play(), 
    onLeaveBack: () => tlr.pause(), 
    scrub: true, 
    });

let pausebtn=document.querySelector(".pauseBtn")
let pausebtn0=document.querySelector(".pauseBtn :nth-child(1)")
let pausebtn1=document.querySelector(".pauseBtn :nth-child(2)")

tlr.pause()

pausebtn.addEventListener("click", () => {
    if (tlr.paused()) {
        tlr.play();
        pausebtn0.style.display='none'
        pausebtn1.style.display='block'
    }
    else {
        tlr.pause();
          pausebtn0.style.display='block'
        pausebtn1.style.display='none'
    }
    });


//Sizes
const sizes={width:window.innerWidth,
height:window.innerHeight}

const aspect=sizes.width/sizes.height;

let ring3,ring,roundedRing=null



function ring1() {

return new Promise((resolve,reject)=>{

modelLoader.load('/models/headringSqe.glb',
(model)=>{
ring3=model.scene.children[0];                       
scene.add(ring3);
let bigdiamond=ring3.children[0].material;
let innerframe=ring3.children[1].material;
let littlediamond=ring3.children[2].material;
let outerframe=ring3.children[3].material;
let bothDIamond={littlediamond,bigdiamond}
let bothMaterial={outerframe,innerframe}


for (let keys in bothDIamond){
let x=bothDIamond[keys]
x.roughness = diamondProperties.roughness;
x.metalness =  diamondProperties.metalness;
x.ior =  diamondProperties.ior;
x.reflectivity =diamondProperties.reflectivity;
x.opacity = diamondProperties.opacity;
x.thickness = diamondProperties.thickness;
x.clearCoat=0;
x.transmission = diamondProperties.transmission;
x.refractionRatio=diamondProperties.refractionRatio;
x.transparent=diamondProperties.transparent;}

for (let keys in bothMaterial){
let x=bothMaterial[keys]
x.metalness = diamondbody.metalness;
x.reflectivity = diamondbody.reflectivity;
x.roughness = diamondbody.roughness;
x.clearCoat=1.00;}

bothDIamond.bigdiamond.color= diamondProperties.rubycolor;
bothDIamond.littlediamond.color= diamondProperties.whitecolor;
bothMaterial.outerframe.color=diamondbody.color;
bothMaterial.innerframe.color=diamondbody.color2;
console.log(bothMaterial.outerframe)
ring3.scale.set(5,5,5);

let ring3Rotation=gui.addFolder('ring3Rotation')
ring3Rotation.add(ring3.rotation,'x',-10,10,0.1)
ring3Rotation.add(ring3.rotation,'y',-10,10,0.1)
ring3Rotation.add(ring3.rotation,'z',-10,10,0.1)

let ring3Position=gui.addFolder('ring3Position')
ring3Position.add(ring3.position,'x',-100,100,0.1)
ring3Position.add(ring3.position,'y',-100,100,0.1)
ring3Position.add(ring3.position,'z',-100,100,0.1) 

function changeDiamondColor(){
//materialColor        
materialColor[0].addEventListener('click',()=>{
bothMaterial.outerframe.color=new THREE.Color(diamondbody.color)
bothMaterial.innerframe.color=new THREE.Color(diamondbody.color2)})


materialColor[1].addEventListener('click',()=>{
bothMaterial.outerframe.color=new THREE.Color(diamondbody.color2)
bothMaterial.innerframe.color=new THREE.Color(diamondbody.color)
})

materialColor[2].addEventListener('click',()=>{
bothMaterial.outerframe.color=new THREE.Color(diamondbody.color2)
bothMaterial.innerframe.color=new THREE.Color(diamondbody.color2)
})
materialColor[3].addEventListener('click',()=>{
bothMaterial.outerframe.color=new THREE.Color(diamondbody.color1)
bothMaterial.innerframe.color=new THREE.Color(diamondbody.color2)
})

diamondColor[0].addEventListener('click',()=>{
bothDIamond.bigdiamond.color=new THREE.Color(diamondProperties.rubycolor)
})
diamondColor[1].addEventListener('click',()=>{
bothDIamond.bigdiamond.color=new THREE.Color(diamondProperties.whitecolor)
})

diamondColor[2].addEventListener('click',()=>{
bothDIamond.bigdiamond.color=new THREE.Color(diamondProperties.aquacolor)
})

diamondColor[3].addEventListener('click',()=>{
bothDIamond.bigdiamond.color=new THREE.Color(diamondProperties.greencolor)
})

SdiamondColor[0].addEventListener('click',()=>{
bothDIamond.littlediamond.color=new THREE.Color(diamondProperties.rubycolor)
})
SdiamondColor[1].addEventListener('click',()=>{
bothDIamond.littlediamond.color=new THREE.Color(diamondProperties.whitecolor)
})

SdiamondColor[2].addEventListener('click',()=>{
bothDIamond.littlediamond.color=new THREE.Color(diamondProperties.aquacolor)
})

SdiamondColor[3].addEventListener('click',()=>{
bothDIamond.littlediamond.color=new THREE.Color(diamondProperties.greencolor)
})

}




changeDiamondColor();
resolve("1");
},
(model)=>{console.log('Model3 Progress');},
(model)=>{console.log('Model3 Error');})
})
}

function ring2(){
return new Promise((resolve,reject)=>{
modelLoader.load('/models/ringG.glb',
(loadModel)=>{
console.log(loadModel);
ring=loadModel.scene.children[0]
let b_Diamond=ring.children[0].material
let boddy=ring.children[1].material
let s_Diamond=ring.children[2].material

let ring2D={b_Diamond,s_Diamond}

for (let key in ring2D) {
let y=ring2D[key]
y.roughness = diamondProperties.roughness;
y.metalness =  diamondProperties.metalness;
y.ior =  diamondProperties.ior;
y.reflectivity =diamondProperties.reflectivity;
y.opacity = diamondProperties.opacity;
y.thickness = diamondProperties.thickness;
y.transmission = diamondProperties.transmission;
y.refractionRatio=diamondProperties.refractionRatio;
y.transparent=diamondProperties.transparent;}

ring2D.s_Diamond.color=diamondProperties.greencolor
ring2D.b_Diamond.color=diamondProperties.rubycolor

boddy.metalness = diamondbody.metalness;
boddy.reflectivity = diamondbody.reflectivity;
boddy.roughness = diamondbody.roughness;
boddy.color=diamondbody.color



ring.scale.set(5,5,5)

let ring2Rotation=gui.addFolder('ringRotation')
ring2Rotation.add(ring.rotation,'x',-10,10,0.1)
ring2Rotation.add(ring.rotation,'y',-10,10,0.1)
ring2Rotation.add(ring.rotation,'z',-10,10,0.1)

let ring2Position=gui.addFolder('ringPosition')
ring2Position.add(ring.position,'x',-100,100,0.1)
ring2Position.add(ring.position,'y',-100,100,0.1)
ring2Position.add(ring.position,'z',-100,100,0.1) 




function changeDiamondColor2(){
//materialColor        
materialColor[0].addEventListener('click',()=>{
boddy.color=new THREE.Color(diamondbody.color)
})
materialColor[1].addEventListener('click',()=>{
boddy.color=new THREE.Color(diamondbody.color2)
})

materialColor[2].addEventListener('click',()=>{
boddy.color=new THREE.Color(diamondbody.color2)
})
materialColor[3].addEventListener('click',()=>{
boddy.color=new THREE.Color(diamondbody.color1)
})

diamondColor[0].addEventListener('click',()=>{
ring2D.b_Diamond.color=new THREE.Color(diamondProperties.rubycolor)
})
diamondColor[1].addEventListener('click',()=>{
ring2D.b_Diamond.color=new THREE.Color(diamondProperties.whitecolor)
})

diamondColor[2].addEventListener('click',()=>{
ring2D.b_Diamond.color=new THREE.Color(diamondProperties.aquacolor)
})

diamondColor[3].addEventListener('click',()=>{
ring2D.b_Diamond.color=new THREE.Color(diamondProperties.greencolor)
})

SdiamondColor[0].addEventListener('click',()=>{
ring2D.s_Diamond.color=new THREE.Color(diamondProperties.rubycolor)
})
SdiamondColor[1].addEventListener('click',()=>{
ring2D.s_Diamond.color=new THREE.Color(diamondProperties.whitecolor)
})

SdiamondColor[2].addEventListener('click',()=>{
ring2D.s_Diamond.color=new THREE.Color(diamondProperties.aquacolor)
})

SdiamondColor[3].addEventListener('click',()=>{
ring2D.s_Diamond.color=new THREE.Color(diamondProperties.greencolor)
})

}
changeDiamondColor2()

function ringAnimation() {
    for (let i = 1; i < sections.length; i++) {
    tl.fromTo(
    ring.position,
    {x: isMobile ? mobile_landing_page_Ring2_Movement[i - 1].positionX : pc_landing_page_Ring2_Movement[i - 1].positionX,
    y: isMobile ? mobile_landing_page_Ring2_Movement[i - 1].positionY : pc_landing_page_Ring2_Movement[i - 1].positionY,
    z: isMobile ? mobile_landing_page_Ring2_Movement[i - 1].positionZ : pc_landing_page_Ring2_Movement[i - 1].positionZ,},
    {scrollTrigger: {
    trigger: sections[i],
    scrub: true,
    start: "top bottom",
    end: "top top",
    snap: {snapTo: 1,         
    duration: 1.5,      
    ease: "none",}},
    x: isMobile ? mobile_landing_page_Ring2_Movement[i].positionX : pc_landing_page_Ring2_Movement[i].positionX,
    y: isMobile ? mobile_landing_page_Ring2_Movement[i].positionY : pc_landing_page_Ring2_Movement[i].positionY,
    z: isMobile ? mobile_landing_page_Ring2_Movement[i].positionZ : pc_landing_page_Ring2_Movement[i].positionZ,
    duration: 1.5,
    ease: "none",});
    
    tl.fromTo(
    ring.rotation,{
    x: isMobile ? mobile_landing_page_Ring2_Movement[i - 1].rotationX : pc_landing_page_Ring2_Movement[i - 1].rotationX,
    y: isMobile ? mobile_landing_page_Ring2_Movement[i - 1].rotationY : pc_landing_page_Ring2_Movement[i - 1].rotationY,
    z: isMobile ? mobile_landing_page_Ring2_Movement[i - 1].rotationZ : pc_landing_page_Ring2_Movement[i - 1].rotationZ,},
    {scrollTrigger: {
    trigger: sections[i],
    scrub: true,
    start: "top bottom",
    end: "top top",
    snap: {snapTo: 1,         
    duration: 1.5,      
    ease: "none",}},
    x: isMobile ? mobile_landing_page_Ring2_Movement[i].rotationX : pc_landing_page_Ring2_Movement[i].rotationX,
    y: isMobile ? mobile_landing_page_Ring2_Movement[i].rotationY : pc_landing_page_Ring2_Movement[i].rotationY,
    z: isMobile ? mobile_landing_page_Ring2_Movement[i].rotationZ : pc_landing_page_Ring2_Movement[i].rotationZ,
    duration: 1.5,
    ease: "none",});}
    
    tlr.fromTo(ring.rotation,{z: isMobile ? mobile_landing_page_Ring2_Movement[5].rotationZ : pc_landing_page_Ring2_Movement[5].rotationZ,}, {
    z: Math.PI*2, // Rotate continuously on Y-axis
    duration:4,
    delay:1.5,
    ease: "none", // Linear rotation
    repeat:-1});}
        
    ringAnimation()


})



resolve('model2')
})
}

function roundRing(){
return new Promise((resolve,reject)=>{

modelLoader.load('/models/rounded ring1.glb',

(load)=>{
    console.log(load,'Loaded');
    roundedRing=load.scene.children[0];
    let smallDiamondss=roundedRing.children[0]
    let bigDiamondss=roundedRing.children[1]
    let Outerring=roundedRing.children[2]
    let innerring=roundedRing.children[3]

    let small_Diamondss_Material=smallDiamondss.material
    let big_Diamondss_Material=bigDiamondss.material
    
    let Outerring_Material=Outerring.material
    let innerring_Material=innerring.material

    let diamondsss={small_Diamondss_Material,big_Diamondss_Material}
    let body={innerring_Material,Outerring_Material}

    for (let keys in diamondsss){
        let x=diamondsss[keys]
        x.roughness = diamondProperties.roughness;
        x.metalness =  diamondProperties.metalness;
        x.ior =  diamondProperties.ior;
        x.reflectivity =diamondProperties.reflectivity;
        x.opacity = diamondProperties.opacity;
        x.thickness = diamondProperties.thickness;
        x.transmission = diamondProperties.transmission;
        x.refractionRatio=diamondProperties.refractionRatio;
        x.transparent=diamondProperties.transparent;}
        
        for (let keys in body){
        let x=body[keys]
        x.metalness = diamondbody.metalness;
        x.reflectivity = diamondbody.reflectivity;
        x.roughness = diamondbody.roughness;}
        
        diamondsss.small_Diamondss_Material.color=diamondProperties.aquacolor;
        diamondsss.big_Diamondss_Material.color=diamondProperties.rubycolor;
        
        body.innerring_Material.color=diamondbody.color2;
        body.Outerring_Material.color=diamondbody.color;


        roundedRing.position.set(0,0,0)
        roundedRing.scale.set(3,3,3)


        function changeDiamondColor(){
            //materialColor        
            materialColor[0].addEventListener('click',()=>{
           body.Outerring_Material.color=new THREE.Color(diamondbody.color)
             body.innerring_Material.color=new THREE.Color(diamondbody.color2)})
            
            
            materialColor[1].addEventListener('click',()=>{
           body.Outerring_Material.color=new THREE.Color(diamondbody.color2)
             body.innerring_Material.color=new THREE.Color(diamondbody.color)
            })
            
            materialColor[2].addEventListener('click',()=>{
           body.Outerring_Material.color=new THREE.Color(diamondbody.color2)
             body.innerring_Material.color=new THREE.Color(diamondbody.color2)
            })
            materialColor[3].addEventListener('click',()=>{
           body.Outerring_Material.color=new THREE.Color(diamondbody.color1)
             body.innerring_Material.color=new THREE.Color(diamondbody.color2)
            })
            
            diamondColor[0].addEventListener('click',()=>{
                diamondsss.big_Diamondss_Material.color=new THREE.Color(diamondProperties.rubycolor)
            })
            diamondColor[1].addEventListener('click',()=>{
            diamondsss.big_Diamondss_Material.color=new THREE.Color(diamondProperties.whitecolor)
            })
            
            diamondColor[2].addEventListener('click',()=>{
            diamondsss.big_Diamondss_Material.color=new THREE.Color(diamondProperties.aquacolor)
            })
       
            diamondColor[3].addEventListener('click',()=>{
            diamondsss.big_Diamondss_Material.color=new THREE.Color(diamondProperties.greencolor)
            })
      
            SdiamondColor[0].addEventListener('click',()=>{
            diamondsss.small_Diamondss_Material.color=new THREE.Color(diamondProperties.rubycolor)
            })
            SdiamondColor[1].addEventListener('click',()=>{
            diamondsss.small_Diamondss_Material.color=new THREE.Color(diamondProperties.whitecolor)
            })
            
            SdiamondColor[2].addEventListener('click',()=>{
            diamondsss.small_Diamondss_Material.color=new THREE.Color(diamondProperties.aquacolor)
            })
     
            SdiamondColor[3].addEventListener('click',()=>{
            diamondsss.small_Diamondss_Material.color=new THREE.Color(diamondProperties.greencolor)
            })
            }

            changeDiamondColor()
    let rringRotation=gui.addFolder('rringRotation')
    rringRotation.add(roundedRing.rotation,'x',-10,10,0.1)
    rringRotation.add(roundedRing.rotation,'y',-10,10,0.1)
    rringRotation.add(roundedRing.rotation,'z',-10,10,0.1)
    
    let rringPosition=gui.addFolder('rringPosition')
    rringPosition.add(roundedRing.position,'x',-100,100,0.1)
    rringPosition.add(roundedRing.position,'y',-100,100,0.1)
    rringPosition.add(roundedRing.position,'z',-100,100,0.1) 

            
function RoundedringAnimation() {
    for (let i = 1; i < sections.length; i++) {
    tl.fromTo(
    roundedRing.position,
   {x: isMobile ? mobile_landing_page_RoundedRing_Movement[i - 1].positionX : pc_landing_page_RoundedRing_Movement[i - 1].positionX,
    y: isMobile ? mobile_landing_page_RoundedRing_Movement[i - 1].positionY : pc_landing_page_RoundedRing_Movement[i - 1].positionY,
    z: isMobile ? mobile_landing_page_RoundedRing_Movement[i - 1].positionZ : pc_landing_page_RoundedRing_Movement[i - 1].positionZ,},
    {scrollTrigger: {
    trigger: sections[i],
    scrub: true,
    start: "top bottom",
    end: "top top",
    snap: {snapTo: 1,         
    duration: 1.5,      
    ease: "none",}},
    x: isMobile ? mobile_landing_page_RoundedRing_Movement[i].positionX : pc_landing_page_RoundedRing_Movement[i].positionX,
    y: isMobile ? mobile_landing_page_RoundedRing_Movement[i].positionY : pc_landing_page_RoundedRing_Movement[i].positionY,
    z: isMobile ? mobile_landing_page_RoundedRing_Movement[i].positionZ : pc_landing_page_RoundedRing_Movement[i].positionZ,
    duration: 1.5,
    ease: "none",});
    
    tl.fromTo(
    roundedRing.rotation,{
    x: isMobile ? mobile_landing_page_RoundedRing_Movement[i - 1].rotationX : pc_landing_page_RoundedRing_Movement[i - 1].rotationX,
    y: isMobile ? mobile_landing_page_RoundedRing_Movement[i - 1].rotationY : pc_landing_page_RoundedRing_Movement[i - 1].rotationY,
    z: isMobile ? mobile_landing_page_RoundedRing_Movement[i - 1].rotationZ : pc_landing_page_RoundedRing_Movement[i - 1].rotationZ,},
    {scrollTrigger: {
    trigger: sections[i],
    scrub: true,
    start: "top bottom",
    end: "top top",
    snap: {snapTo: 1,         
    duration: 1.5,      
    ease: "none",}},
    x: isMobile ? mobile_landing_page_RoundedRing_Movement[i].rotationX : pc_landing_page_RoundedRing_Movement[i].rotationX,
    y: isMobile ? mobile_landing_page_RoundedRing_Movement[i].rotationY : pc_landing_page_RoundedRing_Movement[i].rotationY,
    z: isMobile ? mobile_landing_page_RoundedRing_Movement[i].rotationZ : pc_landing_page_RoundedRing_Movement[i].rotationZ,
    duration: 1.5,
    ease: "none",});}
    
    tlr.fromTo(roundedRing.rotation,{z: isMobile ? mobile_landing_page_RoundedRing_Movement[5].rotationZ : pc_landing_page_RoundedRing_Movement[5].rotationZ,}, {
    z: Math.PI*2, // Rotate continuously on Y-axis
    duration:4,
    delay:1.5,
    ease: "none", // Linear rotation
    repeat:-1});}
        
RoundedringAnimation()

},
(progress)=>{console.log("Progress")},
(error)=>{console.log("Error");})
resolve("hui hui")})
}


function modelSwap() {

return new Promise((resolve,reject)=>{

modelSwapIcon.addEventListener('click', () => {
    ringss.classList.toggle('active')
    smallDiamondIcons.classList.remove('active')
    bigDiamondIcons.classList.remove('active')
    materials.classList.remove('active')

if(ringss.classList.contains('active')){
    gsap.to(customizingWrappers,{
    border:'2px solid var(--brown)'})}

else{gsap.to(customizingWrappers,{
    border:'none',
    ease:'power1.inOut',})}

});

let ringsIcons=document.querySelectorAll('.rings svg')
console.log(ringsIcons);

ringsIcons[0].addEventListener('click',()=>{
    scene.add(ring3);
    scene.remove(roundedRing);
    scene.remove(ring); })

ringsIcons[1].addEventListener('click',()=>{
    scene.add(ring);
    scene.remove(roundedRing);
    scene.remove(ring3); })
    
ringsIcons[2].addEventListener('click',()=>{
scene.add(roundedRing);
scene.remove(ring);
scene.remove(ring3); })
resolve('01')
})

}
function ring3Animation() {
// Landing Page Animation (Section 1)
tl.to(ring3.position, {
x: isMobile ? mobile_landing_page_Ring_Movement[0].positionX : pc_landing_page_Ring_Movement[0].positionX,
y: isMobile ? mobile_landing_page_Ring_Movement[0].positionY : pc_landing_page_Ring_Movement[0].positionY,
z: isMobile ? mobile_landing_page_Ring_Movement[0].positionZ : pc_landing_page_Ring_Movement[0].positionZ,
duration: 3,
ease: "power1.inOut",
}, 'section1');

tl.to(ring3.rotation, {
x: isMobile ? mobile_landing_page_Ring_Movement[0].rotationX : pc_landing_page_Ring_Movement[0].rotationX,
y: isMobile ? mobile_landing_page_Ring_Movement[0].rotationY : pc_landing_page_Ring_Movement[0].rotationY,
z: isMobile ? mobile_landing_page_Ring_Movement[0].rotationZ : pc_landing_page_Ring_Movement[0].rotationZ,
duration: 3,
ease: "power1.inOut",
}, 'section1');



// Section-Based Animations
for (let i = 1; i < sections.length; i++) {
tl.fromTo(
ring3.position,
{x: isMobile ? mobile_landing_page_Ring_Movement[i - 1].positionX : pc_landing_page_Ring_Movement[i - 1].positionX,
y: isMobile ? mobile_landing_page_Ring_Movement[i - 1].positionY : pc_landing_page_Ring_Movement[i - 1].positionY,
z: isMobile ? mobile_landing_page_Ring_Movement[i - 1].positionZ : pc_landing_page_Ring_Movement[i - 1].positionZ,},
{scrollTrigger: {
trigger: sections[i],
scrub: true,
start: "top bottom",
end: "top top",
snap: {snapTo: 1,         
duration: 1.5,      
ease: "none",}},
x: isMobile ? mobile_landing_page_Ring_Movement[i].positionX : pc_landing_page_Ring_Movement[i].positionX,
y: isMobile ? mobile_landing_page_Ring_Movement[i].positionY : pc_landing_page_Ring_Movement[i].positionY,
z: isMobile ? mobile_landing_page_Ring_Movement[i].positionZ : pc_landing_page_Ring_Movement[i].positionZ,
duration: 1.5,
ease: "none",});

tl.fromTo(
ring3.rotation,{
x: isMobile ? mobile_landing_page_Ring_Movement[i - 1].rotationX : pc_landing_page_Ring_Movement[i - 1].rotationX,
y: isMobile ? mobile_landing_page_Ring_Movement[i - 1].rotationY : pc_landing_page_Ring_Movement[i - 1].rotationY,
z: isMobile ? mobile_landing_page_Ring_Movement[i - 1].rotationZ : pc_landing_page_Ring_Movement[i - 1].rotationZ,},
{scrollTrigger: {
trigger: sections[i],
scrub: true,
start: "top bottom",
end: "top top",
snap: {snapTo: 1,         
duration: 1.5,      
ease: "none",}},
x: isMobile ? mobile_landing_page_Ring_Movement[i].rotationX : pc_landing_page_Ring_Movement[i].rotationX,
y: isMobile ? mobile_landing_page_Ring_Movement[i].rotationY : pc_landing_page_Ring_Movement[i].rotationY,
z: isMobile ? mobile_landing_page_Ring_Movement[i].rotationZ : pc_landing_page_Ring_Movement[i].rotationZ,
duration: 1.5,
ease: "none",});}

// Add Rotation Animation for Section 5 (Last Section)
tlr.fromTo(ring3.rotation,{y: isMobile ? mobile_landing_page_Ring_Movement[5].rotationY : pc_landing_page_Ring_Movement[5].rotationY,}, {
y: Math.PI*2, // Rotate continuously on Y-axis
duration:4,
delay:1.5,
ease: "none", // Linear rotation
repeat:-1});


}

// Should Be enabled
window.onbeforeunload=function scroll(){
    window.scrollTo(0,0)
}


Sec3timeline.to('.gallery',{scrollTrigger: {
    trigger: sections[2],
    markers:false,
    immediateRender:false, 
    scrub:true,       
    start: "top bottom",
    end: "top top",}, 
'--scale':'1',},'Sec3')

Sec3timeline.to('.gallery',{scrollTrigger: {
    trigger: sections[2],
    markers:false,
    immediateRender:false, 
    scrub:true,       
    start: "top bottom",
    end: "top top",},
'--rotate':'-5deg',},'Sec3')




//camera
const camera=new THREE.PerspectiveCamera(75,aspect,0.1,20);
camera.position.set(0,0,10)

let cameraPos=gui.addFolder('CameraPosition')
cameraPos.add(camera.position,'x',-100,100,0.1)
cameraPos.add(camera.position,'y',-100,100,0.1)
cameraPos.add(camera.position,'z',-100,100,0.1)

let cameraRotation=gui.addFolder('CameraRotation')
cameraRotation.add(camera.rotation,'x',-100,100,0.1)
cameraRotation.add(camera.rotation,'y',-100,100,0.1)
cameraRotation.add(camera.rotation,'z',-100,100,0.1)

scene.add(camera);

//light
const light = new THREE.DirectionalLight( 0xffffff,42 );
light.position.set( -3.5,-1.9,0 );
const DirectionalLightHelper=new THREE.DirectionalLightHelper(light,1,0xffffff)
scene.add( light );

const light1= new THREE.DirectionalLight(0xffffff,65.7);
light1.position.set( -0.5,-2.6,-1.4 );
const DirectionalLightHelper1=new THREE.DirectionalLightHelper(light1,1,0xffffff)
scene.add( light1 );

const light2= new THREE.SpotLight(0xffffff,1,0,Math.PI*0.5,0,2)
light2.position.set( 1.7,9.9,-3.5 );
const DirectionalLightHelper2=new THREE.DirectionalLightHelper(light2,180.7,0xffffff)
scene.add( light2 );

let directionalLight=gui.addFolder('DirectionalLight')
directionalLight.add(light.position,'x',-100,100,0.1)
directionalLight.add(light.position,'y',-100,100,0.1)
directionalLight.add(light.position,'z',-100,100,0.1)
directionalLight.add(light,'intensity',0,500,0.1)

let point1=gui.addFolder('PointLight1')
point1.add(light1.position,'x',-100,100,0.1)
point1.add(light1.position,'y',-100,100,0.1)
point1.add(light1.position,'z',-100,100,0.1)
point1.add(light1,'intensity',0,500,0.1)

let directionalLight2=gui.addFolder('DirectionalLight2')
directionalLight2.add(light2.position,'x',-100,100,0.1)
directionalLight2.add(light2.position,'y',-100,100,0.1)
directionalLight2.add(light2.position,'z',-100,100,0.1)
directionalLight2.add(light2,'intensity',0,500,0.1)

//Canvas
const canvas=document.querySelector('.threeCanvas>canvas');

//controls
const controls=new OrbitControls(camera,canvas);
 controls.enableDamping=true;
controls.enablePan=false;
controls.enableZoom=false;

//renderer
const renderer=new THREE.WebGLRenderer({
    canvas:canvas,
    alpha:true,
    antialias:true,
    powerPreference:'high-performance'})
    renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(sizes.width,sizes.height)
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.5; // Adjust exposure if needed

//PostProcessing
const newRenderer=new RenderPass(scene,camera)
const bloomPass=new UnrealBloomPass(scene)
bloomPass.threshold=0.01
 bloomPass.strength=0.02
 bloomPass.radius=0.6

const outputPass=new OutputPass();
const composer=new EffectComposer(renderer);
composer.addPass(newRenderer)
composer.addPass(bloomPass)
composer.addPass(outputPass)

async function one(){
   await ring1()
   await initialProperties()
   ring3Animation()
   await ring2()
   await roundRing()
   await modelSwap() 
   }

one()

//window Resize
window.addEventListener('resize',()=>{
    sizes.width=window.innerWidth;
    sizes.height=window.innerHeight;
    camera.aspect=sizes.width/sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width,sizes.height);
    composer.setSize(sizes.width,sizes.height);
    mobileViweChecker()
 ScrollTrigger.refresh()
})

const loop=()=>{
    // controls.update()
  
    composer.render();
    gui.updateDisplay()
    window.requestAnimationFrame(loop)
}
loop()
