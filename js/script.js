
// get current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

// toggle navigation
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click",function(){
      headerEl.classList.toggle("nav-open");
})


// sticky navigation
const sectionHeroEl = document.querySelector(".hero");
const obsEl = new IntersectionObserver(function(entries){
    const ent = entries[0];
    console.log(ent);
    if(ent.isIntersecting === false){
        document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
        document.body.classList.remove("sticky");

            }

},{
    root: null,
    threshold: 0,
    rootMargin: "-80px",

});
obsEl.observe(sectionHeroEl);


// close navigation
const allLinks = document.querySelectorAll("a");
allLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        const href = link.getAttribute("href");
        
        if(href ==="#")
        window.scrollTo({ top:0, behavior: "smooth", });
    
        if(href !== "#" && href.startsWith("#")){
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: "smooth"});

        } 
        if(link.classList.contains('header--menu__link')) 
        headerEl.classList.toggle("nav-open");
    });
});