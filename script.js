const cardName = document.querySelector(".card-name");
const cardCvv = document.querySelector(".card-cvv");
const cardNumber = document.querySelector(".card-number");
const cardDateMonth = document.querySelector(".card-date-month");
const cardDateYear = document.querySelector(".card-date-year");
const cardNamePara = document.querySelector(".card-name-para");
const cardNumberPara = document.querySelector(".card-number-para");
const cardExpDatePara = document.querySelector(".card-exp-date-para");
const cardCVVPara = document.querySelector(".card-cvv-para");
let numbersOnly = /^[0-9 ]+$/;
let lettersOnly = /^[a-zA-Z\s]+$/;
const form = document.getElementsByTagName("form");
const completeCard = document.querySelector(".complete-card");
const continueBtn = document.querySelector(".ctn-btn");
const name = document.querySelector("#name");
const number = document.querySelector("#number");
const expDateMonth = document.querySelector("#expiry-date-month");
const expDateYear = document.querySelector("#expiry-date-year");
const cvv = document.querySelector("#cvc");
const error = document.querySelector(".error");

function inputHandle(event) {
  // NAME
  if (event.target.id == "name") {
    if (event.target.value == "") {
      cardNamePara.innerHTML = "can't be blank";
      event.target.style.border = "2px solid red";
    } else if (lettersOnly.test(event.target.value)) {
      cardName.innerHTML = event.target.value;
      cardNamePara.innerHTML = "";
      event.target.style.border = "2px solid hsl(278, 68%, 11%)";
    } else {
      cardNamePara.innerHTML = "Enter valid name";
      event.target.style.border = "2px solid red";
    }
  }
  // NUMBER
  else if (event.target.id == "number") {
    let val = event.target.value;
    if (val == "") {
      cardNumberPara.innerHTML = "can't be blank";
      event.target.style.border = "2px solid red";
    } else if (numbersOnly.test(val) && val.length <= 19) {
      let inputValue = event.target.value.replace(/\D/g, ""); // Remove non-digit characters
      let formattedValue = inputValue.replace(/(\d{4})(?=\d)/g, "$1 "); // Group digits into sets of four
      event.target.value = formattedValue.trim();

      cardNumber.innerHTML = event.target.value;
      cardNumberPara.innerHTML = "";
      event.target.style.border = "2px solid hsl(278, 68%, 11%)";
    } else {
      cardNumberPara.innerHTML = "Enter valid card number";
      event.target.style.border = "2px solid red";
    }
  }
  // MONTH
  else if (event.target.id == "expiry-date-month") {
    if (event.target.value == "") {
      cardExpDatePara.innerHTML = "can't be blank";
      event.target.style.border = "2px solid red";
    } else if (event.target.value > 0 && event.target.value <= 12) {
      cardDateMonth.innerHTML = event.target.value;
      cardExpDatePara.innerHTML = "";
      event.target.style.border = "2px solid hsl(278, 68%, 11%)";
    } else {
      cardExpDatePara.innerHTML = "Enter valid month";
      event.target.style.border = "2px solid red";
    }
  }
  // YEAR
  else if (event.target.id == "expiry-date-year") {
    if (event.target.value == "") {
      cardExpDatePara.innerHTML = "can't be blank";
      event.target.style.border = "2px solid red";
    } else if (event.target.value >= 24) {
      cardDateYear.innerHTML = event.target.value;
      cardExpDatePara.innerHTML = "";
      event.target.style.border = "2px solid hsl(278, 68%, 11%)";
    } else {
      cardExpDatePara.innerHTML = "Enter valid year";
      event.target.style.border = "2px solid red";
    }
  }
  // CVV
  else {
    if (event.target.value == "") {
      cardCVVPara.innerHTML = "can't be blank";
      event.target.style.border = "2px solid red";
    } else if (event.target.value.length <= 3) {
      cardCvv.innerHTML = event.target.value;
      cardCVVPara.innerHTML = "";
      event.target.style.border = "2px solid hsl(278, 68%, 11%)";
    } else {
      cardCVVPara.innerHTML = "Enter valid CVV";
      event.target.style.border = "2px solid red";
    }
  }
}

form[0].addEventListener("submit", (e) => {
  if (
    name.value == "" ||
    number.value == "" ||
    expDateMonth.value == "" ||
    expDateYear.value == "" ||
    cvv.value == ""
  ) {
    error.innerHTML = "please fill all details";
    e.preventDefault();
    return;
  }
  e.preventDefault();
  e.target.style.display = "none";
  completeCard.style.display = "flex";
});

continueBtn.addEventListener("click", (e) => {
  e.target.style.display = "none";
  form[0].style.display = "block";
  location.reload();
});
