/*const container = document.querySelector(".container");
const countEl = document.getElementById("count");
const totalEl = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const MOVIES_URL = "./data/movies.json";

let movies = [];
let price = 0;

//Totalt pris för stolar
const update = () => {
  const selected = container.querySelectorAll(".seat.selected").length;
  countEl.textContent = selected;
  totalEl.textContent = selected * price;
};

//Pris för film 
const setPriceFromSelect = () => {
  const id = Number(movieSelect.value);
  price = movies.find((m) => m.id === id)?.price ?? 0;
};

//Meny och startpris
const renderMovies = () => {
  let html = "";

  movies.forEach((m) => {
  html += `<option value="${m.id}">${m.title} (${m.price} ${m.currency})</option>`;});
  movieSelect.innerHTML = html;
  setPriceFromSelect();
};

//Växla stol, uppdatera pris
container.addEventListener("click", (e) => {
  const seat = e.target.closest(".seat");
  if (!seat || seat.classList.contains("occupied")) return;
  seat.classList.toggle("selected");
  update();
});

//Uppdaterar priset när film byts
movieSelect.addEventListener("change", () => {
  setPriceFromSelect();
  update();
});

//Hämtar filmerna från json 
(async () => {
  movies = await (await fetch(MOVIES_URL)).json();
  renderMovies();
  update();
})();
// */