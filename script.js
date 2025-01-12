function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();

gsap.to("#page>video",{
    scrollTrigger:{
        trigger:`#page>video`,
        start:`2% top`,
        end:`bottom top`,
        scroller:`#main`
    },
    onStart:()=>{
        document.querySelector("#page>video").play()
    }
})
gsap.to("#page",{
    scrollTrigger:{
        trigger:`#page`,
        start:`top top`,
        end:`bottom top`,
        scroller:`#main`,
        pin:true
    }
})
gsap.to("#page-bottom",{
    scrollTrigger:{
        trigger:`#page`,
        start:`30% top`,
        end:`bottom top`,
        scroller:`#main`,
    },
    opacity:0
})

let tl= gsap.timeline({
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    scrub:1,
    scroller:"#main",
    pin:true   
}
});
tl.to("#page1 h1",{
  top:"-50%"
})

let t2= gsap.timeline({
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    scrub:1,
    scroller:"#main",
    pin:true   
}
});
t2.to("#page2 h1",{
  top:"-50%"
})

let tl2= gsap.timeline({
  scrollTrigger:{
    trigger:`#page4`,
    start:`top top`,
    scrub:1,
    scroller:"#main",
    pin:true   
}
});
tl2.to("#page4>#center-page4 ",{
  top:"-50%"
})
function canvas(){
  const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
https://www.apple.com/v/apple-vision-pro/f/images/overview/shared/quicklook_placeholder__eu3anwy8icae_large.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/foundation/foundation_startframe__e3e7yqbgyvue_large.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/experiences/entertainment/entertainment_a_startframe__eqosxjbd3xua_large.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/experiences/productivity/productivity_a_startframe__b78h8iwbcw76_large.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/hero/apple_vision_pro_logo__ux94yix23r6y_large_2x.png
https://www.apple.com/v/apple-vision-pro/f/images/overview/experiences/photos-videos/photos_videos_startframe__dnwwa2e1qys2_large.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/experiences/connection/connection_a_startframe__g9xlys4gedyu_large.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/experiences/apps/apps_a_startframe__gnl20xqy2yeu_large.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/visionos/visionos_a_startframe__fp1z3eff98qe_large.jpg
https://www.apple.com/ac/globalfooter/8/en_US/assets/ac-footer/breadcrumbs/apple/icon_large.svg
https://www.apple.com/ac/globalfooter/8/en_US/assets/ac-footer/breadcrumbs/separator/icon_large.svg
https://securemetrics.apple.com/b/ss/applestoreww/1/JS-2.23.0/s56724565724436?AQB=1&ndh=1&pf=1&t=12%2F0%2F2025%2023%3A16%3A17%200%20-330&fid=6654A0853A06BCF6-39D8BD286FF5E7E7&ce=UTF-8&cdp=2&cl=1800&pageName=apple%20vision%20pro%20-%20overview%20%28us%29&g=https%3A%2F%2Fwww.apple.com%2Fapple-vision-pro%2F&cc=USD&ch=www.us.applevisionpro&server=ac-2.23.0&h1=www.us.applevisionpro&v3=aos%3A%20us&l3=D%3Das_tex&c4=D%3Dg&v4=D%3DpageName&c14=apple%20vision%20pro%20-%20overview%20%28us%29&v14=en-us&c17=60%3A2&c20=aos%3A%20us&c28=18240&v54=D%3Dg&c57=www.us.applevisionpro&v97=s.t-p&s=1280x720&c=24&j=1.6&v=N&k=Y&bw=1280&bh=285&AQE=1
https://www.apple.com/ac/ac-video-posterframe/4.0/images/ac_video_poster_960x540_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/design/portrait_front_base__gmqifatci56q_large_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/design/glass_top__k3b8lzqd1l2m_large_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/design/glass_side__gm4agomrwl2e_large_2x.jpg
https://securemetrics.apple.com/b/ss/applestoreww/1/JS-2.23.0/s51300020359126?AQB=1&ndh=1&pf=1&t=12%2F0%2F2025%2023%3A16%3A19%200%20-330&fid=6654A0853A06BCF6-39D8BD286FF5E7E7&ce=UTF-8&cdp=2&cl=1800&pageName=apple%20vision%20pro%20-%20overview%20%28us%29&g=https%3A%2F%2Fwww.apple.com%2Fapple-vision-pro%2F&cc=USD&events=event243%3D2.39%2Cevent244&h1=www.us.applevisionpro&l3=D%3Das_tex&v4=D%3DpageName&v14=en-us&c34=design%20frame%20tile&c35=2.39&c36=13&v54=D%3Dg&v70=base&v97=s.tl-o&v153=fallback%20height&pe=lnk_o&pev2=section%20engagement&s=1280x720&c=24&j=1.6&v=N&k=Y&bw=1280&bh=285&lrt=312&AQE=1
https://www.apple.com/v/apple-vision-pro/f/images/overview/design/portrait_right_base__cd0c4xdglcs2_large_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/experiences/apps/apps_a_startframe__gnl20xqy2yeu_large.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/experiences/productivity/productivity_a_startframe__b78h8iwbcw76_large.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/hero/portrait_base_us__fucaqiry5e2q_large_2x.jpg
https://securemetrics.apple.com/b/ss/applestoreww/1/JS-2.23.0/s53105488528564?AQB=1&ndh=1&pf=1&t=12%2F0%2F2025%2023%3A16%3A19%200%20-330&fid=6654A0853A06BCF6-39D8BD286FF5E7E7&ce=UTF-8&cdp=2&cl=1800&pageName=apple%20vision%20pro%20-%20overview%20%28us%29&g=https%3A%2F%2Fwww.apple.com%2Fapple-vision-pro%2F&cc=USD&events=event243%3D2.39%2Cevent244&h1=www.us.applevisionpro&l3=D%3Das_tex&v4=D%3DpageName&v14=en-us&c34=design%20head%20band%20tile&c35=2.39&c36=14&v54=D%3Dg&v97=s.tl-o&pe=lnk_o&pev2=section%20engagement&s=1280x720&c=24&j=1.6&v=N&k=Y&bw=1280&bh=285&AQE=1
https://www.apple.com/v/apple-vision-pro/f/images/overview/foundation/foundation_startframe__e3e7yqbgyvue_large.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/intro/hardware_base__ecl2v43j73o2_large_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/experiences/entertainment/entertainment_a_startframe__eqosxjbd3xua_large.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/hero/apple_vision_pro_logo__ux94yix23r6y_large_2x.png
https://www.apple.com/v/apple-vision-pro/f/images/overview/design/glass_startframe__fvet9b5mg86e_large_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/technology/displays/hero_base__bpxhq09r962u_large_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/technology/spatial_audio_base__d8zvuse3yu4i_large_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/technology/features/sensors_all__dp0a8e4y4u4i_large_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/routers/ar_logo__bmtaba6ckk76_large_2x.png
https://www.apple.com/v/apple-vision-pro/f/images/overview/routers/ar_tile__que64jqs2t2e_large_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/routers/developers__bxrd1uafspsi_large_2x.png
https://securemetrics.apple.com/b/ss/applestoreww/1/JS-2.23.0/s52288861778588?AQB=1&ndh=1&pf=1&t=12%2F0%2F2025%2023%3A16%3A21%200%20-330&fid=6654A0853A06BCF6-39D8BD286FF5E7E7&ce=UTF-8&cdp=2&cl=1800&pageName=apple%20vision%20pro%20-%20overview%20%28us%29&g=https%3A%2F%2Fwww.apple.com%2Fapple-vision-pro%2F&cc=USD&events=event406&h1=www.us.applevisionpro&l3=D%3Das_tex&v4=D%3DpageName&v14=en-us&v54=D%3Dg&v97=s.tl-o&pe=lnk_o&pev2=end%20of%20page&s=1280x720&c=24&j=1.6&v=N&k=Y&bw=1280&bh=285&lrt=113&AQE=1
https://www.apple.com/v/apple-vision-pro/f/images/overview/routers/accessories__et6yc9y3xvu6_large_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/hero/apple_vision_pro_logo__ux94yix23r6y_medium_2x.png
https://www.apple.com/v/apple-vision-pro/f/images/overview/hero/portrait_base_us__fucaqiry5e2q_medium_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/foundation/foundation_startframe__e3e7yqbgyvue_medium.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/intro/hardware_base__ecl2v43j73o2_medium_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/experiences/entertainment/entertainment_a_startframe__eqosxjbd3xua_medium.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/experiences/productivity/productivity_a_startframe__b78h8iwbcw76_medium.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/experiences/apps/apps_a_startframe__gnl20xqy2yeu_medium.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/design/portrait_right_base__cd0c4xdglcs2_medium_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/design/portrait_front_base__gmqifatci56q_medium_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/design/glass_top__k3b8lzqd1l2m_medium_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/design/glass_side__gm4agomrwl2e_medium_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/design/glass_startframe__fvet9b5mg86e_medium_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/technology/displays/hero_base__bpxhq09r962u_medium_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/technology/spatial_audio_base__d8zvuse3yu4i_medium_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/technology/features/sensors_all__dp0a8e4y4u4i_medium_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/routers/ar_logo__bmtaba6ckk76_medium_2x.png
https://www.apple.com/v/apple-vision-pro/f/images/overview/routers/ar_tile__que64jqs2t2e_medium_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/routers/accessories__et6yc9y3xvu6_medium_2x.jpg
https://www.apple.com/v/apple-vision-pro/f/images/overview/routers/developers__bxrd1uafspsi_medium_2x.png

`;
return data.split("\n")[index];
}

const frameCount = 55;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `canvas`,
  start: `top top`,
  end: `600% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "canvas",
pin: true,
scroller: `#main`,
start: `top top`,
end: `600% top`,
});
}
canvas()
