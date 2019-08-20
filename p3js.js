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
    console.log("g");
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
