const url =
  "https://football-web-pages1.p.rapidapi.com/league-table.json?comp=1&team=1";

export const fetchLeagues = async () => {
  const headers = {
    "X-RapidAPI-Key": "53ca4eced4msh88e3bff0c957532p10fd39jsn05892f6d865a",
    "X-RapidAPI-Host": "football-web-pages1.p.rapidapi.com",
  };

  const response = await fetch(url, {
    headers: headers,
  });

  const result = await response.json();

  return result;
};
