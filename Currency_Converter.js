const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";

const dropdowns = document.querySelectorAll(".dropdown select");

for (code in countryList){
    console.log(code, countryList[code]);
}