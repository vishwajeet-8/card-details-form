const cardName = document.querySelector(".card-name");
const cardCvv = document.querySelector(".card-cvv");
const cardNumber = document.querySelector(".card-number");
const cardDateMonth = document.querySelector(".card-date-month");
const cardDateYear = document.querySelector(".card-date-year");
const cardNamePara = document.querySelector(".card-name-para");
const cardNumberPara = document.querySelector(".card-number-para");
const cardExpDatePara = document.querySelector(".card-exp-date-para");
const cardCVVPara = document.querySelector(".card-cvv-para");

function inputHandle(event) {
  // NAME
  if (event.target.id == "name") {
    if (event.target.value == "") {
      cardNamePara.innerHTML = "can't be blank";
      event.target.style.border = "2px solid red";
    } else {
      cardName.innerHTML = event.target.value;
      cardNamePara.innerHTML = "";
      event.target.style.border = "2px solid hsl(278, 68%, 11%)";
    }
  }
  // NUMBER
  else if (event.target.id == "number") {
    if (event.target.value == "") {
      cardNumberPara.innerHTML = "can't be blank";
      event.target.style.border = "2px solid red";
    } else {
      let val = event.target.value;
      if (val.length == 19) event.preventDefault();
      if (val.length == 5 || val.length == 10 || val.length == 15) {
        console.log(val);
        val = val + " a";
      }
      cardNumber.innerHTML = val;
      cardNumberPara.innerHTML = "";
      event.target.style.border = "2px solid hsl(278, 68%, 11%)";
    }
  }
  // MONTH
  else if (event.target.id == "expiry-date-month") {
    if (event.target.value == "") {
      cardExpDatePara.innerHTML = "can't be blank";
      event.target.style.border = "2px solid red";
    } else {
      cardDateMonth.innerHTML = event.target.value;
      cardExpDatePara.innerHTML = "";
      event.target.style.border = "2px solid hsl(278, 68%, 11%)";
    }
  }
  // YEAR
  else if (event.target.id == "expiry-date-year") {
    if (event.target.value == "") {
      cardExpDatePara.innerHTML = "can't be blank";
      event.target.style.border = "2px solid red";
    } else {
      cardDateYear.innerHTML = event.target.value;
      cardExpDatePara.innerHTML = "";
      event.target.style.border = "2px solid hsl(278, 68%, 11%)";
    }
  }
  // CVV
  else {
    if (event.target.value == "") {
      cardCVVPara.innerHTML = "can't be blank";
      event.target.style.border = "2px solid red";
    } else {
      cardCvv.innerHTML = event.target.value;
      cardCVVPara.innerHTML = "";
      event.target.style.border = "2px solid hsl(278, 68%, 11%)";
    }
  }
}
