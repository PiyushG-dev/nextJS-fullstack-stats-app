const url =
  "https://football-web-pages1.p.rapidapi.com/league-table.json?comp=1&team=1";

export const fetchLeagues = async () => {
  const headers = {};

  const response = await fetch(url, {
    headers: headers,
  });

  const result = await response.json();

  return result;
};
