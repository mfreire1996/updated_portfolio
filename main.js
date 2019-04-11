var typed = new Typed(".type", {
  strings: [
    "Hello! My name is Marcos Freire",
    "I'm a full stack Web Developer"
  ],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true
});

TweenMax.from(".intro", 1.6, {
  delay: 0.5,
  opacity: 0,
  y: 20, 
  ease: Expo.easeInOut   
});

TweenMax.from(".s-one", 1.6, {
  delay: 0.1,
  opacity: 0,
  y: 20, 
  ease: Expo.easeInOut   
});

TweenMax.from(".s-two", 1.6, {
  delay: 0.2,
  opacity: 0,
  y: 20, 
  ease: Expo.easeInOut   
});

TweenMax.from(".s-three", 1.6, {
  delay: 0.3,
  opacity: 0,
  y: 20, 
  ease: Expo.easeInOut   
});

TweenMax.from(".intro", 1.6, {
  delay: 0.4,
  opacity: 0,
  y: 20, 
  ease: Expo.easeInOut   
});







