// API КиноПоиск

fetch(
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES",
  {
    method: "GET",
    headers: {
      "X-API-KEY": "e27e03b8-bf5d-4068-8584-31326495f508",
      "Content-Type": "application/json"
    }
  }
)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
