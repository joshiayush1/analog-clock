document.addEventListener("DOMContentLoaded", function () {
  const hourHand = document.querySelector("[data-hour-hand]");
  const minuteHand = document.querySelector("[data-minute-hand]");
  const secondHand = document.querySelector("[data-second-hand]");
  if (hourHand && minuteHand && secondHand) {
    setInterval(setClock, 1000);
    setClock(); 

    function setClock() {
      const curDate = new Date();
      const secondsRatio = curDate.getSeconds() / 60;
      const minutesRatio = (secondsRatio + curDate.getMinutes()) / 60;
      const hoursRatio = (minutesRatio + curDate.getHours()) / 12;

      setRotation(secondHand, secondsRatio);
      setRotation(minuteHand, minutesRatio);
      setRotation(hourHand, hoursRatio);
    }

    function setRotation(element, rotationRatio) {
      if (element) {
        element.style.setProperty("--rotation", rotationRatio * 360);
      }
    }
  } 
  
});
function updateDate() {
  const myDate = new Date();
  const options = { timeZone: 'Asia/Kolkata', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const formattedDate = myDate.toLocaleDateString(undefined, options);

  const dateDisplayElement = document.querySelector('.digital-clock[data-hour-minute-second]');

  if (dateDisplayElement) {
    dateDisplayElement.textContent = `Current Date and Time in IST is :- ${formattedDate}`;
  }
}

// Call the updateDate function initially
updateDate();

// Update the date every second (1000 milliseconds)
setInterval(updateDate, 1000);