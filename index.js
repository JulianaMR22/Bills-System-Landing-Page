let cardFill = document.getElementById("cardFill");
let cardRecord = document.getElementById("cardRecord");
const numberFill = document.querySelector("#cardFill p");
const textFill = document.querySelector("#cardFill div.font-bold");
const numberRecord = document.querySelector("#cardRecord p");
const textRecord = document.querySelector("#cardRecord div.font-bold");
const card01 = document.getElementById("card01");
const card02 = document.getElementById("card02");

cardFill.addEventListener("click", () => {
  cardFill.classList.add("border-t-sky-400");
  cardRecord.classList.remove("border-t-sky-400");
  numberFill.classList.add("text-sky-400");
  textFill.classList.add("text-sky-400");
  numberRecord.classList.remove("text-sky-400");
  textRecord.classList.remove("text-sky-400");
  card02.classList.remove("flex");
  card02.classList.add("hidden");
  card01.classList.add("flex");
  card01.classList.remove("hidden");
});
cardRecord.addEventListener("click", () => {
  cardRecord.classList.add("border-t-sky-400");
  cardFill.classList.remove("border-t-sky-400");
  numberRecord.classList.add("text-sky-400");
  textRecord.classList.add("text-sky-400");
  numberFill.classList.remove("text-sky-400");
  textFill.classList.remove("text-sky-400");
  card02.classList.add("flex");
  card02.classList.remove("hidden");
  card01.classList.remove("flex");
  card01.classList.add("hidden");
});
