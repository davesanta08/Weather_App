const input = document.querySelector("#input");
const checkBtn = document.querySelector("#checkBtn");
const displayMsg = document.querySelector("#displayMsg");
const getbatt = document.querySelector("#getbatt");
const apiKey = "511361e7796f4a4aa1a112416252011";

function clearInputScreen() {
  input.value = "";
}

async function fetchWeather(city) {
  try {
    //fetch data
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    );
    //check if response status is ok
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      //display data on screen
      displayMsg.innerHTML = `The temperature in ${data.current.temp_c} degrees and the humidity is ${data.current.humidity}%`;
      //clear input screen
      clearInputScreen();
    }
  } catch (error) {
    console.log(error);
  }
}

// async function getbattery() {
//   // compatibility helper: prefer navigator.getBattery(), fallback to navigator.battery / mozBattery
// }

// async function getBatteryCompat() {
//   if (navigator.getBattery) return navigator.getBattery();
//   if (navigator.battery) return Promise.resolve(navigator.battery);
//   if (navigator.mozBattery) return Promise.resolve(navigator.mozBattery);
//   return Promise.reject(new Error("Battery API not supported"));
// }

// async function updateBatteryDisplay() {
//   try {
//     const battery = await getBatteryCompat();
//     const render = () => {
//       const level =
//         battery.level != null ? Math.round(battery.level * 100) + "%" : "N/A";
//       const charging = battery.charging ? " (charging)" : "";
//       getbatt.innerHTML = `${level}${charging}`;
//       console.log("Battery:", level, "charging:", battery.charging);
//     };
//     // initial render
//     render();
//     // update on changes if supported
//     if (battery.addEventListener) {
//       battery.addEventListener("levelchange", render);
//       battery.addEventListener("chargingchange", render);
//     }
//   } catch (err) {
//     console.warn(err.message || err);
//     getbatt.innerHTML = "Battery API not supported";
//   }
// }

// updateBatteryDisplay();

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //get city
  const city = input.value;
  //fetch weather
  fetchWeather(city);
  navigator.vibrate(500);
});
