 const title = document.getElementById("page-title");
 title.innerText = "Django";

 const firstParagraph = document.getElementById("first-paragraph");
 firstParagraph.innerText = "testeteste";

 const subTitle = document.getElementById("subtitle");
 subTitle.innerText = "Principais informações";

 const firstP = document.getElementsByClassName("paragraph-style");
 const firstParagraph1 = firstP[0];
 firstParagraph1.style.fontStyle = 'italic';

const secondParagraph = document.getElementsByClassName("paragraph-style");
const secondParagraph1 = secondParagraph[1];
secondParagraph1.innerText = "Direção, Roteirista";

const subtitle = document.getElementsByTagName('h2');
subtitle[0].style.color = 'red';

