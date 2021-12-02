/////////////////////// ME FALLING ~~ animated /////////////////////

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
        // {x:10, y: 350},
        // {x:20, y: 400},
        // {x:10, y: 450},
        // {x:0, y: 450},

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
    .setPin('.animation',400)
    .addTo(controller);

// IN THE FUTURE, should maybe use .each function to
// loop thruogh each scene and create a new ScrollMagic scene for each one 


/////////////////////// Trees /////////////////////

const tree1Path = {
    curviness: 0.255,
    values: [
        {x:0, y: 0},
        {x:100, y: 0},
    ]
};

const tween1 = new TimelineLite();

tween1.add(
    TweenLite.to(".trees1", 1 , {
     bezier: tree1Path, 
     ease: Power1.easeInOut   
    })
);

const controller1 = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 5000,
    offset: 200,
    triggerHook: 0
} ) 
    .setTween(tween1)
    .addTo(controller1);



/////////////////////// Trees 2 /////////////////////
const tree2Path = {
    curviness: 0.255,
    values: [
        {x:0, y: 0},
        {x:-100, y: 0},
    ]
};

const tween2 = new TimelineLite();

tween2.add(
    TweenLite.to(".trees2", 1 , {
     bezier: tree2Path, 
     ease: Power1.easeInOut   
    })
);

const controller2 = new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 5000,
    offset: 200,
    triggerHook: 0
} ) 
    .setTween(tween2)
    .addTo(controller2);


/////////////////////// Trees 3 /////////////////////
const tree3Path = {
    curviness: 0.255,
    values: [
        {x:800, y: 50},
        {x:850, y: 100},
    ]
};

const tween3 = new TimelineLite();

tween3.add(
    TweenLite.to(".trees3", 1 , {
     bezier: tree3Path, 
     ease: Power1.easeInOut   
    })
);

const controller3 = new ScrollMagic.Controller();

const scene3 = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 5000,
    offset: 200,
    triggerHook: 0
} ) 
    .setTween(tween3)
    .addTo(controller3);


/////////////////////// Trees 4 /////////////////////
const tree4Path = {
    curviness: 0.255,
    values: [
        {x:-800, y: 50},
        {x:-700, y: 100},
    ]
};

const tween4 = new TimelineLite();

tween4.add(
    TweenLite.to(".trees4", 1 , {
     bezier: tree4Path, 
     ease: Power1.easeInOut   
    })
);

const controller4 = new ScrollMagic.Controller();

const scene4 = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 5000,
    offset: 200,
    triggerHook: 0
} ) 
    .setTween(tween4)
    .addTo(controller4);


////////////////// me again ////////////////////////
const fallPath2 = {
    curviness: 0.255,
    values: [
        {x:0, y: 0},
        {x:-10, y: 100},
        {x:-20, y: 150},
        {x:-10, y: 200},
        {x:0, y: 250},
        {x:-10, y: 200},
        {x:-20, y: 150},

    ]
};

const tweenfallPath2 = new TimelineLite();

tweenfallPath2.add(
    TweenLite.to(".me2", 1 , {
    //animate with bezier plugin
     bezier: fallPath2, 
     ease: Power1.easeInOut   
    })
);

const controllerfallPath2 = new ScrollMagic.Controller();

const scenefallPath2 = new ScrollMagic.Scene({
    triggerElement: '.animation1',
    duration: 5000,
    offset: 200,
    //when it reaches the end of the animation section, triggers 
    triggerHook: 0
} ) 
    .setTween(tweenfallPath2)
    // .addIndicators()
    //stuck here 
    .setPin('.animation1',400)
    .addTo(controllerfallPath2);

/////////////////////// fish /////////////////////
const fishPath = {
    autoRotate: true, 
    curviness: 0.5,
    values: [
        {x:0, y: 0},
        {x:500, y: 200},
        {x:1000, y: 150},

    ]
};

const tweenfishPath = new TimelineLite();

tweenfishPath.add(
    TweenLite.to(".fish", 3 , {
     bezier: fishPath, 
     ease: Power1.easeInOut   
    })
);

const controllerfishPath = new ScrollMagic.Controller();

const scenefishPath = new ScrollMagic.Scene({
    triggerElement: '.animation1',
    duration: -5000,
    offset: 300,
    triggerHook: 0
} ) 
    .setTween(tweenfishPath)
    .addTo(controllerfishPath);


/////////////////////// fish2 /////////////////////
const fish2Path = {
    autoRotate: true, 
    curviness: 0.55,
    values: [
        {x:0, y: 0},
        {x:500, y: 200},
        {x:3000, y: 250},
    ]
};

const tweenfish2Path = new TimelineLite();

tweenfish2Path.add(
    TweenLite.to(".fish2", 3 , {
     bezier: fish2Path, 
     ease: Power1.easeInOut   
    })
);

const controllerfish2Path = new ScrollMagic.Controller();

const scenefish2Path = new ScrollMagic.Scene({
    triggerElement: '.animation1',
    duration: -5000,
    offset: 200,
    triggerHook: 0
} ) 
    .setTween(tweenfish2Path)
    .addTo(controllerfish2Path);

////////////////// me again third section ////////////////////////
const sleepPath = {
    curviness: 0.255,
    values: [
        {x:0, y: 0},
        {x:-10, y: 100},
        {x:-20, y: 150},
        {x:-10, y: 200},


    ]
};

const tweensleepPath = new TimelineLite();

tweensleepPath.add(
    TweenLite.to(".me3", 1 , {
    //animate with bezier plugin
     bezier: sleepPath, 
     ease: Power1.easeInOut   
    })
);

const controllersleepPath = new ScrollMagic.Controller();

const scenesleepPath = new ScrollMagic.Scene({
    triggerElement: '.animation2',
    duration: 5000,
    offset: 200,
    //when it reaches the end of the animation section, triggers 
    triggerHook: 0
} ) 
    .setTween(tweensleepPath)
    // .addIndicators()
    //stuck here 
    .setPin('.animation2',400)
    .addTo(controllersleepPath);