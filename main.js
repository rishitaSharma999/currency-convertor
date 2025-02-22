console.log("the file is working");




const populate = async (value, baseCurrency) => {
    let myStr = ""
    const apiKey = "cur_live_zqizB5A2LpOIhoZpo4MV5PULbKwNNWVCvf1W3lEM";
    const encodedApiKey = encodeURIComponent(apiKey);
    const url = `https://api.currencyapi.com/v3/latest?apikey=${encodedApiKey}&base_currency=${baseCurrency}`
    //https://api.currencyapi.com/v3/latest?apikey=
    //https://app.currencyapi.com : the site to use




    let response = await fetch(url);
    let rJson = await response.json();
    document.querySelector(".output").style.display = "block"

    for (let key of Object.keys(rJson["data"])) {
        myStr += `          
           <tr>
           <td>${rJson["data"][key]["code"]}</td>
           <td>${searchCountryName(key)}</td>
           <td>${search(key)}</td>
          
          
          <td>${(rJson["data"][key]["value"] * value).toFixed(2)}</td>
          </tr>
           `
    }

    const tableBody = document.querySelector("tbody")
    tableBody.innerHTML = myStr;
}

const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("button is clicked")
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const baseCurrency = document.querySelector("select[name='currency']").value;

    populate(value, baseCurrency)
})

function search(key) {
    for (let keys in currencyName) {
        if (keys == key) {
            return currencyName[keys];
        }
    }
}

function searchCountryName(keys){
    for(let key in countryName){
        if(key==keys){
            return countryName[key];
        }
    }
}


