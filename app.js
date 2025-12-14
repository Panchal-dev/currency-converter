const BASE_URL = "https://open.er-api.com/v6/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

//  1. Populate Dropdown Options
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    // Set default selections: USD for 'From' and INR for 'To'
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  // Update flag when a new currency is selected
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

//  2. Update Flag Image
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

//  3. Fetch Exchange Rate & Calculate
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;

  // Validate input: default to 1 if empty or negative
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const URL = `${BASE_URL}/${fromCurr.value}`;

  console.log(URL);

  try {
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.rates[toCurr.value];
    let finalAmount = amtVal * rate;

    // Display result
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${
      toCurr.value
    }`;
  } catch (error) {
    // Handle API errors
    msg.innerText = "Error fetching exchange rate";
    console.error("Error:", error);
  }
};

//  4. Event Listeners

// Button Click
btn.addEventListener("click", (evt) => {
  evt.preventDefault(); // Prevent form submission
  updateExchangeRate();
});

// Window Load (Initial Fetch)
window.addEventListener("load", () => {
  updateExchangeRate();
});
