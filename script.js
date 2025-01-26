let crsr = document.querySelector("#cursor");
let crsrblur = document.querySelector("#cursorblur");
document.addEventListener("mousemove" , function(dets){
    crsr.style.left = dets.x+10+"px";
    crsr.style.top = dets.y+"px";
    crsrblur.style.left = dets.x-200+"px";
    crsrblur.style.top = dets.y-200+"px";
   delay:2;
   duration:10;

})

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale=1;
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale=1;
        crsr.style.border = "0px solid #b4ee15";
        crsr.style.backgroundColor="#b4ee15";
    })

})




gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -10%",
        scrub:1
    }
})


gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})

gsap.from("#about-us img , #about-us-in",{
  y:90,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    start:"top 60%",
    end:"top 55%",
    scrub:3
  }

})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"colon1",
        scroller:"body",
        start:"top 50%",
         end:"top 45%",
         scrub:4
    }
})

gsap.from("#page4 h1",{
    y:30,
    
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
         end:"top 80%",
         scrub:3
    }
})