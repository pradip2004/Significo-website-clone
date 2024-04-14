const homeAnimation = () => {
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
            scrollTrigger: {
                  trigger: ".home-section",
                  scrub: 1,
                  start: "60% 50%",
                  end: "60% 10%",
                  // markers: true
            }
      })
      t1.to(".home-section-video", {
            '--clip': "0%",
            ease: Power2
      }, "a")
      t1.to(".animated-slide-heading", {
            scale: 1
      }, "a")
      t2.to(".text-rows-left", {
            xPercent: -20,
            stagger: 0.05,
            ease: Power4
      }, "b")
      t2.to(".text-rows:nth-child(2)", {
            xPercent: 10,
            stagger: 0.1,
            ease: Power4
      }, "b")
}
const partnerSectionAnimation = () => {
      gsap.to(".slide", {
            scrollTrigger: {
                  trigger: ".partner-section-container",
                  start: "top top",
                  end: "bottom bottom",
                  markers: false,
                  scrub: 2
            },
            xPercent: -300,
            ease: Power4
      })
}
const teamAnimation = () => {
      document.querySelectorAll(".team-member")
            .forEach(function (member) {
                  member.addEventListener('mousemove', function (e) {
                        gsap.to(this.querySelector(".hover-picture"), {
                              opacity: 1,
                              x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, e.clientX),
                              ease: Power4,
                              duration: .5
                        })

                  })
                  member.addEventListener('mouseleave', function (e) {
                        gsap.to(this.querySelector(".hover-picture"), {
                              opacity: 0,
                              ease: Power4,
                              duration: .5
                        })

                  })
            })
}



homeAnimation();
partnerSectionAnimation();
teamAnimation()