let currencyName = {

    "ADA": "Andorran Franc",
    "AED": "United Arab Emirates Dirham",
    "AFN": "Afghan Afghani",
    "ALL": "Albanian Lek",
    "AMD": "Armenian Dram",
    "ANG": "Netherlands Antillean Guilder",
    "AOA": "Angolan Kwanza",
    "ARB": "Arab World",
    "ARS": "Argentine Peso",
    "AUD": "Australian Dollar",
    "AVAX": "Avalanche",
    "AWG": "Aruban Florin",
    "AZN": "Azerbaijani Manat",
    "BAM": "Bosnia And Herzegovina Convertible Mark",
    "BBD": "Barbadian Dollar",
    "BDT": "Bangladeshi Taka",
    "BGN": "Bulgarian Lev",
    "BHD": "Bahraini Dinar",
    "BIF": "Burundian Franc",
    "BMD": "Bermudian Dollar",
    "BNB": "Binance Coin",
    "BND": "Brunei Dollar",
    "BOB": "Bolivian Boliviano",
    "BRL": "Brazilian Real",
    "BSD": "Bahamian Dollar",
    "BTC": "Bitcoin",
    "BTN": "Bhutanese Ngultrum",
    "BWP": "Botswana Pula",
    "BYN": "Belarusian Ruble",
    "BYR": "Belarusian Ruble (pre-2016)",
    "BZD": "Belize Dollar",
    "CAD": "Canadian Dollar",
    "CDF": "Congolese Franc",
    "CHF": "Swiss Franc",
    "CLF": "Chilean Unit Of Account (UF)",
    "CLP": "Chilean Peso",
    "CNY": "Chinese Yuan",
    "COP": "Colombian Peso",
    "CRC": "Costa Rican Colón",
    "CUC": "Cuban Convertible Peso",
    "CUP": "Cuban Peso",
    "CVE": "Cape Verdean Escudo",
    "CZK": "Czech Republic Koruna",
    "DAI": "Dai",
    "DJF": "Djiboutian Franc",
    "DKK": "Danish Krone",
    "DOP": "Dominican Peso",
    "DOT": "Polkadot",
    "DZD": "Algerian Dinar",
    "EGP": "Egyptian Pound",
    "ERN": "Eritrean Nakfa",
    "ETB": "Ethiopian Birr",
    "ETH": "Ethereum",
    "EUR": "Euro",
    "FJD": "Fijian Dollar",
    "FKP": "Falkland Islands Pound",
    "GBP": "British Pound Sterling",
    "GEL": "Georgian Lari",
    "GGP": "Guernsey Pound",
    "GHS": "Ghanaian Cedi",
    "GIP": "Gibraltar Pound",
    "GMD": "Gambian Dalasi",
    "GNF": "Guinean Franc",
    "GTQ": "Guatemalan Quetzal",
    "GYD": "Guyanaese Dollar",
    "HKD": "Hong Kong Dollar",
    "HNL": "Honduran Lempira",
    "HRK": "Croatian Kuna",
    "HTG": "Haitian Gourde",
    "HUF": "Hungarian Forint",
    "IDR": "Indonesian Rupiah",
    "ILS": "Israeli New Shekel",
    "IMP": "Isle of Man Pound",
    "INR": "Indian Rupee",
    "IQD": "Iraqi Dinar",
    "IRR": "Iranian Rial",
    "ISK": "Icelandic Króna",
    "JEP": "Jersey Pound",
    "JMD": "Jamaican Dollar",
    "JOD": "Jordanian Dinar",
    "JPY": "Japanese Yen",
    "KES": "Kenyan Shilling",
    "KGS": "Kyrgyzstan Som",
    "KHR": "Cambodian Riel",
    "KMF": "Comorian Franc",
    "KPW": "North Korean Won",
    "KRW": "South Korean Won",
    "KWD": "Kuwaiti Dinar",
    "KYD": "Cayman Islands Dollar",
    "KZT": "Kazakhstani Tenge",
    "LAK": "Lao Kip",
    "LBP": "Lebanese Pound",
    "LKR": "Sri Lankan Rupee",
    "LRD": "Liberian Dollar",
    "LSL": "Lesotho Loti",
    "LTC": "Litecoin",
    "LTL": "Lithuanian Litas",
    "LVL": "Latvian Lats",
    "LYD": "Libyan Dinar",
    "MAD": "Moroccan Dirham",
    "MATIC": "Polygon",
    "MDL": "Moldovan Leu",
    "MGA": "Malagasy Ariary",
    "MKD": "Macedonian Denar",
    "MMK": "Burmese Kyat",
    "MNT": "Mongolian Tugrik",
    "MOP": "Macanese Pataca",
    "MRO": "Mauritanian Ouguiya",
    "MUR": "Mauritian Rupee",
    "MVR": "Maldivian Rufiyaa",
    "MWK": "Malawian Kwacha",
    "MXN": "Mexican Peso",
    "MYR": "Malaysian Ringgit",
    "MZN": "Mozambican Metical",
    "NAD": "Namibian Dollar",
    "NGN": "Nigerian Naira",
    "NIO": "Nicaraguan Córdoba",
    "NOK": "Norwegian Krone",
    "NPR": "Nepalese Rupee",
    "NZD": "New Zealand Dollar",
    "OMR": "Omani Rial",
    "OP": "Operand",
    "PAB": "Panamanian Balboa",
    "PEN": "Peruvian Nuevo Sol",
    "PGK": "Papua New Guinean Kina",
    "PHP": "Philippine Peso",
    "PKR": "Pakistani Rupee",
    "PLN": "Polish Złoty",
    "PYG": "Paraguayan Guarani",
    "QAR": "Qatari Riyal",
    "RON": "Romanian Leu",
    "RSD": "Serbian Dinar",
    "RUB": "Russian Ruble",
    "RWF": "Rwandan Franc",
    "SAR": "Saudi Riyal",
    "SBD": "Solomon Islands Dollar",
    "SCR": "Seychellois Rupee",
    "SDG": "Sudanese Pound",
    "SEK": "Swedish Krona",
    "SGD": "Singapore Dollar",
    "SHP": "Saint Helena Pound",
    "SLL": "Sierra Leonean Leone",
    "SOL": "Solana",
    "SOS": "Somali Shilling",
    "SRD": "Surinamese Dollar",
    "STD": "São Tomé and Príncipe Dobra",
    "SVC": "Salvadoran Colón",
    "SYP": "Syrian Pound",
    "SZL": "Swazi Lilangeni",
    "THB": "Thai Baht",
    "TJS": "Tajikistani Somoni",
    "TMT": "Turkmenistan Manat",
    "TND": "Tunisian Dinar",
    "TOP": "Tongan Pa'anga",
    "TRY": "Turkish Lira",
    "TTD": "Trinidad and Tobago Dollar",
    "TWD": "New Taiwan Dollar",
    "TZS": "Tanzanian Shilling",
    "UAH": "Ukrainian Hryvnia",
    "UGX": "Ugandan Shilling",
    "USD": "United States Dollar",
    "USDC": "USD Coin",
    "USDT": "Tether",
    "UYU": "Uruguayan Peso",
    "UZS": "Uzbekistani Som",
    "VEF": "Venezuelan Bolívar",
    "VND": "Vietnamese Dong",
    "VUV": "Vanuatu Vatu",
    "WST": "Samoan Tala",
    "XAF": "Central African CFA Franc",
    "XAG": "Silver Ounce",
    "XAU": "Gold Ounce",
    "XCD": "East Caribbean Dollar",
    "XDR": "Special Drawing Rights (SDR)",
    "XOF": "West African CFA Franc",
    "XPD": "Palladium Ounce",
    "XPF": "CFP Franc",
    "XPT": "Platinum Ounce",
    "XRP": "Ripple",
    "YER": "Yemeni Rial",
    "ZAR": "South African Rand",
    "ZMK": "Zambian Kwacha (pre-2013)",
    "ZMW": "Zambian Kwacha",
    "ZWL": "Zimbabwean Dollar (2009)",


};

