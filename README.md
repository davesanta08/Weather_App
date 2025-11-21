# Weather App

A minimal client-side Weather App that fetches current weather for a user-entered location and displays temperature and humidity.

## Files
- [index.html](index.html) — page layout and form.
- [css/styles.css](css/styles.css) — styling.
- [script.js](script.js) — app logic:
  - [`input`](script.js) — text input element for the city name.
  - [`checkBtn`](script.js) — button that triggers the lookup.
  - [`displayMsg`](script.js) — element where results are shown.
  - [`getbatt`](script.js) — (unused/commented) battery display element.
  - [`apiKey`](script.js) — API key constant used for requests.
  - [`fetchWeather`](script.js) — function that performs the API request.
  - [`clearInputScreen`](script.js) — clears the input after successful lookup.

## Setup
1. Clone or copy the project folder.
2. Replace the placeholder API key in [script.js](script.js) by setting the [`apiKey`](script.js) constant to your WeatherAPI key.
   - Location: the top of `script.js`.
3. Open [index.html](index.html) in your browser (double-click or serve it via a static file server).

Note: The script currently uses `http` to call WeatherAPI. If you serve the page over `https`, update the fetch URL in [`fetchWeather`](script.js) to use `https://` to avoid mixed-content blocking.

## Usage
1. Enter a location (city name or query) into the input field.
2. Click "Check".
3. The app calls WeatherAPI and shows temperature (°C) and humidity in the display area.
4. The app also invokes `navigator.vibrate(500)` when the button is clicked (on devices that support vibration).

## Notes & Tips
- Error handling is minimal — failed requests are logged to the console.
- The Battery API code is present but commented out; you can enable and adapt it if you want to show battery state in [`getbatt`](script.js).
- For local development, you can use a simple server:
  ```sh
