$(document).ready(function(){
  let TL = new TimelineMax({paused:true});
  let infoTL = new TimelineMax({paused:true});
  let galleryTL = new TimelineMax({paused:true});
  let controller = new ScrollMagic.Controller();

  const header = $('.header');
  const nav = $('.header').find('.header__navigation');
  const home = $('.header').find('.header__home');
  const text = $(home).find('.text-wraper .text');
  const image = $(home).find('.img-container');
  let animspeed = 0.75;
  let animTimingIn = Expo.easeIn;
  let animTimingOut = Expo.easeOut;

  /*info consts*/
  const info = $('.info');
  const infoImg = $(info).find('.img-container');
  const infoText = $(info).find('.text');
  /*gallery constants*/
  const gallery = $('.gallery');
  const revealer = $(gallery).find('.revealer'),
        imgRevealer = $(gallery).find('.image-revealer');
  TL.fromTo(header,animspeed,{y:1500,opacity:0,ease:animTimingIn},
    {y:0,opacity:1,ease:animTimingOut}
  ).fromTo(nav,animspeed,{y:"-100%",opacity:0,ease:animTimingIn},
  {y:"0%",opacity:1,ease:animTimingOut},"-=0.25")
  .staggerFromTo(text,animspeed,{y:"180%",opacity:0,ease:animTimingIn},
  {y:"0%",opacity:1,ease:animTimingOut},0.15).fromTo(image,animspeed,{y:-50,opacity:0,ease:animTimingIn},
  {y:0,opacity:1,ease:animTimingOut},"-=0.5");
  TL.play();

/*info section animation*/
  infoTL.fromTo(info,animspeed,{x:-200,opacity:0,ease:animTimingIn},
    {x:0,opacity:1,ease:animTimingOut}).staggerFromTo(infoText,animspeed,{scale:4,opacity:0,ease:animTimingIn},
    {scale:1,opacity:1,ease:animTimingOut},0.15);
  new ScrollMagic.Scene({
    triggerElement:".info",
    triggerHook:0.5
  }).setTween(infoTL).reverse(false).addTo(controller);

  /*gallery section animation*/
  galleryTL.fromTo(gallery,animspeed,{x:"-100%",ease:animTimingIn},
  {x:"0%",ease:animTimingOut}).fromTo(revealer,animspeed,{x:"0%",ease:animTimingIn},{
    x:"100%",ease:animTimingOut
  }).fromTo(imgRevealer,animspeed,{x:"-100%",ease:animTimingIn},
  {x:"100%",ease:animTimingOut});
  new ScrollMagic.Scene({
    triggerElement:'.gallery',
    triggerHook:0.8
  }).setTween(galleryTL).reverse(true).addTo(controller);
});
