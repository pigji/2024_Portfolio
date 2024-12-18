//1. 상단 서브메뉴
const submenuList = document.querySelectorAll(".navMenu > ul > li");

submenuList.forEach(li => {
    li.addEventListener("mouseover", () => {
        li.querySelectorAll("ul").forEach((el) => {
            el.style.display = "block";
        })
    });
    li.addEventListener("mouseout", () => {
        li.querySelectorAll("ul").forEach((el) => {
            el.style.display = "none";
        })
    });
});

/*------------------------------------------------------------------------*/