let countryName = {
    "ADA": "Andorra",
    "AED": "United Arab Emirates",
    "AFN": "Afghanistan",
    "ALL": "Albania",
    "AMD": "Armenia",
    "ANG": "Netherlands Antilles",
    "AOA": "Angola",
    "ARB": "Arab World",
    "ARS": "Argentina",
    "AUD": "Australia",
    "AVAX": "Avalanche",
    "AWG": "Aruba",
    "AZN": "Azerbaijan",
    "BAM": "Bosnia And Herzegovina",
    "BBD": "Barbados",
    "BDT": "Bangladesh",
    "BGN": "Bulgaria",
    "BHD": "Bahrain",
    "BIF": "Burundi",
    "BMD": "Bermuda",
    "BNB": "Binance Coin",
    "BND": "Brunei",
    "BOB": "Bolivia",
    "BRL": "Brazil",
    "BSD": "Bahamas",
    "BTC": "Bitcoin",
    "BTN": "Bhutan",
    "BWP": "Botswana",
    "BYN": "Belarus",
    "BYR": "Belarus (pre-2016)",
    "BZD": "Belize",
    "CAD": "Canada",
    "CDF": "Congo",
    "CHF": "Switzerland",
    "CLF": "Chile (UF)",
    "CLP": "Chile",
    "CNY": "China",
    "COP": "Colombia",
    "CRC": "Costa Rica",
    "CUC": "Cuba (Convertible Peso)",
    "CUP": "Cuba",
    "CVE": "Cape Verde",
    "CZK": "Czech Republic",
    "DAI": "Dai",
    "DJF": "Djibouti",
    "DKK": "Denmark",
    "DOP": "Dominican Republic",
    "DOT": "Polkadot",
    "DZD": "Algeria",
    "EGP": "Egypt",
    "ERN": "Eritrea",
    "ETB": "Ethiopia",
    "ETH": "Ethereum",
    "EUR": "Euro",
    "FJD": "Fiji",
    "FKP": "Falkland Islands",
    "GBP": "United Kingdom",
    "GEL": "Georgia",
    "GGP": "Guernsey",
    "GHS": "Ghana",
    "GIP": "Gibraltar",
    "GMD": "Gambia",
    "GNF": "Guinea",
    "GTQ": "Guatemala",
    "GYD": "Guyana",
    "HKD": "Hong Kong",
    "HNL": "Honduras",
    "HRK": "Croatia",
    "HTG": "Haiti",
    "HUF": "Hungary",
    "IDR": "Indonesia",
    "ILS": "Israel",
    "IMP": "Isle of Man",
    "INR": "India",
    "IQD": "Iraq",
    "IRR": "Iran",
    "ISK": "Iceland",
    "JEP": "Jersey",
    "JMD": "Jamaica",
    "JOD": "Jordan",
    "JPY": "Japan",
    "KES": "Kenya",
    "KGS": "Kyrgyzstan",
    "KHR": "Cambodia",
    "KMF": "Comoros",
    "KPW": "North Korea",
    "KRW": "South Korea",
    "KWD": "Kuwait",
    "KYD": "Cayman Islands",
    "KZT": "Kazakhstan",
    "LAK": "Laos",
    "LBP": "Lebanon",
    "LKR": "Sri Lanka",
    "LRD": "Liberia",
    "LSL": "Lesotho",
    "LTC": "Litecoin",
    "LTL": "Lithuania",
    "LVL": "Latvia",
    "LYD": "Libya",
    "MAD": "Morocco",
    "MATIC": "Polygon",
    "MDL": "Moldova",
    "MGA": "Madagascar",
    "MKD": "North Macedonia",
    "MMK": "Myanmar",
    "MNT": "Mongolia",
    "MOP": "Macau",
    "MRO": "Mauritania",
    "MUR": "Mauritius",
    "MVR": "Maldives",
    "MWK": "Malawi",
    "MXN": "Mexico",
    "MYR": "Malaysia",
    "MZN": "Mozambique",
    "NAD": "Namibia",
    "NGN": "Nigeria",
    "NIO": "Nicaragua",
    "NOK": "Norway",
    "NPR": "Nepal",
    "NZD": "New Zealand",
    "OMR": "Oman",
    "OP": "Operand",
    "PAB": "Panama",
    "PEN": "Peru",
    "PGK": "Papua New Guinea",
    "PHP": "Philippines",
    "PKR": "Pakistan",
    "PLN": "Poland",
    "PYG": "Paraguay",
    "QAR": "Qatar",
    "RON": "Romania",
    "RSD": "Serbia",
    "RUB": "Russia",
    "RWF": "Rwanda",
    "SAR": "Saudi Arabia",
    "SBD": "Solomon Islands",
    "SCR": "Seychelles",
    "SDG": "Sudan",
    "SEK": "Sweden",
    "SGD": "Singapore",
    "SHP": "Saint Helena",
    "SLL": "Sierra Leone",
    "SOL": "Solana",
    "SOS": "Somalia",
    "SRD": "Suriname",
    "STD": "São Tomé and Príncipe",
    "SVC": "El Salvador",
    "SYP": "Syria",
    "SZL": "Eswatini",
    "THB": "Thailand",
    "TJS": "Tajikistan",
    "TMT": "Turkmenistan",
    "TND": "Tunisia",
    "TOP": "Tonga",
    "TRY": "Turkey",
    "TTD": "Trinidad and Tobago",
    "TWD": "Taiwan",
    "TZS": "Tanzania",
    "UAH": "Ukraine",
    "UGX": "Uganda",
    "USD": "United States",
    "USDC": "USD Coin",
    "USDT": "Tether",
    "UYU": "Uruguay",
    "UZS": "Uzbekistan",
    "VEF": "Venezuela",
    "VND": "Vietnam",
    "VUV": "Vanuatu",
    "WST": "Samoa",
    "XAF": "Central African CFA Franc",
    "XAG": "Silver Ounce",
    "XAU": "Gold Ounce",
    "XCD": "East Caribbean Dollar",
    "XDR": "Special Drawing Rights (SDR)",
    "XOF": "West African CFA Franc",
    "XPD": "Palladium Ounce",
    "XPF": "CFP Franc",
    "XPT": "Platinum Ounce",
    "XRP": "Ripple",
    "YER": "Yemen",
    "ZAR": "South Africa",
    "ZMK": "Zambia (pre-2013)",
    "ZMW": "Zambia",
    "ZWL": "Zimbabwe (2009)",
};

