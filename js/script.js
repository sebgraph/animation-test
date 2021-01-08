//name elements
const d = document;
const personajeMexicano = d.getElementById("personaje-mexicano"),
      cejas = d.getElementById("cejas"),
      ojos = d.getElementById("ojos"),
      boca = d.getElementById("boca"),
      taza = d.getElementById("taza"),
      nachoVerde = d.getElementById("nacho-verde"),
      nachoRojo = d.getElementById("nacho-rojo"),
      personaje = d.getElementById("personaje"),
      brazo = d.getElementById("brazo"),
      circulo = d.getElementById("circulo"),
      iconosMenu = d.getElementById("iconos-menu"),
      iconoMenu = d.getElementById("icono-menu"),
      iconoBebidas = d.getElementById("icono-bebidas"),
      iconoEventos = d.getElementById("icono-eventos");
      

// nav
TweenMax.from("#texto-luchador", 1, {
    delay: .5,
    opacity: 0,
    y: "-100%",
    ease: Expo.easeInOut

});
TweenMax.from(".chile1", 1, {
    delay: .6,
    opacity: 0,
    y: "-100%",
    ease: Expo.easeInOut

});
TweenMax.from(".chile2", 1, {
    delay: .7,
    opacity: 0,
    y: "-100%",
    ease: Expo.easeInOut

});
TweenMax.from(".chile3", 1, {
    delay: .8,
    opacity: 0,
    y: "-100%",
    ease: Expo.easeInOut

});
TweenMax.from(".mexican-text", 1, {
    delay: .9,
    opacity: 0,
    y: "-100%",
    ease: Expo.easeInOut

});
// circulo
let tlcirculo = new TimelineMax();

tlcirculo.staggerFromTo(circulo, 1.5, {
    delay:1.5,
    opacity:0,
    scale:.5,
    ease: Expo.easeInOut
  


}, {
    delay:1.8,
    opacity:1,
    scale:1,
    ease: "bounce"


}, .5);

// personaje
let tlpersonajeMexicano = new TimelineMax();

tlpersonajeMexicano.staggerFromTo(personajeMexicano, 2, {
    delay: 2.5,
    transformOrigin:"0% 100%",
    y:"100%",
    opacity: 0,
    ease: "linear"

}, {
    delay: 2.8,
    y:"5%",
    yoyo: true,
    opacity: 1,
    ease: Expo.easeInOut


}, 0.5);

// ojos

let tlojos = new TimelineMax();

tlojos.staggerFromTo(ojos, 1.5, {
    transformOrigin:"0% 100%",
    opacity:1,


}, {
    opacity:0,
    repeat:-1,
    yoyo:true,


}, 0.5);

// brazo
let tlbrazo = new TimelineMax();

tlbrazo.staggerTo(brazo, 1.5, {   
    rotation: "10deg",


}, {
    rotation: "-40deg",
    repeat:-1,
    yoyo:true,


}, 0.5);




// taza
let tltaza = new TimelineMax();

tltaza.staggerFromTo(taza, 1.8, {
    
    rotation: "-10deg",
 


}, {
    rotation: "5deg",
    repeat:-1,
    yoyo:true
  


}, 0.5);



// nachos
let tlnachoVerde = new TimelineMax();

tlnachoVerde.staggerFromTo(nachoVerde, 1.8, {
    
    rotation: "8deg",
 


}, {
    rotation: "-5deg",
    repeat:-1,
    yoyo:true
  


}, 0.5);

let tlnachoRojo = new TimelineMax();

tlnachoRojo.staggerFromTo(nachoRojo, 1.8, {
    
    rotation: "-8deg",
 


}, {
    rotation: "5deg",
    repeat:-1,
    yoyo:true
  


}, 0.5);


// iconos menu
let tliconoMenu = new TimelineMax();
tliconoMenu.staggerFromTo(iconoMenu, 1.8, {
    x: "-100%",
    opacity:0

}, {
    x: "0%",
    opacity:1,
    ease: Expo.easeInOut

  


}, 0.5);

let tliconoBebidas = new TimelineMax();
tliconoBebidas.staggerFromTo(iconoBebidas, 2, {
    x: "-100%",
    opacity:0
}, {
    x: "0%",
    opacity:1,
    ease: Expo.easeInOut


}, 0.5);

let tliconoEventos = new TimelineMax();
tliconoEventos.staggerFromTo(iconoEventos, 2.2, {
    x: "-100%",
    opacity:0
}, {
    x: "0%",
    opacity:1,
    ease: Expo.easeInOut


}, 0.5);






 



