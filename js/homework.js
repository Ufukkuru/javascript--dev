let userName = prompt("Plese enter use the name: ")
let userNames = document.querySelector("#names")
userNames.innerHTML += userName

function displayDateTime() {

    const currentDate = new Date();
  
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentWeekday = weekdays[currentDate.getDay()];
  
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();
  

    const formattedDateTime = `${currentHour < 10 ? '0' : ''}${currentHour}:${currentMinute < 10 ? '0' : ''}${currentMinute}:${currentSecond < 10 ? '0' : ''}${currentSecond}, ${currentWeekday}`;
    document.getElementById('current-date-time').textContent = formattedDateTime;
  }
  setInterval(displayDateTime, 1000);


  
  