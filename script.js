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
const teamDetailsAnimation = (className, triggerClass) => {
      let clutter = ""
      document.querySelector(className)
            .textContent.split("").forEach(function (e) {
                  if (e === " ") {
                        clutter += `<span>&nbsp</span>`
                  }
                  clutter += `<span>${e}</span>`
            })

      document.querySelector(className)
            .innerHTML = clutter
      gsap.set(`${className} span`, {opacity: .2})
      gsap.to(`${className} span`, {
            scrollTrigger: {
                  trigger: triggerClass,
                  markers: false,
                  scrub: 1.5,
                  start: "top 60%",
                  end: "top 20%"
            },
            opacity: 1,
            stagger: 0.03,
            ease: Power4
      })

}

gsap.to(".rotate-svg", {
      rotate: 360,
      ease: "none",
      duration: 10,
      repeat: -1,
})

homeAnimation();
partnerSectionAnimation();
teamAnimation()
teamDetailsAnimation(".team-details-text-left", ".team-details-left")
teamDetailsAnimation(".team-details-text-right", ".team-details-right")