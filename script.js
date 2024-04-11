const homeAnimation = ()=>{
      gsap.set(".animated-slide-heading", {
            scale: 3
      })
      const t1 = gsap.timeline({
            scrollTrigger: {
                  trigger: ".home-section",
                  scrub: 1,
                  start: "top top",
                  end: "bottom bottom",
            },
      })
      const t2 = gsap.timeline({
            scrollTrigger:{
                  trigger: ".home-section",
                  scrub: 1,
                  start: "60% 50%",
                  end: "60% 10%",
                  // markers: true
            }
      })
      t1.to(".home-section-video",{
            '--clip': "0%",
            ease: Power2
      }, "a")
      t1.to(".animated-slide-heading",{
            scale: 1
      }, "a")
      t2.to(".text-rows-left", {
            xPercent: -20,
            stagger: 0.05,
            ease:  Power4
      }, "b")
      t2.to(".text-rows:nth-child(2)", {
            xPercent: 10,
            stagger: 0.1,
            ease:  Power4
      }, "b")
}




homeAnimation();