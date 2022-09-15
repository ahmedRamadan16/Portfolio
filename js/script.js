;(function () {
    let liMegaMenu=document.querySelectorAll("header  .main-nav > li ")[3];
    let megaMenu=document.getElementsByClassName("mega-menu")[0];
    let scrolldiv=document.querySelector(".scroll-to-top");
    let seconds=document.querySelector(".unit .seconds");
    let statisticsSection=document.querySelector(".statistics");
    let statsSpan=document.querySelectorAll(".statistics .number")
    let  eventsSection=document.querySelector(".events");

    console.log(statsSpan);
    liMegaMenu.addEventListener("click",function(){
    
        megaMenu.classList.toggle("show-mega-menu");
        
      
    });
    let myHeader=document.getElementsByTagName("header")[0];
        window.onscroll=function()
        {
            if(window.scrollY >600)
            {
                myHeader.classList.add("at-top");
                megaMenu.style.cssText="pointer-events:none;";

            }else{
                myHeader.classList.remove("at-top");
                megaMenu.style.cssText="pointer-events:all;";


            }
            if(window.scrollY >= 1000)
            {
               scrolldiv.style.cssText="visibility:visible;pointer-events: all";
            }else{
                scrolldiv.style.cssText="visibility:hidden";

            }
            if(window.scrollY >= eventsSection.offsetTop)
            {
                incresseSecond(seconds);
            }
            if(window.scrollY >= statisticsSection.offsetTop)
            {
                statsSpan.forEach(span=>{
                    incresseSecond(span);
                })
            }
        }
     
        let scrollBtn=document.querySelector(".scroll-to-top i");
        scrollBtn.addEventListener("click",function(){
                    window.scrollTo({top:0,left:0,behavior:"smooth"});
                }
            )
            /////////
            function incresseSecond (el)
            {
                let second=el.dataset.value;

                let intervel=setInterval(()=>{
                    if(parseInt (el.innerHTML) <= parseInt(second))
                    {
                        el.innerHTML++;
                    }
                    },50)
            }
         
})()
