popdigital = () => {
  document.querySelector(".category-pop").style.display = "block";
};

popback = () => {
  document.querySelector(".category-pop").style.display = "none";
};

let nthdiv = 1;
let nthdivm = 1;
let tt = setInterval(() => {
  document.querySelector(".i8").style.backgroundColor = "#f1f7fa";
  document.querySelector(".i8").firstChild.style.color = "#474747";
  for (i = 1; i < 9; i++) {
    document.querySelector(`.menu-index${i}`).style.display = "none";
    console.log("g");
  }

  if (
    (document.querySelector(`.i${nthdivm}`).style.backgroundColor = "#ef5661")
  ) {
    document.querySelector(`.menu-index${nthdiv}`).style.display = "flex";

    document.querySelector(`.i${nthdivm}`).style.backgroundColor = "#f1f7fa";
    document.querySelector(`.i${nthdivm}`).firstChild.style.color = "#474747";
  }
  document.querySelector(`.i${nthdiv}`).style.backgroundColor = "#ef5661";
  document.querySelector(`.i${nthdiv}`).firstChild.style.color = "white";

  if (nthdiv != nthdivm) {
    nthdivm++;
  }
  nthdiv++;

  if (nthdiv == 9) {
    nthdiv = 1;
    nthdivm = 1;
  }
}, 2000);

distrupt = y => {
  clearInterval(tt);
  document.querySelector(`.i${y}`).style.backgroundColor = "#ef5661";
  document.querySelector(`.i${y}`).firstChild.style.color = "white";

  for (i = 1; i < 9; i++) {
    document.querySelector(`.menu-index${i}`).style.display = "none";
  }
  document.querySelector(`.menu-index${y}`).style.display = "flex";
  for (i = 1; i < y; i++) {
    document.querySelector(`.i${i}`).style.backgroundColor = "#f1f7fa";
    document.querySelector(`.i${i}`).firstChild.style.color = "#474747";
  }
  for (i = y + 1; i < 9; i++) {
    document.querySelector(`.i${i}`).style.backgroundColor = "#f1f7fa";
    document.querySelector(`.i${i}`).firstChild.style.color = "#474747";
  }
  //
  //
  //timer rerun
};

scrolleft = () => {
  let elmnt = document.querySelector(".scroll-prdct");

  elmnt.scrollTo(400, 0);
};
scrolright = () => {
  let elmnt = document.querySelector(".scroll-prdct");

  elmnt.scrollTo(2500, 0);
};

var inter = new IntersectionObserver(entries => {
  if (entries[0].intersectionRatio >= 0) {
    document.querySelector(".scroll-left").style.backgroundColor = "#ccc";
    document.querySelector(".scroll-right").style.backgroundColor = "#8a8989";
  }
});
var inter2 = new IntersectionObserver(entries => {
  if (entries[0].intersectionRatio >= 0) {
    document.querySelector(".scroll-right").style.backgroundColor = "#ccc";
    document.querySelector(".scroll-left").style.backgroundColor = "#8a8989";
  }
});

inter.observe(document.querySelector(".pr1"));
inter2.observe(document.querySelector(".pr2"));
