// ------------- toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click" ,() => {
    console.log("Button cLICKED");
    document.querySelector(".style-switch").classList.toggle("open");
})
//  hide style
window.addEventListener("scroll",() =>{
    if(document.querySelector(".style-switch").classList.contains("open"))
    {
        document.querySelector(".style-switch").classList.remove("open");
    }
})
// -----------------theme color
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActivestyle(color)
{
    alternateStyle.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
// ========================== dark & ligth
const dayNigth = document.querySelector(".day-nigth");
dayNigth.addEventListener("click" ,() => {
    dayNigth.querySelector("i").classList.toggle("fa-sun");
    dayNigth.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",() => {
    if(document.body.classList.contains("dark"))
    {
        dayNigth.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNigth.querySelector("i").classList.add("fa-moon");
    }
})
