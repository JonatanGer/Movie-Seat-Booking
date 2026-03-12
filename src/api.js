export const fetchMovies = async () => {
  const response = await fetch("http://localhost:3000/movies");
  if (!response.ok) throw new Error("Kunde inte hämta filmer");
  return response.json();
};