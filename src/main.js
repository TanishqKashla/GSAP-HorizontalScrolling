gsap.to(".scroll-section", {
    x: "-80%",
    scrollTrigger: {
        trigger: ".scroll-section",
        start: "top top",
        end: "top -200%",
        scrub: 1.5,
        pin: true,
    }
})

const cards = [
    { id: "#card-1", scrollX: "-1000", rotate: "45" },
    { id: "#card-2", scrollX: "-1000", rotate: "-30" },
    { id: "#card-3", scrollX: "-1000", rotate: "45" },
    { id: "#card-4", scrollX: "-1000", rotate: "-30" },
    { id: "#card-5", scrollX: "-1000", rotate: "45" }
]

cards.forEach(card => {
    gsap.to(card.id, {
        x: `${card.scrollX/2}px`,
        rotation: `${card.rotate}px`,
        duration: 0.5,
        scrollTrigger: {
            trigger: "card.id",
            scrub: 1,
            start: "top top"
        }
    })
})