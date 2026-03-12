const container = document.querySelector(".container");
const countEl = document.getElementById("count");
const totalEl = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let currentPrice = 0;

export const renderMovies = (movies) => {
  movieSelect.innerHTML = movies
    .map((m) => `<option value="${m.id}">${m.getLabel()}</option>`)
    .join("");
  currentPrice = movies[0]?.price ?? 0;
  update();
};

const update = () => {
  const selected = container.querySelectorAll(".seat.selected").length;
  countEl.textContent = selected;
  totalEl.textContent = selected * currentPrice;
};

export const bindEvents = (movies) => {
  container.addEventListener("click", (e) => {
    const seat = e.target.closest(".seat");
    if (!seat || seat.classList.contains("occupied")) return;
    seat.classList.toggle("selected");
    update();
  });

  movieSelect.addEventListener("change", () => {
    const id = Number(movieSelect.value);
    currentPrice = movies.find((m) => m.id === id)?.price ?? 0;
    update();
  });
};