function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
locoscroll();
var tl=gsap.timeline()
tl.from('.hero .slide',{
    height:0,
    opacity:0,
    duration:0.5,
    scrub:true
})
tl.from('.heroname h1',{
    y:70,
    x:15,
    opacity:0,
    duration:0.7,
    stagger:0.2,

})
tl.from('.page1bottom, .bottomh3',{
    opacity:0,
    duration:.6,
    stagger:.1,
})
tl.from('.page1bottom .rightbottom',{
    x:13,
    repeat:-2,
    duration:0.6,
    yoyo:true
})
gsap.from('.page1 nav',{
    y:-80,
    opacity:0,
    duration:1.1,
    stagger:1,
})
gsap.from('.page1 .nav2 h4',{
    opacity:0,
    duration:1.3,
    stagger:.2,
})

tl.to('.page2 , .page1, .page3',{
    backgroundColor:'black',
    color:'white',
    scrollTrigger:{
        trigger:'.page2',
        scroller:'.main',
        // markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub:1
    }
})
tl.from('.page2 , .page3',{
    backgroundColor:'black',
    color:'white',
    scrollTrigger:{
        trigger:'.page3',
        scroller:'.main',
        // markers:true,
        start:"top 60%",
        end:"top 10%",
        scrub:1
    }
})
gsap.from(".page4 h1",{
    y:30,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.page4',
        scroller:'.main',
        // markers:true,
        start:"top 60%",
        end:"top 10%"
    }
})