const header = document.getElementById("categoryMenu");
const hideMenu = document.querySelector(".hideMenu");

header.addEventListener("click", () => {
  console.log("test");
  if (hideMenu.classList.contains("on")) {
    hideMenu.classList.remove("on");
  } else {
    hideMenu.classList.add("on");
  }
});

// 메뉴의 소메뉴
// const hica = document.querySelectorAll(".hica");
// const hidehideAll = document.querySelectorAll(".hidehide");

// for (let i = 0; i < hica.length; i++) {
//   hidehideAll[i].addEventListener("click", () => {
//     hica[i].classList.add("on2");
//     if (hica[i].classList.contains("on2")) {
//       hica[i].classList.remove("on2");
//     } else {
//     }
//   });
// }

// for (let i = 0; i < hica.length; i++) {
//   hidehideAll[i].addEventListener("mouseleave", () => {
//     if (hica[i].classList.contains("on2")) {
//       hica[i].classList.remove("on2");
//     } else {
//       hica[i].classList.add("on2");
//     }
//   });
// }
