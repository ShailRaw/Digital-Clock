setInterval(() => {
  let date = new Date();
  let dayNumber = date.getDay();
  let m =date.getMonth();
  let hour = date.getHours();
  let sec = date.getSeconds();
  let yr = date.getFullYear();
  let minute = date.getMinutes();
  let ampm = hour >= 12 ? 'PM' : 'AM';
  let dayNames = ["SUN", "MON", "TUE", "WED", "THU","FRI", "SAT"];
  let months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];

  hour = hour % 12;
  hour = hour ? hour : '12';
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  sec = sec < 10 ? '0' + sec : sec ;


  document.querySelector("#day").textContent = dayNames[dayNumber];
  document.querySelector("#hour").textContent = hour;
  document.querySelector("#minute").textContent = minute;
  document.querySelector("#second").textContent = sec;
  document.querySelector("#ampm").textContent = ampm;
  document.querySelector("#year").textContent = yr;
  document.querySelector("#month").textContent = months[m];
}, 1000);

