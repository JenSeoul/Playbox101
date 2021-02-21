const albumDivs = document.querySelectorAll('.albumbox');
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
tl.to(".text",{y:"0", duration:1, stagger: 0.25});
tl.to(".slider", {y:"-100%", duration:1.5, delay:0.5});
tl.to(".intro", {y:"-100%", duration:1, delay:0.5}, "-=1");
tl.fromTo(".columntext", {opacity:0}, {opacity:1, duration:2});

albumDivs.forEach(albumDiv=>{
    albumDiv.addEventListener('mouseenter', showPlays);
    albumDiv.addEventListener('mouseleave', hidePlays);
function showPlays(e){
    const div = e.target;
    const albumPlay = Array.from(div.children)[1];
    albumPlay.style.display = 'inline-block';
}
function hidePlays(e){
    const div = e.target;
    const albumPlay = Array.from(div.children)[1];
    albumPlay.style.display = 'none';
}
})