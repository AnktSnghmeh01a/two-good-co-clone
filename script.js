// // ===========================================
// // ===========================================
// //  ============Script===============
// // =============================================
// // =============================================



// ==================================================
// ==================================================

// ============Image goes upward when we scroll the page ====================
  //  ------------( USING LOCOMOTIVE JS)------------------------------------
// ===========================================


const scroll = new LocomotiveScroll({
  el: document.querySelector('.parent-div'),
  smooth: true
});


// locomotive logo scroll animation


//  ----------------Animation balll -----------------------------------------------------
const AnimationBall = ()=>{
  const imageDivChangeTheCourse
  = document.querySelector(".image-change-the-course");
 
  const buyItMovable = document.querySelector(".buy-it-moveable");
 
  imageDivChangeTheCourse.addEventListener("mouseenter",function(){
   // alert("hel");
   gsap.to(buyItMovable,{
     opacity:"1",
     scale:"1",
   });
   
  });
 
  imageDivChangeTheCourse.addEventListener("mouseleave",function(){
   gsap.to(buyItMovable,{
     opacity:"0",
     scale:"0",
   });
   
   
  });
 
  imageDivChangeTheCourse.addEventListener("mousemove",function(dets){
 
   gsap.to(buyItMovable,{
     left:dets.x-50,
     top:dets.y-60,  
   });
   
   
  });
 
 
}

AnimationBall();


//  -------------------------Text animation --------------------------------------------
const textAnimation = ()=>{


 gsap.from((".page1-text-portion h1"),{
  y:100,
  opacity:0,
  delay:0.5,
  duration:0.9,
  stragger:0.3
 } );


 gsap.from((".image-change-the-course img"),{
  y:100,
  opacity:0,
  delay:0.5,
  duration:0.9,
  // stragger:0.3
 } );


}

textAnimation();







// page 4 ball animation.

// Selecting the div's
const page4MovableBall = document.querySelector(".movable-ball-for-page4"); 

const divPage4 = document.querySelector(".page4");


function page4AnimationBall(){
  divPage4.addEventListener("mouseenter",()=>{

    gsap.to(page4MovableBall,{
      opacity:1,
      scale:1
    })
  
  })
  
  divPage4.addEventListener("mouseleave",()=>{
  
    gsap.to(page4MovableBall,{
      opacity:0,
      scale:0
    })
  
  })
  
  
  divPage4.addEventListener("mousemove",(dets)=>{
  
    gsap.to(page4MovableBall,{
      left:dets.x-90,
      top:dets.y-70
    })
  })
  
  
  
  
  const evenDivs = document.querySelectorAll(".even-page4-div");
  
  
  
  evenDivs.forEach((div)=>{
  
    div.addEventListener("mouseenter",()=>{
    
      gsap.to(page4MovableBall,{
       backgroundColor: "#7fffd4",
      });
     
     });
     
     
     div.addEventListener("mouseleave",()=>{
       
       gsap.to(page4MovableBall,{
        backgroundColor: "#FFBCD9",
       });
      
      });
  
  })
  
}

page4AnimationBall();




  // ===================================================================
  // ===================================================================
  // ============== Prelaoder source= ====================================
  // =======================================================================
  // =======================================================================

  
  const preloader = document.querySelector(".preloader");
  const body = document.querySelector("body");
  
  window.addEventListener("load",()=>{
    preloader.style.display = "none";  
  })
  



// =========================================================
// making responsive navbar
// =====================================================
// =====================================================

function responsiveNavbar (){
 

const menuButton = document.querySelector(".fa-bars");
const crossButton = document.querySelector(".fa-x");
const navBar = document.querySelector("header");
const navLinks = document.querySelectorAll(".nav-links a");

  menuButton.addEventListener("click",()=>{
    navBar.classList.toggle("active");

  });
  
  crossButton.addEventListener("click",()=>{

    navBar.classList.toggle("active");
  
  });
  
  
  navLinks.addEventListener("click",()=>{
  
    navBar.classList.toggle("active");
  
  });
  

  
}

responsiveNavbar();



