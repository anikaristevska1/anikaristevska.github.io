window.addEventListener("load", function(){ change_header(); });
window.addEventListener("resize", function(){ change_header(); });
window.addEventListener("scroll", function(){ change_header(); });

let nav_link = document.getElementsByClassName("link");
let aside = document.getElementById("aside");
let drop_link = document.getElementsByClassName("droplink");
let root = document.querySelector(":root");
let computed_style = getComputedStyle(root);

function change_header()
{

    if(document.body.scrollTop > 1 || document.documentElement.scrollTop > 1)
    {
        document.getElementById("header").style.backgroundColor = "#fff";
        document.getElementById("header").style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, #a0d1de 0px 3px 7px -3px";
        document.getElementById("hamburger").style.color = "#000";

        for(let i=0; i<nav_link.length; i++)
        {
            if(nav_link[i].classList.contains("active"))
            {
                nav_link[i].style.color = "#a0d1de";
            }
            else
            {
                nav_link[i].style.color = "black";
            }
        }

        for(let i=0; i<drop_link.length; i++)
        {
            if(drop_link[i].classList.contains("active"))
            {
                drop_link[i].style.color = "#a0d1de";
            }
            else
            {
                drop_link[i].style.color = "black";
            }
        }
    }
    else
    {
        document.getElementById("header").style.backgroundColor = "transparent";
        document.getElementById("header").style.boxShadow = "none";
        document.getElementById("hamburger").style.color = "#fff";

        for(i=0; i<nav_link.length; i++)
        {
            if(nav_link[i].classList.contains("active"))
            {
                nav_link[i].style.color = "#a0d1de";
            }
            else
            {
                nav_link[i].style.color = "white";
            }
        }

        for(let i=0; i<drop_link.length; i++)
        {
            if(drop_link[i].classList.contains("active"))
            {
                drop_link[i].style.color = "#a0d1de";
            }
            else
            {
                drop_link[i].style.color = "black";
            }
        }
    }
}

function open_aside()
{
    aside.style.transform = "translateX(0)";
}

function close_aside()
{
    aside.style.transform = "translateX(-100%)";
}
