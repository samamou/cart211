//bezier object
const fallPath = {
    //amount of curviness 
    curviness: 0.255,
    // autoRotate: true, 
    //array of the points (objects) we want to animate to  (x left,y) 
    //create a tween and animate along this path

    //negative y is top, positive is down
    values: [
        {x:0, y: 0},
        {x:-10, y: 100},
        {x:-20, y: 150},
        {x:-10, y: 200},
        {x:0, y: 250},
        {x:10, y: 350},
        {x:20, y: 400},
        {x:10, y: 450},
        {x:0, y: 450},

    ]
};


//create a tween and animate along this path
const tween = new TimelineLite();

tween.add(
    TweenLite.to(".me", 1 , {
    //animate with bezier plugin
     bezier: fallPath, 
     ease: Power1.easeInOut   
    })
);


//here is a trigger ScrollMagic scene for multiple elements..


// how to make this ^ affected by scrolling (ScrollMagic gsap plugin)
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 5000,
    offset: 200,
    //when it reaches the end of the animation section, triggers 
    triggerHook: 0
} ) 
    .setTween(tween)
    // .addIndicators()
    //stuck here 
    .setPin('.animation')
    .addTo(controller);

// IN THE FUTURE, should maybe use .each function to
// loop thruogh each scene and create a new ScrollMagic scene for each one 



/////////////////////// TWO /////////////////////
