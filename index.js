const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");


const tl = gsap.timeline();

tl.paused(true);
tl.reversed(true);

tl.to(".cover", {
    width : "60%",
    duration : 1,
    ease: Power2.easeOut
})
.to("nav", {
    height : "100%",
    duration : 0.8,
    ease: Power2.easeOut
}, "-=0.3")
.fromTo(".nav-open", {
    opacity : 0,
    x : 50,
    ease : Power2.easeOut
},{
    duration : 0.5,
    opacity : 1,
    x : 0,
    onComplete: function(){
        navOpen.style.pointerEvents = "auto";
        console.log("done");
    }
})

navButton.addEventListener("click", () => {

    if(tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropogation();
        return false;
    }

    toggleTween(tl);
})

function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse();
}