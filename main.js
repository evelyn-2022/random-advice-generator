// Ajax
const adviceUrl = "https://api.adviceslip.com/advice";
const cardTitle = document.querySelector(".card-title");
const cardQuote = document.querySelector(".card-quote");
const card = document.querySelector(".card");

const getJSON = (url, errorMsg = "Something went wrong") =>
  fetch(url).then((response) => response.json());

const renderSpinner = function () {
  cardTitle.innerHTML = `Generating new quote...`;
  cardQuote.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
};

const renderAdvice = function (data) {
  cardTitle.innerHTML = `Advice # <span class="num">${data.slip.id}</span>`;
  cardQuote.innerHTML = `<span class="quote-text">"${data.slip.advice}"</span>`;
};

const getAdvice = async function (url) {
  renderSpinner();

  const data = await getJSON(url);
  renderAdvice(data);
};

card.addEventListener("click", function (e) {
  e.preventDefault();
  const btn = e.target.closest(".dice");

  if (!btn) return;

  getAdvice(adviceUrl);
});

// Change Divider
const divider = document.querySelector(".divider-img");

const changeDivider = function () {
  const width = this.window.outerWidth;

  if (width <= 576) {
    divider.setAttribute("src", "./images/pattern-divider-mobile.svg");
  } else {
    divider.setAttribute("src", "./images/pattern-divider-desktop.svg");
  }
};

window.addEventListener("load", changeDivider);
window.addEventListener("resize", changeDivider);
